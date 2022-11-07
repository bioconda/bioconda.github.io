:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-riboseqr'
.. highlight: bash

bioconductor-riboseqr
=====================

.. conda:recipe:: bioconductor-riboseqr
   :replaces_section_title:
   :noindex:

   Analysis of sequencing data from ribosome profiling experiments

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/riboSeqR.html
   :license: GPL-3
   :recipe: /`bioconductor-riboseqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-riboseqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-riboseqr/meta.yaml>`_
   :links: biotools: :biotools:`riboseqr`, doi: :doi:`10.1080/15476286.2016.1141862`

   Plotting functions\, frameshift detection and parsing of sequencing data from ribosome profiling experiments.


.. conda:package:: bioconductor-riboseqr

   |downloads_bioconductor-riboseqr| |docker_bioconductor-riboseqr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bayseq: ``>=2.31.0,<2.32.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends bioconductor-seqlogo: ``>=1.64.0,<1.65.0``
   :depends r-abind: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-riboseqr

   and update with::

      conda update bioconductor-riboseqr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-riboseqr:<tag>

   (see `bioconductor-riboseqr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-riboseqr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-riboseqr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-riboseqr
   :alt:   (downloads)
.. |docker_bioconductor-riboseqr| image:: https://quay.io/repository/biocontainers/bioconductor-riboseqr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-riboseqr
.. _`bioconductor-riboseqr/tags`: https://quay.io/repository/biocontainers/bioconductor-riboseqr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-riboseqr";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-riboseqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-riboseqr/README.html