.. title:: Package Recipe 'bioconductor-ffpe'
.. highlight: bash


bioconductor-ffpe
=================

.. conda:recipe:: bioconductor-ffpe
   :replaces_section_title:

   Identify low\-quality data using metrics developed for expression data derived from Formalin\-Fixed\, Paraffin\-Embedded \(FFPE\) data.  Also a function for making Concordance at the Top plots \(CAT\-plots\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ffpe.html
   :license: GPL (>2)
   :recipe: /`bioconductor-ffpe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ffpe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ffpe/meta.yaml>`_
   :links: biotools: :biotools:`ffpe`

   


.. conda:package:: bioconductor-ffpe

   |downloads_bioconductor-ffpe| |docker_bioconductor-ffpe|

   :versions: 1.26.0, 1.24.0, 1.22.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-lumi` >=2.34.0,<2.35.0 :conda:package:`bioconductor-methylumi` >=2.28.0,<2.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-sfsmisc`  :conda:package:`r-ttr`  

   :required~by: |required_by_bioconductor-ffpe|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ffpe

   and update with::

      conda update bioconductor-ffpe

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ffpe


.. |required_by_bioconductor-ffpe| conda:required_by:: bioconductor-ffpe
.. |downloads_bioconductor-ffpe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ffpe.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ffpe| image:: https://quay.io/repository/biocontainers/bioconductor-ffpe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ffpe







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ffpe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ffpe/README.html

