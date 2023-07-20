:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqarray'
.. highlight: bash

bioconductor-seqarray
=====================

.. conda:recipe:: bioconductor-seqarray
   :replaces_section_title:
   :noindex:

   Data Management of Large\-Scale Whole\-Genome Sequence Variant Calls

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SeqArray.html
   :license: GPL-3
   :recipe: /`bioconductor-seqarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqarray/meta.yaml>`_

   Data management of large\-scale whole\-genome sequencing variant calls with thousands of individuals\: genotypic data \(e.g.\, SNVs\, indels and structural variation calls\) and annotations in SeqArray GDS files are stored in an array\-oriented and compressed manner\, with efficient data access using the R programming language.


.. conda:package:: bioconductor-seqarray

   |downloads_bioconductor-seqarray| |docker_bioconductor-seqarray|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.1-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.34.0-2</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.40.1-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.34.0-2``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.2-0``,  ``1.22.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-gdsfmt: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqarray

   and update with::

      conda update bioconductor-seqarray

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqarray:<tag>

   (see `bioconductor-seqarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqarray
   :alt:   (downloads)
.. |docker_bioconductor-seqarray| image:: https://quay.io/repository/biocontainers/bioconductor-seqarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqarray
.. _`bioconductor-seqarray/tags`: https://quay.io/repository/biocontainers/bioconductor-seqarray?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqarray";
        var versions = ["1.40.1","1.38.0","1.38.0","1.34.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqarray/README.html