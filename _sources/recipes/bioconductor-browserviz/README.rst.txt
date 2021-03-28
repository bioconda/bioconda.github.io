:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-browserviz'
.. highlight: bash

bioconductor-browserviz
=======================

.. conda:recipe:: bioconductor-browserviz
   :replaces_section_title:
   :noindex:

   BrowserViz\: interactive R\/browser graphics using websockets and JSON

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/BrowserViz.html
   :license: GPL-2
   :recipe: /`bioconductor-browserviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-browserviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-browserviz/meta.yaml>`_
   :links: biotools: :biotools:`browserviz`, doi: :doi:`10.1007/978-1-4302-4426-4_17`

   Interactvive graphics in a web browser from R\, using websockets and JSON.


.. conda:package:: bioconductor-browserviz

   |downloads_bioconductor-browserviz| |docker_bioconductor-browserviz|

   :versions:
      
      

      ``2.12.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.4.0-0``,  ``2.2.0-0``,  ``1.10.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-httpuv: ``>=1.5.0``
   :depends r-jsonlite: ``>=1.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-browserviz

   and update with::

      conda update bioconductor-browserviz

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-browserviz:<tag>

   (see `bioconductor-browserviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-browserviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-browserviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-browserviz
   :alt:   (downloads)
.. |docker_bioconductor-browserviz| image:: https://quay.io/repository/biocontainers/bioconductor-browserviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-browserviz
.. _`bioconductor-browserviz/tags`: https://quay.io/repository/biocontainers/bioconductor-browserviz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-browserviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-browserviz/README.html