.. title:: Package Recipe 'r-whopgenome'
.. highlight: bash


r-whopgenome
============

.. conda:recipe:: r-whopgenome
   :replaces_section_title:

   Provides very fast access to whole genome\, population scale variation data from VCF files and sequence data from FASTA\-formatted files. It also reads in alignments from FASTA\, Phylip\, MAF and other file formats. Provides easy\-to\-use interfaces to genome annotation from UCSC and Bioconductor and gene ontology data from AmiGO and is capable to read\, modify and write PLINK .PED\-format pedigree files.

   :homepage: https://CRAN.R-project.org/package=WhopGenome
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-whopgenome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-whopgenome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-whopgenome/meta.yaml>`_

   


.. conda:package:: r-whopgenome

   |downloads_r-whopgenome| |docker_r-whopgenome|

   :versions: 0.9.7

   :depends: :conda:package:`bioconductor-annotationdbi`  :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`r-base` >=3.3.2,<3.3.3.0a0 :conda:package:`r-dbi`  :conda:package:`r-rmysql`  

   :required~by: |required_by_r-whopgenome|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-whopgenome

   and update with::

      conda update r-whopgenome

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-whopgenome


.. |required_by_r-whopgenome| conda:required_by:: r-whopgenome
.. |downloads_r-whopgenome| image:: https://img.shields.io/conda/dn/bioconda/r-whopgenome.svg?style=flat
   :alt:   (downloads)
.. |docker_r-whopgenome| image:: https://quay.io/repository/biocontainers/r-whopgenome/status
   :target: https://quay.io/repository/biocontainers/r-whopgenome







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-whopgenome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-whopgenome/README.html

