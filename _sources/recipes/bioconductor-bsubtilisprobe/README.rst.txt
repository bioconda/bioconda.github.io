:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsubtilisprobe'
.. highlight: bash

bioconductor-bsubtilisprobe
===========================

.. conda:recipe:: bioconductor-bsubtilisprobe
   :replaces_section_title:
   :noindex:

   Probe sequence data for microarrays of type bsubtilis

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/bsubtilisprobe.html
   :license: LGPL
   :recipe: /`bioconductor-bsubtilisprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsubtilisprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsubtilisprobe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was Bsubtilis\\\_probe\\\_tab.


.. conda:package:: bioconductor-bsubtilisprobe

   |downloads_bioconductor-bsubtilisprobe| |docker_bioconductor-bsubtilisprobe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-10</code>,  <code>2.18.0-9</code>,  <code>2.18.0-8</code>,  <code>2.18.0-7</code>,  <code>2.18.0-6</code>,  <code>2.18.0-5</code>,  <code>2.18.0-4</code>,  <code>2.18.0-3</code>,  <code>2.18.0-1</code>,  </span></summary>
      

      ``2.18.0-10``,  ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-1``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsubtilisprobe

   and update with::

      conda update bioconductor-bsubtilisprobe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsubtilisprobe:<tag>

   (see `bioconductor-bsubtilisprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsubtilisprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsubtilisprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsubtilisprobe
   :alt:   (downloads)
.. |docker_bioconductor-bsubtilisprobe| image:: https://quay.io/repository/biocontainers/bioconductor-bsubtilisprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsubtilisprobe
.. _`bioconductor-bsubtilisprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-bsubtilisprobe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsubtilisprobe";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsubtilisprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsubtilisprobe/README.html