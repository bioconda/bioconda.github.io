:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-yeastcc'
.. highlight: bash

bioconductor-yeastcc
====================

.. conda:recipe:: bioconductor-yeastcc
   :replaces_section_title:
   :noindex:

   Spellman et al. \(1998\) and Pramila\/Breeden \(2006\) yeast cell cycle microarray data

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/yeastCC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-yeastcc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeastcc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeastcc/meta.yaml>`_

   ExpressionSet for Spellman et al. \(1998\) yeast cell cycle microarray experiment


.. conda:package:: bioconductor-yeastcc

   |downloads_bioconductor-yeastcc| |docker_bioconductor-yeastcc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.29.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.29.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-yeastcc

   and update with::

      conda update bioconductor-yeastcc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-yeastcc:<tag>

   (see `bioconductor-yeastcc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-yeastcc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-yeastcc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-yeastcc
   :alt:   (downloads)
.. |docker_bioconductor-yeastcc| image:: https://quay.io/repository/biocontainers/bioconductor-yeastcc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-yeastcc
.. _`bioconductor-yeastcc/tags`: https://quay.io/repository/biocontainers/bioconductor-yeastcc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-yeastcc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-yeastcc/README.html