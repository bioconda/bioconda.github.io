:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicranges'
.. highlight: bash

bioconductor-genomicranges
==========================

.. conda:recipe:: bioconductor-genomicranges
   :replaces_section_title:
   :noindex:

   Representation and manipulation of genomic intervals

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/GenomicRanges.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomicranges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicranges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicranges/meta.yaml>`_
   :links: biotools: :biotools:`genomicranges`

   The ability to efficiently represent and manipulate genomic annotations and alignments is playing a central role when it comes to analyzing high\-throughput sequencing data \(a.k.a. NGS data\). The GenomicRanges package defines general purpose containers for storing and manipulating genomic intervals and variables defined along a genome. More specialized containers for representing and manipulating short alignments against a reference genome\, or a matrix\-like summarization of an experiment\, are defined in the GenomicAlignments and SummarizedExperiment packages\, respectively. Both packages build on top of the GenomicRanges infrastructure.


.. conda:package:: bioconductor-genomicranges

   |downloads_bioconductor-genomicranges| |docker_bioconductor-genomicranges|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.7-0</code>,  <code>1.30.3-0</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-0``,  ``1.32.7-0``,  ``1.30.3-0``,  ``1.30.0-0``,  ``1.28.6-0``,  ``1.26.4-0``,  ``1.26.1-1``,  ``1.24.3-1``,  ``1.22.4-0``,  ``1.22.3-0``,  ``1.22.2-0``,  ``1.22.1-0``,  ``1.22.0-0``,  ``1.20.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-xvector: ``>=0.30.0,<0.31.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomicranges

   and update with::

      conda update bioconductor-genomicranges

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicranges:<tag>

   (see `bioconductor-genomicranges/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicranges| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicranges.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicranges
   :alt:   (downloads)
.. |docker_bioconductor-genomicranges| image:: https://quay.io/repository/biocontainers/bioconductor-genomicranges/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicranges
.. _`bioconductor-genomicranges/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicranges?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicranges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicranges/README.html