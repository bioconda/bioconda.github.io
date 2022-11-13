:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-interaccircos'
.. highlight: bash

bioconductor-interaccircos
==========================

.. conda:recipe:: bioconductor-interaccircos
   :replaces_section_title:
   :noindex:

   The Generation of Interactive Circos Plot

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/interacCircos.html
   :license: GPL-3
   :recipe: /`bioconductor-interaccircos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interaccircos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interaccircos/meta.yaml>`_

   Implement in an efficient approach to display the genomic data\, relationship\, information in an interactive circular genome\(Circos\) plot. \'interacCircos\' are inspired by \'circosJS\'\, \'BioCircos.js\' and \'NG\-Circos\' and we integrate the modules of \'circosJS\'\, \'BioCircos.js\' and \'NG\-Circos\' into this R package\, based on \'htmlwidgets\' framework.


.. conda:package:: bioconductor-interaccircos

   |downloads_bioconductor-interaccircos| |docker_bioconductor-interaccircos|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-htmlwidgets: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-interaccircos

   and update with::

      conda update bioconductor-interaccircos

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-interaccircos:<tag>

   (see `bioconductor-interaccircos/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-interaccircos| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-interaccircos.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-interaccircos
   :alt:   (downloads)
.. |docker_bioconductor-interaccircos| image:: https://quay.io/repository/biocontainers/bioconductor-interaccircos/status
   :target: https://quay.io/repository/biocontainers/bioconductor-interaccircos
.. _`bioconductor-interaccircos/tags`: https://quay.io/repository/biocontainers/bioconductor-interaccircos?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-interaccircos";
        var versions = ["1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-interaccircos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-interaccircos/README.html