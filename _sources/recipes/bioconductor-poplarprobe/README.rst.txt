:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-poplarprobe'
.. highlight: bash

bioconductor-poplarprobe
========================

.. conda:recipe:: bioconductor-poplarprobe
   :replaces_section_title:
   :noindex:

   Probe sequence data for microarrays of type poplar

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/poplarprobe.html
   :license: LGPL
   :recipe: /`bioconductor-poplarprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-poplarprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-poplarprobe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was Poplar\\\_probe\\\_tab.


.. conda:package:: bioconductor-poplarprobe

   |downloads_bioconductor-poplarprobe| |docker_bioconductor-poplarprobe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-11</code>,  <code>2.18.0-10</code>,  <code>2.18.0-9</code>,  <code>2.18.0-8</code>,  <code>2.18.0-7</code>,  <code>2.18.0-6</code>,  <code>2.18.0-5</code>,  <code>2.18.0-4</code>,  <code>2.18.0-3</code>,  </span></summary>
      

      ``2.18.0-11``,  ``2.18.0-10``,  ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-poplarprobe

   and update with::

      conda update bioconductor-poplarprobe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-poplarprobe:<tag>

   (see `bioconductor-poplarprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-poplarprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-poplarprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-poplarprobe
   :alt:   (downloads)
.. |docker_bioconductor-poplarprobe| image:: https://quay.io/repository/biocontainers/bioconductor-poplarprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-poplarprobe
.. _`bioconductor-poplarprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-poplarprobe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-poplarprobe";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-poplarprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-poplarprobe/README.html