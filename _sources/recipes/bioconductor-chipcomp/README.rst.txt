:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chipcomp'
.. highlight: bash

bioconductor-chipcomp
=====================

.. conda:recipe:: bioconductor-chipcomp
   :replaces_section_title:
   :noindex:

   Quantitative comparison of multiple ChIP\-seq datasets

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/ChIPComp.html
   :license: GPL
   :recipe: /`bioconductor-chipcomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipcomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipcomp/meta.yaml>`_
   :links: biotools: :biotools:`chipcomp`

   ChIPComp detects differentially bound sharp binding sites across multiple conditions considering matching control.


.. conda:package:: bioconductor-chipcomp

   |downloads_bioconductor-chipcomp| |docker_bioconductor-chipcomp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-2</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-bsgenome.mmusculus.ucsc.mm9: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chipcomp

   and update with::

      conda update bioconductor-chipcomp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chipcomp:<tag>

   (see `bioconductor-chipcomp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chipcomp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipcomp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chipcomp
   :alt:   (downloads)
.. |docker_bioconductor-chipcomp| image:: https://quay.io/repository/biocontainers/bioconductor-chipcomp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipcomp
.. _`bioconductor-chipcomp/tags`: https://quay.io/repository/biocontainers/bioconductor-chipcomp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipcomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipcomp/README.html