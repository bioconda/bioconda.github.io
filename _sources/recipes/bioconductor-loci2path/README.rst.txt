.. title:: Package Recipe 'bioconductor-loci2path'
.. highlight: bash


bioconductor-loci2path
======================

.. conda:recipe:: bioconductor-loci2path
   :replaces_section_title:

   loci2path performs statistics\-rigorous enrichment analysis of eQTLs in genomic regions of interest. Using eQTL collections provided by the Genotype\-Tissue Expression \(GTEx\) project and pathway collections from MSigDB.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/loci2path.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-loci2path <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-loci2path>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-loci2path/meta.yaml>`_

   


.. conda:package:: bioconductor-loci2path

   |downloads_bioconductor-loci2path| |docker_bioconductor-loci2path|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-pheatmap`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-wordcloud`  

   :required~by: |required_by_bioconductor-loci2path|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-loci2path

   and update with::

      conda update bioconductor-loci2path

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-loci2path


.. |required_by_bioconductor-loci2path| conda:required_by:: bioconductor-loci2path
.. |downloads_bioconductor-loci2path| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-loci2path.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-loci2path| image:: https://quay.io/repository/biocontainers/bioconductor-loci2path/status
   :target: https://quay.io/repository/biocontainers/bioconductor-loci2path







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-loci2path/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-loci2path/README.html

