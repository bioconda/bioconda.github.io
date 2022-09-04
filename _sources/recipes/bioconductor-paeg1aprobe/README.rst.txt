:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-paeg1aprobe'
.. highlight: bash

bioconductor-paeg1aprobe
========================

.. conda:recipe:: bioconductor-paeg1aprobe
   :replaces_section_title:
   :noindex:

   Probe sequence data for microarrays of type paeg1a

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/paeg1aprobe.html
   :license: LGPL
   :recipe: /`bioconductor-paeg1aprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-paeg1aprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-paeg1aprobe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was P\\\_aeg1a\\\_probe\\\_tab.


.. conda:package:: bioconductor-paeg1aprobe

   |downloads_bioconductor-paeg1aprobe| |docker_bioconductor-paeg1aprobe|

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

      conda install bioconductor-paeg1aprobe

   and update with::

      conda update bioconductor-paeg1aprobe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-paeg1aprobe:<tag>

   (see `bioconductor-paeg1aprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-paeg1aprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-paeg1aprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-paeg1aprobe
   :alt:   (downloads)
.. |docker_bioconductor-paeg1aprobe| image:: https://quay.io/repository/biocontainers/bioconductor-paeg1aprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-paeg1aprobe
.. _`bioconductor-paeg1aprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-paeg1aprobe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-paeg1aprobe";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-paeg1aprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-paeg1aprobe/README.html