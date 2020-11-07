:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affy'
.. highlight: bash

bioconductor-affy
=================

.. conda:recipe:: bioconductor-affy
   :replaces_section_title:
   :noindex:

   Methods for Affymetrix Oligonucleotide Arrays

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/affy.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-affy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affy/meta.yaml>`_
   :links: biotools: :biotools:`affy`

   The package contains functions for exploratory oligonucleotide array analysis. The dependence on tkWidgets only concerns few convenience functions. \'affy\' is fully functional without it.


.. conda:package:: bioconductor-affy

   |downloads_bioconductor-affy| |docker_bioconductor-affy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.50.0-0</code>,  </span></summary>
      

      ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.50.0-0``,  ``1.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affyio: ``>=1.60.0,<1.61.0``
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-preprocesscore: ``>=1.52.0,<1.53.0``
   :depends bioconductor-zlibbioc: ``>=1.36.0,<1.37.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-biocmanager: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affy

   and update with::

      conda update bioconductor-affy

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affy:<tag>

   (see `bioconductor-affy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affy
   :alt:   (downloads)
.. |docker_bioconductor-affy| image:: https://quay.io/repository/biocontainers/bioconductor-affy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affy
.. _`bioconductor-affy/tags`: https://quay.io/repository/biocontainers/bioconductor-affy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affy/README.html