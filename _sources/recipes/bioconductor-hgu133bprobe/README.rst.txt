:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu133bprobe'
.. highlight: bash

bioconductor-hgu133bprobe
=========================

.. conda:recipe:: bioconductor-hgu133bprobe
   :replaces_section_title:
   :noindex:

   Probe sequence data for microarrays of type hgu133b

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/hgu133bprobe.html
   :license: LGPL
   :recipe: /`bioconductor-hgu133bprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133bprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133bprobe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was HG\-U133B\\\_probe\\\_tab.


.. conda:package:: bioconductor-hgu133bprobe

   |downloads_bioconductor-hgu133bprobe| |docker_bioconductor-hgu133bprobe|

   :versions:
      
      

      ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu133bprobe

   and update with::

      conda update bioconductor-hgu133bprobe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu133bprobe:<tag>

   (see `bioconductor-hgu133bprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu133bprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu133bprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu133bprobe
   :alt:   (downloads)
.. |docker_bioconductor-hgu133bprobe| image:: https://quay.io/repository/biocontainers/bioconductor-hgu133bprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu133bprobe
.. _`bioconductor-hgu133bprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu133bprobe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hgu133bprobe";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu133bprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu133bprobe/README.html