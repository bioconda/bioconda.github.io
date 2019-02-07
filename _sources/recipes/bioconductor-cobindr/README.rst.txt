.. title:: Package Recipe 'bioconductor-cobindr'
.. highlight: bash


bioconductor-cobindr
====================

.. conda:recipe:: bioconductor-cobindr
   :replaces_section_title:

   Finding and analysing co\-occuring motifs of transcription factor binding sites in groups of genes

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/cobindR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cobindr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cobindr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cobindr/meta.yaml>`_

   


.. conda:package:: bioconductor-cobindr

   |downloads_bioconductor-cobindr| |docker_bioconductor-cobindr|

   :versions: 1.20.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gmp`  :conda:package:`r-gplots`  :conda:package:`r-mclust`  :conda:package:`r-rtfbs`  :conda:package:`r-seqinr`  :conda:package:`r-yaml`  

   :required~by: |required_by_bioconductor-cobindr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cobindr

   and update with::

      conda update bioconductor-cobindr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cobindr


.. |required_by_bioconductor-cobindr| conda:required_by:: bioconductor-cobindr
.. |downloads_bioconductor-cobindr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cobindr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cobindr| image:: https://quay.io/repository/biocontainers/bioconductor-cobindr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cobindr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cobindr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cobindr/README.html

