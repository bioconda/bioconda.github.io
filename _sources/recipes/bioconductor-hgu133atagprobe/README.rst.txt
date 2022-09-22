:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu133atagprobe'
.. highlight: bash

bioconductor-hgu133atagprobe
============================

.. conda:recipe:: bioconductor-hgu133atagprobe
   :replaces_section_title:
   :noindex:

   Probe sequence data for microarrays of type hgu133atag

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/hgu133atagprobe.html
   :license: LGPL
   :recipe: /`bioconductor-hgu133atagprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133atagprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133atagprobe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was HG\-U133A\\\_tag\\\_probe\\\_tab.


.. conda:package:: bioconductor-hgu133atagprobe

   |downloads_bioconductor-hgu133atagprobe| |docker_bioconductor-hgu133atagprobe|

   :versions:
      
      

      ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu133atagprobe

   and update with::

      conda update bioconductor-hgu133atagprobe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu133atagprobe:<tag>

   (see `bioconductor-hgu133atagprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu133atagprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu133atagprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu133atagprobe
   :alt:   (downloads)
.. |docker_bioconductor-hgu133atagprobe| image:: https://quay.io/repository/biocontainers/bioconductor-hgu133atagprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu133atagprobe
.. _`bioconductor-hgu133atagprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu133atagprobe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hgu133atagprobe";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu133atagprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu133atagprobe/README.html