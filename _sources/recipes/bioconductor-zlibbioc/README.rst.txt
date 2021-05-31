:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-zlibbioc'
.. highlight: bash

bioconductor-zlibbioc
=====================

.. conda:recipe:: bioconductor-zlibbioc
   :replaces_section_title:
   :noindex:

   An R packaged zlib\-1.2.5

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/zlibbioc.html
   :license: Artistic-2.0 + file LICENSE
   :recipe: /`bioconductor-zlibbioc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zlibbioc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zlibbioc/meta.yaml>`_
   :links: biotools: :biotools:`zlibbioc`, doi: :doi:`10.1038/nmeth.3252`

   This package uses the source code of zlib\-1.2.5 to create libraries for systems that do not have these available via other means \(most Linux and Mac users should have system\-level access to zlib\, and no direct need for this package\). See the vignette for instructions on use.


.. conda:package:: bioconductor-zlibbioc

   |downloads_bioconductor-zlibbioc| |docker_bioconductor-zlibbioc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-zlibbioc

   and update with::

      conda update bioconductor-zlibbioc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-zlibbioc:<tag>

   (see `bioconductor-zlibbioc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-zlibbioc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-zlibbioc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-zlibbioc
   :alt:   (downloads)
.. |docker_bioconductor-zlibbioc| image:: https://quay.io/repository/biocontainers/bioconductor-zlibbioc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-zlibbioc
.. _`bioconductor-zlibbioc/tags`: https://quay.io/repository/biocontainers/bioconductor-zlibbioc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-zlibbioc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-zlibbioc/README.html