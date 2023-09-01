:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rseqan'
.. highlight: bash

bioconductor-rseqan
===================

.. conda:recipe:: bioconductor-rseqan
   :replaces_section_title:
   :noindex:

   R SeqAn

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RSeqAn.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-rseqan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rseqan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rseqan/meta.yaml>`_

   Headers and some wrapper functions from the SeqAn C\+\+ library for ease of usage in R.


.. conda:package:: bioconductor-rseqan

   |downloads_bioconductor-rseqan| |docker_bioconductor-rseqan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-2</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.14.0-2</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-2``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.14.0-2``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcpp: 
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

      mamba install bioconductor-rseqan

   and update with::

      mamba update bioconductor-rseqan

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rseqan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rseqan:<tag>

   (see `bioconductor-rseqan/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rseqan| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rseqan.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rseqan
   :alt:   (downloads)
.. |docker_bioconductor-rseqan| image:: https://quay.io/repository/biocontainers/bioconductor-rseqan/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rseqan
.. _`bioconductor-rseqan/tags`: https://quay.io/repository/biocontainers/bioconductor-rseqan?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rseqan";
        var versions = ["1.20.0","1.18.0","1.18.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rseqan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rseqan/README.html