:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-preprocesscore'
.. highlight: bash

bioconductor-preprocesscore
===========================

.. conda:recipe:: bioconductor-preprocesscore
   :replaces_section_title:
   :noindex:

   A collection of pre\-processing functions

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/preprocessCore.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-preprocesscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-preprocesscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-preprocesscore/meta.yaml>`_
   :links: biotools: :biotools:`preprocesscore`, doi: :doi:`10.1038/nmeth.3252`

   A library of core preprocessing routines.


.. conda:package:: bioconductor-preprocesscore

   |downloads_bioconductor-preprocesscore| |docker_bioconductor-preprocesscore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.60.2-0</code>,  <code>1.60.0-0</code>,  <code>1.56.0-3</code>,  <code>1.56.0-2</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.1-0</code>,  <code>1.52.0-0</code>,  </span></summary>
      

      ``1.60.2-0``,  ``1.60.0-0``,  ``1.56.0-3``,  ``1.56.0-2``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.1-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.1-0``,  ``1.34.0-0``,  ``1.32.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-preprocesscore

   and update with::

      conda update bioconductor-preprocesscore

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-preprocesscore:<tag>

   (see `bioconductor-preprocesscore/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-preprocesscore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-preprocesscore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-preprocesscore
   :alt:   (downloads)
.. |docker_bioconductor-preprocesscore| image:: https://quay.io/repository/biocontainers/bioconductor-preprocesscore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-preprocesscore
.. _`bioconductor-preprocesscore/tags`: https://quay.io/repository/biocontainers/bioconductor-preprocesscore?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-preprocesscore";
        var versions = ["1.60.2","1.60.0","1.56.0","1.56.0","1.56.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-preprocesscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-preprocesscore/README.html