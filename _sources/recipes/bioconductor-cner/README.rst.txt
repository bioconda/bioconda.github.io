:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cner'
.. highlight: bash

bioconductor-cner
=================

.. conda:recipe:: bioconductor-cner
   :replaces_section_title:
   :noindex:

   CNE Detection and Visualization

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/CNEr.html
   :license: GPL-2 | file LICENSE
   :recipe: /`bioconductor-cner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cner/meta.yaml>`_
   :links: biotools: :biotools:`cner`, doi: :doi:`10.1038/nmeth.3252`

   Large\-scale identification and advanced visualization of sets of conserved noncoding elements.


.. conda:package:: bioconductor-cner

   |downloads_bioconductor-cner| |docker_bioconductor-cner|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.18.1-0</code>,  <code>1.16.1-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.1-0``,  ``1.16.1-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.70.0,<1.71.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicalignments: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-go.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-keggrest: ``>=1.32.0,<1.33.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-xvector: ``>=0.32.0,<0.33.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dbi: ``>=0.7``
   :depends r-ggplot2: ``>=2.1.0``
   :depends r-powerlaw: ``>=0.60.3``
   :depends r-r.utils: ``>=2.3.0``
   :depends r-readr: ``>=0.2.2``
   :depends r-reshape2: ``>=1.4.1``
   :depends r-rsqlite: ``>=0.11.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cner

   and update with::

      conda update bioconductor-cner

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cner:<tag>

   (see `bioconductor-cner/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cner| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cner.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cner
   :alt:   (downloads)
.. |docker_bioconductor-cner| image:: https://quay.io/repository/biocontainers/bioconductor-cner/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cner
.. _`bioconductor-cner/tags`: https://quay.io/repository/biocontainers/bioconductor-cner?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cner/README.html