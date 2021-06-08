:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dyndoc'
.. highlight: bash

bioconductor-dyndoc
===================

.. conda:recipe:: bioconductor-dyndoc
   :replaces_section_title:
   :noindex:

   Dynamic document tools

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/DynDoc.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-dyndoc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dyndoc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dyndoc/meta.yaml>`_
   :links: biotools: :biotools:`dyndoc`, doi: :doi:`10.1038/nmeth.3252`

   A set of functions to create and interact with dynamic documents and vignettes.


.. conda:package:: bioconductor-dyndoc

   |downloads_bioconductor-dyndoc| |docker_bioconductor-dyndoc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.70.0-0</code>,  <code>1.68.0-1</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  </span></summary>
      

      ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dyndoc

   and update with::

      conda update bioconductor-dyndoc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dyndoc:<tag>

   (see `bioconductor-dyndoc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dyndoc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dyndoc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dyndoc
   :alt:   (downloads)
.. |docker_bioconductor-dyndoc| image:: https://quay.io/repository/biocontainers/bioconductor-dyndoc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dyndoc
.. _`bioconductor-dyndoc/tags`: https://quay.io/repository/biocontainers/bioconductor-dyndoc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dyndoc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dyndoc/README.html