:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dewseq'
.. highlight: bash

bioconductor-dewseq
===================

.. conda:recipe:: bioconductor-dewseq
   :replaces_section_title:
   :noindex:

   Differential Expressed Windows Based on Negative Binomial Distribution

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DEWSeq.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-dewseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dewseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dewseq/meta.yaml>`_

   DEWSeq is a sliding window approach for the analysis of differentially enriched binding regions eCLIP or iCLIP next generation sequencing data.


.. conda:package:: bioconductor-dewseq

   |downloads_bioconductor-dewseq| |docker_bioconductor-dewseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.2-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.4-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.2-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.4-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: ``>=1.11.8``
   :depends r-r.utils: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-dewseq

   and update with::

      mamba update bioconductor-dewseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dewseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dewseq:<tag>

   (see `bioconductor-dewseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dewseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dewseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dewseq
   :alt:   (downloads)
.. |docker_bioconductor-dewseq| image:: https://quay.io/repository/biocontainers/bioconductor-dewseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dewseq
.. _`bioconductor-dewseq/tags`: https://quay.io/repository/biocontainers/bioconductor-dewseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dewseq";
        var versions = ["1.20.0","1.16.2","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dewseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dewseq/README.html