:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtrmui'
.. highlight: bash

bioconductor-rtrmui
===================

.. conda:recipe:: bioconductor-rtrmui
   :replaces_section_title:
   :noindex:

   A shiny user interface for rTRM

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/rTRMui.html
   :license: GPL-3
   :recipe: /`bioconductor-rtrmui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtrmui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtrmui/meta.yaml>`_
   :links: biotools: :biotools:`rtrmui`, doi: :doi:`10.1038/nmeth.3252`

   This package provides a web interface to compute transcriptional regulatory modules with rTRM.


.. conda:package:: bioconductor-rtrmui

   |downloads_bioconductor-rtrmui| |docker_bioconductor-rtrmui|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-motifdb: ``>=1.32.0,<1.33.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.12.0,<3.13.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.12.0,<3.13.0``
   :depends bioconductor-rtrm: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-shiny: ``>=0.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtrmui

   and update with::

      conda update bioconductor-rtrmui

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtrmui:<tag>

   (see `bioconductor-rtrmui/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtrmui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtrmui.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtrmui
   :alt:   (downloads)
.. |docker_bioconductor-rtrmui| image:: https://quay.io/repository/biocontainers/bioconductor-rtrmui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtrmui
.. _`bioconductor-rtrmui/tags`: https://quay.io/repository/biocontainers/bioconductor-rtrmui?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtrmui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtrmui/README.html