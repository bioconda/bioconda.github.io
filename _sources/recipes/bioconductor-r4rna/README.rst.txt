:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-r4rna'
.. highlight: bash

bioconductor-r4rna
==================

.. conda:recipe:: bioconductor-r4rna
   :replaces_section_title:
   :noindex:

   An R package for RNA visualization and analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/R4RNA.html
   :license: GPL-3
   :recipe: /`bioconductor-r4rna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-r4rna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-r4rna/meta.yaml>`_
   :links: biotools: :biotools:`r4rna`

   A package for RNA basepair analysis\, including the visualization of basepairs as arc diagrams for easy comparison and annotation of sequence and structure.  Arc diagrams can additionally be projected onto multiple sequence alignments to assess basepair conservation and covariation\, with numerical methods for computing statistics for each.


.. conda:package:: bioconductor-r4rna

   |downloads_bioconductor-r4rna| |docker_bioconductor-r4rna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-r4rna

   and update with::

      conda update bioconductor-r4rna

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-r4rna:<tag>

   (see `bioconductor-r4rna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-r4rna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-r4rna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-r4rna
   :alt:   (downloads)
.. |docker_bioconductor-r4rna| image:: https://quay.io/repository/biocontainers/bioconductor-r4rna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-r4rna
.. _`bioconductor-r4rna/tags`: https://quay.io/repository/biocontainers/bioconductor-r4rna?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-r4rna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-r4rna/README.html