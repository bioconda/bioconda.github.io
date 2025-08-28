:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-selectksigs'
.. highlight: bash

bioconductor-selectksigs
========================

.. conda:recipe:: bioconductor-selectksigs
   :replaces_section_title:
   :noindex:

   Selecting the number of mutational signatures using a perplexity\-based measure and cross\-validation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/selectKSigs.html
   :license: GPL-3
   :recipe: /`bioconductor-selectksigs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-selectksigs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-selectksigs/meta.yaml>`_

   A package to suggest the number of mutational signatures in a collection of somatic mutations using calculating the cross\-validated perplexity score.


.. conda:package:: bioconductor-selectksigs

   |downloads_bioconductor-selectksigs| |docker_bioconductor-selectksigs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.6.0-2</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-hilda: ``>=1.20.0,<1.21.0``
   :depends bioconductor-hilda: ``>=1.20.0,<1.21.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-gtools: 
   :depends r-magrittr: 
   :depends r-rcpp: 
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

      mamba install bioconductor-selectksigs

   and update with::

      mamba update bioconductor-selectksigs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-selectksigs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-selectksigs:<tag>

   (see `bioconductor-selectksigs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-selectksigs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-selectksigs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-selectksigs
   :alt:   (downloads)
.. |docker_bioconductor-selectksigs| image:: https://quay.io/repository/biocontainers/bioconductor-selectksigs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-selectksigs
.. _`bioconductor-selectksigs/tags`: https://quay.io/repository/biocontainers/bioconductor-selectksigs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-selectksigs";
        var versions = ["1.18.0","1.14.0","1.12.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-selectksigs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-selectksigs/README.html