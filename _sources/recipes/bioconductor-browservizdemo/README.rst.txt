:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-browservizdemo'
.. highlight: bash

bioconductor-browservizdemo
===========================

.. conda:recipe:: bioconductor-browservizdemo
   :replaces_section_title:

   A BrowserViz subclassing example\, xy plotting in the browser using d3.

   :homepage: http://bioconductor.org/packages/3.7/bioc/html/BrowserVizDemo.html
   :license: GPL-2
   :recipe: /`bioconductor-browservizdemo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-browservizdemo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-browservizdemo/meta.yaml>`_
   :links: biotools: :biotools:`browservizdemo`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-browservizdemo

   |downloads_bioconductor-browservizdemo| |docker_bioconductor-browservizdemo|

   :versions: 1.11.0-0, 1.10.0-0
   
   :depends bioconductor-biocgenerics: >=0.26.0,<0.28.0
   
   :depends bioconductor-browserviz: >=2.2.0,<2.4.0
   
   :depends r-base: >=3.4.1,<3.4.2.0a0
   
   :depends r-httpuv: >=1.3.2
   
   :depends r-jsonlite: >=0.9.15
   
   :depends r-rcpp: >=0.11.5
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-browservizdemo

   and update with::

      conda update bioconductor-browservizdemo

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-browservizdemo:<tag>

   (see `bioconductor-browservizdemo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-browservizdemo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-browservizdemo.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-browservizdemo| image:: https://quay.io/repository/biocontainers/bioconductor-browservizdemo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-browservizdemo
.. _`bioconductor-browservizdemo/tags`: https://quay.io/repository/biocontainers/bioconductor-browservizdemo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-browservizdemo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-browservizdemo/README.html