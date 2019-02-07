.. title:: Package Recipe 'bioconductor-arrayexpresshts'
.. highlight: bash


bioconductor-arrayexpresshts
============================

.. conda:recipe:: bioconductor-arrayexpresshts
   :replaces_section_title:

   RNA\-Seq processing pipeline for public ArrayExpress experiments or local datasets

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ArrayExpressHTS.html
   :license: Artistic License 2.0
   :recipe: /`bioconductor-arrayexpresshts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayexpresshts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayexpresshts/meta.yaml>`_

   


.. conda:package:: bioconductor-arrayexpresshts

   |downloads_bioconductor-arrayexpresshts| |docker_bioconductor-arrayexpresshts|

   :versions: 1.32.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-deseq` >=1.34.0,<1.35.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-shortread` >=1.40.0,<1.41.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bitops`  :conda:package:`r-hmisc`  :conda:package:`r-r2html`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-rjava`  :conda:package:`r-sampling`  :conda:package:`r-sendmailr`  :conda:package:`r-snow`  :conda:package:`r-svmisc`  :conda:package:`r-xml`  

   :required~by: |required_by_bioconductor-arrayexpresshts|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-arrayexpresshts

   and update with::

      conda update bioconductor-arrayexpresshts

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-arrayexpresshts


.. |required_by_bioconductor-arrayexpresshts| conda:required_by:: bioconductor-arrayexpresshts
.. |downloads_bioconductor-arrayexpresshts| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-arrayexpresshts.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-arrayexpresshts| image:: https://quay.io/repository/biocontainers/bioconductor-arrayexpresshts/status
   :target: https://quay.io/repository/biocontainers/bioconductor-arrayexpresshts







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-arrayexpresshts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-arrayexpresshts/README.html

