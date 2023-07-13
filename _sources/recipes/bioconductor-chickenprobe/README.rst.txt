:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chickenprobe'
.. highlight: bash

bioconductor-chickenprobe
=========================

.. conda:recipe:: bioconductor-chickenprobe
   :replaces_section_title:
   :noindex:

   Probe sequence data for microarrays of type chicken

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/chickenprobe.html
   :license: LGPL
   :recipe: /`bioconductor-chickenprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chickenprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chickenprobe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was Chicken\\\_probe\\\_tab.


.. conda:package:: bioconductor-chickenprobe

   |downloads_bioconductor-chickenprobe| |docker_bioconductor-chickenprobe|

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

      conda install bioconductor-chickenprobe

   and update with::

      conda update bioconductor-chickenprobe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chickenprobe:<tag>

   (see `bioconductor-chickenprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chickenprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chickenprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chickenprobe
   :alt:   (downloads)
.. |docker_bioconductor-chickenprobe| image:: https://quay.io/repository/biocontainers/bioconductor-chickenprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chickenprobe
.. _`bioconductor-chickenprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-chickenprobe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chickenprobe";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chickenprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chickenprobe/README.html