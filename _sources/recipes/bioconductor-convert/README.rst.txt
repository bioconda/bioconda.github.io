:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-convert'
.. highlight: bash

bioconductor-convert
====================

.. conda:recipe:: bioconductor-convert
   :replaces_section_title:
   :noindex:

   Convert Microarray Data Objects

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/convert.html
   :license: LGPL
   :recipe: /`bioconductor-convert <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-convert>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-convert/meta.yaml>`_
   :links: biotools: :biotools:`convert`, doi: :doi:`10.1038/nmeth.3252`

   Define coerce methods for microarray data objects.


.. conda:package:: bioconductor-convert

   |downloads_bioconductor-convert| |docker_bioconductor-convert|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.74.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-1</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-1</code>,  <code>1.58.0-0</code>,  </span></summary>
      

      ``1.74.0-0``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends bioconductor-marray: ``>=1.76.0,<1.77.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-convert

   and update with::

      conda update bioconductor-convert

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-convert:<tag>

   (see `bioconductor-convert/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-convert| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-convert.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-convert
   :alt:   (downloads)
.. |docker_bioconductor-convert| image:: https://quay.io/repository/biocontainers/bioconductor-convert/status
   :target: https://quay.io/repository/biocontainers/bioconductor-convert
.. _`bioconductor-convert/tags`: https://quay.io/repository/biocontainers/bioconductor-convert?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-convert";
        var versions = ["1.74.0","1.70.0","1.68.0","1.66.0","1.66.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-convert/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-convert/README.html