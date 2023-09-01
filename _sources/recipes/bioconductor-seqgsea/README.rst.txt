:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqgsea'
.. highlight: bash

bioconductor-seqgsea
====================

.. conda:recipe:: bioconductor-seqgsea
   :replaces_section_title:
   :noindex:

   Gene Set Enrichment Analysis \(GSEA\) of RNA\-Seq Data\: integrating differential expression and splicing

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SeqGSEA.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-seqgsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqgsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqgsea/meta.yaml>`_

   The package generally provides methods for gene set enrichment analysis of high\-throughput RNA\-Seq data by integrating differential expression and splicing. It uses negative binomial distribution to model read count data\, which accounts for sequencing biases and biological variation. Based on permutation tests\, statistical significance can also be achieved regarding each gene\'s differential expression and splicing\, respectively.


.. conda:package:: bioconductor-seqgsea

   |downloads_bioconductor-seqgsea| |docker_bioconductor-seqgsea|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-seqgsea

   and update with::

      mamba update bioconductor-seqgsea

  To create a new environment, run::

      mamba create --name myenvname bioconductor-seqgsea

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqgsea:<tag>

   (see `bioconductor-seqgsea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqgsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqgsea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqgsea
   :alt:   (downloads)
.. |docker_bioconductor-seqgsea| image:: https://quay.io/repository/biocontainers/bioconductor-seqgsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqgsea
.. _`bioconductor-seqgsea/tags`: https://quay.io/repository/biocontainers/bioconductor-seqgsea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqgsea";
        var versions = ["1.40.0","1.38.0","1.34.0","1.32.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqgsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqgsea/README.html