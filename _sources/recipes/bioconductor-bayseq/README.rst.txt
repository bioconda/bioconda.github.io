:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bayseq'
.. highlight: bash

bioconductor-bayseq
===================

.. conda:recipe:: bioconductor-bayseq
   :replaces_section_title:
   :noindex:

   Empirical Bayesian analysis of patterns of differential expression in count data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/baySeq.html
   :license: GPL-3
   :recipe: /`bioconductor-bayseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayseq/meta.yaml>`_

   This package identifies differential expression in high\-throughput \'count\' data\, such as that derived from next\-generation sequencing machines\, calculating estimated posterior likelihoods of differential expression \(or more complex hypotheses\) via empirical Bayesian methods.


.. conda:package:: bioconductor-bayseq

   |downloads_bioconductor-bayseq| |docker_bioconductor-bayseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.40.0-0</code>,  <code>2.36.0-0</code>,  <code>2.31.0-1</code>,  <code>2.31.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-1</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  </span></summary>
      

      ``2.40.0-0``,  ``2.36.0-0``,  ``2.31.0-1``,  ``2.31.0-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-1``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends r-abind: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-bayseq

   and update with::

      mamba update bioconductor-bayseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bayseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bayseq:<tag>

   (see `bioconductor-bayseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bayseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bayseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bayseq
   :alt:   (downloads)
.. |docker_bioconductor-bayseq| image:: https://quay.io/repository/biocontainers/bioconductor-bayseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bayseq
.. _`bioconductor-bayseq/tags`: https://quay.io/repository/biocontainers/bioconductor-bayseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bayseq";
        var versions = ["2.40.0","2.36.0","2.31.0","2.31.0","2.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bayseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bayseq/README.html