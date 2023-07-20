:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rattoxfxprobe'
.. highlight: bash

bioconductor-rattoxfxprobe
==========================

.. conda:recipe:: bioconductor-rattoxfxprobe
   :replaces_section_title:
   :noindex:

   Probe sequence data for microarrays of type rattoxfx

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/rattoxfxprobe.html
   :license: LGPL
   :recipe: /`bioconductor-rattoxfxprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rattoxfxprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rattoxfxprobe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was RatToxFX\\\_probe\\\_tab.


.. conda:package:: bioconductor-rattoxfxprobe

   |downloads_bioconductor-rattoxfxprobe| |docker_bioconductor-rattoxfxprobe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-12</code>,  <code>2.18.0-11</code>,  <code>2.18.0-10</code>,  <code>2.18.0-9</code>,  <code>2.18.0-8</code>,  <code>2.18.0-7</code>,  <code>2.18.0-6</code>,  <code>2.18.0-5</code>,  <code>2.18.0-4</code>,  </span></summary>
      

      ``2.18.0-12``,  ``2.18.0-11``,  ``2.18.0-10``,  ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-1``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rattoxfxprobe

   and update with::

      conda update bioconductor-rattoxfxprobe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rattoxfxprobe:<tag>

   (see `bioconductor-rattoxfxprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rattoxfxprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rattoxfxprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rattoxfxprobe
   :alt:   (downloads)
.. |docker_bioconductor-rattoxfxprobe| image:: https://quay.io/repository/biocontainers/bioconductor-rattoxfxprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rattoxfxprobe
.. _`bioconductor-rattoxfxprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-rattoxfxprobe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rattoxfxprobe";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rattoxfxprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rattoxfxprobe/README.html