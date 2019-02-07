.. title:: Package Recipe 'bioconvert'
.. highlight: bash


bioconvert
==========

.. conda:recipe:: bioconvert
   :replaces_section_title:

   convert various bioinformatics formats

   :homepage: http://bioconvert.readthedocs.io/
   :license: GPL / GPL3
   :recipe: /`bioconvert <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconvert>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconvert/meta.yaml>`_

   


.. conda:package:: bioconvert

   |downloads_bioconvert| |docker_bioconvert|

   :versions: 0.2.0, 0.0.10

   :depends: :conda:package:`bamtools`  :conda:package:`bcftools`  :conda:package:`bedtools`  :conda:package:`bioawk`  :conda:package:`biopython`  :conda:package:`colorlog`  :conda:package:`deeptools`  :conda:package:`dsrc`  :conda:package:`easydev` >=0.9.36 :conda:package:`go` 1.10.3 :conda:package:`mappy`  :conda:package:`matplotlib`  :conda:package:`mawk`  :conda:package:`networkx`  :conda:package:`pandas`  :conda:package:`pbzip2`  :conda:package:`pigz`  :conda:package:`plink`  :conda:package:`pyexcel`  :conda:package:`pyexcel-ods3`  :conda:package:`pyexcel-xls`  :conda:package:`pysam`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`pyyaml`  :conda:package:`sambamba`  :conda:package:`samtools`  :conda:package:`sed`  :conda:package:`seqtk`  :conda:package:`squizz`  :conda:package:`sra-tools`  :conda:package:`ucsc-bedgraphtobigwig`  :conda:package:`ucsc-bigwigtobedgraph`  :conda:package:`ucsc-fatotwobit`  :conda:package:`ucsc-twobittofa`  :conda:package:`wiggletools`  :conda:package:`xlrd`  

   :required~by: |required_by_bioconvert|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconvert

   and update with::

      conda update bioconvert

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconvert


.. |required_by_bioconvert| conda:required_by:: bioconvert
.. |downloads_bioconvert| image:: https://img.shields.io/conda/dn/bioconda/bioconvert.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconvert| image:: https://quay.io/repository/biocontainers/bioconvert/status
   :target: https://quay.io/repository/biocontainers/bioconvert







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconvert/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconvert/README.html

