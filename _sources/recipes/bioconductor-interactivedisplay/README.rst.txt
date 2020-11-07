:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-interactivedisplay'
.. highlight: bash

bioconductor-interactivedisplay
===============================

.. conda:recipe:: bioconductor-interactivedisplay
   :replaces_section_title:
   :noindex:

   Package for enabling powerful shiny web displays of Bioconductor objects

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/interactiveDisplay.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-interactivedisplay <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interactivedisplay>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interactivedisplay/meta.yaml>`_
   :links: biotools: :biotools:`interactivedisplay`, doi: :doi:`10.1038/nmeth.3252`

   The interactiveDisplay package contains the methods needed to generate interactive Shiny based display methods for Bioconductor objects.


.. conda:package:: bioconductor-interactivedisplay

   |downloads_bioconductor-interactivedisplay| |docker_bioconductor-interactivedisplay|

   :versions:
      
      

      ``1.18.0-0``,  ``1.16.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.42.1,<1.44.0``
   :depends bioconductor-biocgenerics: ``>=0.26.0,<0.28.0``
   :depends bioconductor-category: ``>=2.46.0,<2.48.0``
   :depends bioconductor-interactivedisplaybase: ``>=1.18.0,<1.20.0``
   :depends r-base: ``>=3.4.1,<3.4.2.0a0``
   :depends r-ggplot2: 
   :depends r-gridsvg: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-shiny: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-interactivedisplay

   and update with::

      conda update bioconductor-interactivedisplay

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-interactivedisplay:<tag>

   (see `bioconductor-interactivedisplay/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-interactivedisplay| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-interactivedisplay.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-interactivedisplay
   :alt:   (downloads)
.. |docker_bioconductor-interactivedisplay| image:: https://quay.io/repository/biocontainers/bioconductor-interactivedisplay/status
   :target: https://quay.io/repository/biocontainers/bioconductor-interactivedisplay
.. _`bioconductor-interactivedisplay/tags`: https://quay.io/repository/biocontainers/bioconductor-interactivedisplay?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-interactivedisplay/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-interactivedisplay/README.html