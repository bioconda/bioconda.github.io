:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-frmatools'
.. highlight: bash

bioconductor-frmatools
======================

.. conda:recipe:: bioconductor-frmatools
   :replaces_section_title:
   :noindex:

   Frozen RMA Tools

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/frmaTools.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-frmatools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-frmatools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-frmatools/meta.yaml>`_
   :links: biotools: :biotools:`frmatools`

   Tools for advanced use of the frma package.


.. conda:package:: bioconductor-frmatools

   |downloads_bioconductor-frmatools| |docker_bioconductor-frmatools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.78.0,<1.79.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-preprocesscore: ``>=1.62.0,<1.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-frmatools

   and update with::

      conda update bioconductor-frmatools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-frmatools:<tag>

   (see `bioconductor-frmatools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-frmatools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-frmatools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-frmatools
   :alt:   (downloads)
.. |docker_bioconductor-frmatools| image:: https://quay.io/repository/biocontainers/bioconductor-frmatools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-frmatools
.. _`bioconductor-frmatools/tags`: https://quay.io/repository/biocontainers/bioconductor-frmatools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-frmatools";
        var versions = ["1.52.0","1.50.0","1.46.0","1.44.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-frmatools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-frmatools/README.html