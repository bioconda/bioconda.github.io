.. title:: Package Recipe 'bioconductor-interactivedisplay'
.. highlight: bash


bioconductor-interactivedisplay
===============================

.. conda:recipe:: bioconductor-interactivedisplay
   :replaces_section_title:

   The interactiveDisplay package contains the methods needed to generate interactive Shiny based display methods for Bioconductor objects.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/interactiveDisplay.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-interactivedisplay <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interactivedisplay>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interactivedisplay/meta.yaml>`_
   :links: biotools: :biotools:`interactivedisplay`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-interactivedisplay

   |downloads_bioconductor-interactivedisplay| |docker_bioconductor-interactivedisplay|

   :versions: 1.18.0, 1.16.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.42.1,<1.44.0 :conda:package:`bioconductor-biocgenerics` >=0.26.0,<0.28.0 :conda:package:`bioconductor-category` >=2.46.0,<2.48.0 :conda:package:`bioconductor-interactivedisplaybase` >=1.18.0,<1.20.0 :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-gridsvg`  :conda:package:`r-plyr`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape2`  :conda:package:`r-shiny`  :conda:package:`r-xml`  

   :required~by: |required_by_bioconductor-interactivedisplay|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-interactivedisplay

   and update with::

      conda update bioconductor-interactivedisplay

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-interactivedisplay


.. |required_by_bioconductor-interactivedisplay| conda:required_by:: bioconductor-interactivedisplay
.. |downloads_bioconductor-interactivedisplay| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-interactivedisplay.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-interactivedisplay| image:: https://quay.io/repository/biocontainers/bioconductor-interactivedisplay/status
   :target: https://quay.io/repository/biocontainers/bioconductor-interactivedisplay







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-interactivedisplay/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-interactivedisplay/README.html

