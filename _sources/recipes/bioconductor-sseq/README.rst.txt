:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sseq'
.. highlight: bash

bioconductor-sseq
=================

.. conda:recipe:: bioconductor-sseq
   :replaces_section_title:
   :noindex:

   Shrinkage estimation of dispersion in Negative Binomial models for RNA\-seq experiments with small sample size

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/sSeq.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-sseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sseq/meta.yaml>`_
   :links: biotools: :biotools:`sseq`, doi: :doi:`10.1093/bioinformatics/btt143`

   The purpose of this package is to discover the genes that are differentially expressed between two conditions in RNA\-seq experiments. Gene expression is measured in counts of transcripts and modeled with the Negative Binomial \(NB\) distribution using a shrinkage approach for dispersion estimation. The method of moment \(MM\) estimates for dispersion are shrunk towards an estimated target\, which minimizes the average squared difference between the shrinkage estimates and the initial estimates. The exact per\-gene probability under the NB model is calculated\, and used to test the hypothesis that the expected expression of a gene in two conditions identically follow a NB distribution.


.. conda:package:: bioconductor-sseq

   |downloads_bioconductor-sseq| |docker_bioconductor-sseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.1-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.1-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-catools: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sseq

   and update with::

      conda update bioconductor-sseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sseq:<tag>

   (see `bioconductor-sseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sseq
   :alt:   (downloads)
.. |docker_bioconductor-sseq| image:: https://quay.io/repository/biocontainers/bioconductor-sseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sseq
.. _`bioconductor-sseq/tags`: https://quay.io/repository/biocontainers/bioconductor-sseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sseq";
        var versions = ["1.32.0","1.30.0","1.28.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sseq/README.html