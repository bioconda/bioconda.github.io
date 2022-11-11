:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-interactivedisplay'
.. highlight: bash

bioconductor-interactivedisplay
===============================

.. conda:recipe:: bioconductor-interactivedisplay
   :replaces_section_title:
   :noindex:

   Package for enabling powerful shiny web displays of Bioconductor objects

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/interactiveDisplay.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-interactivedisplay <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interactivedisplay>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interactivedisplay/meta.yaml>`_
   :links: biotools: :biotools:`interactivedisplay`, doi: :doi:`10.1038/nmeth.3252`

   The interactiveDisplay package contains the methods needed to generate interactive Shiny based display methods for Bioconductor objects.


.. conda:package:: bioconductor-interactivedisplay

   |downloads_bioconductor-interactivedisplay| |docker_bioconductor-interactivedisplay|

   :versions:
      
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-category: ``>=2.64.0,<2.65.0``
   :depends bioconductor-interactivedisplaybase: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-biocmanager: 
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


.. raw:: html

    <script>
        var package = "bioconductor-interactivedisplay";
        var versions = ["1.36.0","1.32.0","1.30.0","1.28.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-interactivedisplay/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-interactivedisplay/README.html