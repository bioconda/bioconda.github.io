:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-arrayexpresshts'
.. highlight: bash

bioconductor-arrayexpresshts
============================

.. conda:recipe:: bioconductor-arrayexpresshts
   :replaces_section_title:

   RNA\-Seq processing pipeline for public ArrayExpress experiments or local datasets

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/ArrayExpressHTS.html
   :license: Artistic License 2.0
   :recipe: /`bioconductor-arrayexpresshts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayexpresshts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayexpresshts/meta.yaml>`_

   


.. conda:package:: bioconductor-arrayexpresshts

   |downloads_bioconductor-arrayexpresshts| |docker_bioconductor-arrayexpresshts|

   :versions: 1.34.2-0, 1.32.1-0, 1.32.0-0
   
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-biomart: >=2.40.0,<2.41.0
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-deseq: >=1.36.0,<1.37.0
   :depends bioconductor-edger: >=3.26.0,<3.27.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-rhtslib: >=1.16.0,<1.17.0
   :depends bioconductor-rsamtools: >=2.0.0,<2.1.0
   :depends bioconductor-shortread: >=1.42.0,<1.43.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-bitops: 
   :depends r-hmisc: 
   :depends r-r2html: 
   :depends r-rcolorbrewer: 
   :depends r-rjava: 
   :depends r-sampling: 
   :depends r-sendmailr: 
   :depends r-snow: 
   :depends r-svmisc: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-arrayexpresshts

   and update with::

      conda update bioconductor-arrayexpresshts

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-arrayexpresshts:<tag>

   (see `bioconductor-arrayexpresshts/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-arrayexpresshts| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-arrayexpresshts.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-arrayexpresshts
   :alt:   (downloads)
.. |docker_bioconductor-arrayexpresshts| image:: https://quay.io/repository/biocontainers/bioconductor-arrayexpresshts/status
   :target: https://quay.io/repository/biocontainers/bioconductor-arrayexpresshts
.. _`bioconductor-arrayexpresshts/tags`: https://quay.io/repository/biocontainers/bioconductor-arrayexpresshts?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-arrayexpresshts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-arrayexpresshts/README.html