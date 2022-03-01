:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flagme'
.. highlight: bash

bioconductor-flagme
===================

.. conda:recipe:: bioconductor-flagme
   :replaces_section_title:
   :noindex:

   Analysis of Metabolomics GC\/MS Data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/flagme.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-flagme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flagme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flagme/meta.yaml>`_
   :links: biotools: :biotools:`flagme`, doi: :doi:`10.1038/nmeth.3252`

   Fragment\-level analysis of gas chromatography \- mass spectrometry metabolomics data


.. conda:package:: bioconductor-flagme

   |downloads_bioconductor-flagme| |docker_bioconductor-flagme|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.40.0-1</code>,  <code>1.38.1-0</code>,  </span></summary>
      

      ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.40.0-1``,  ``1.38.1-0``,  ``1.38.0-0``,  ``1.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-camera: ``>=1.50.0,<1.51.0``
   :depends bioconductor-gcspikelite: ``>=1.32.0,<1.33.0``
   :depends bioconductor-xcms: ``>=3.16.0,<3.17.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gplots: 
   :depends r-mass: 
   :depends r-sparsem: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flagme

   and update with::

      conda update bioconductor-flagme

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flagme:<tag>

   (see `bioconductor-flagme/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flagme| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flagme.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flagme
   :alt:   (downloads)
.. |docker_bioconductor-flagme| image:: https://quay.io/repository/biocontainers/bioconductor-flagme/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flagme
.. _`bioconductor-flagme/tags`: https://quay.io/repository/biocontainers/bioconductor-flagme?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flagme";
        var versions = ["1.50.0","1.50.0","1.48.0","1.46.0","1.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flagme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flagme/README.html