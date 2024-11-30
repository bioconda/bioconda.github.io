:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bandits'
.. highlight: bash

bioconductor-bandits
====================

.. conda:recipe:: bioconductor-bandits
   :replaces_section_title:
   :noindex:

   BANDITS\: Bayesian ANalysis of DIfferenTial Splicing

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/BANDITS.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-bandits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bandits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bandits/meta.yaml>`_

   BANDITS is a Bayesian hierarchical model for detecting differential splicing of genes and transcripts\, via differential transcript usage \(DTU\)\, between two or more conditions. The method uses a Bayesian hierarchical framework\, which allows for sample specific proportions in a Dirichlet\-Multinomial model\, and samples the allocation of fragments to the transcripts. Parameters are inferred via Markov chain Monte Carlo \(MCMC\) techniques and a DTU test is performed via a multivariate Wald test on the posterior densities for the average relative abundance of transcripts.


.. conda:package:: bioconductor-bandits

   |downloads_bioconductor-bandits| |docker_bioconductor-bandits|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.1-0</code>,  <code>1.16.1-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.18.1-0``,  ``1.16.1-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-drimseq: ``>=1.30.0,<1.31.0``
   :depends bioconductor-drimseq: ``>=1.30.0,<1.31.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-dorng: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-r.utils: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
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

      mamba install bioconductor-bandits

   and update with::

      mamba update bioconductor-bandits

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bandits

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bandits:<tag>

   (see `bioconductor-bandits/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bandits| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bandits.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bandits
   :alt:   (downloads)
.. |docker_bioconductor-bandits| image:: https://quay.io/repository/biocontainers/bioconductor-bandits/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bandits
.. _`bioconductor-bandits/tags`: https://quay.io/repository/biocontainers/bioconductor-bandits?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bandits";
        var versions = ["1.18.1","1.16.1","1.14.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bandits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bandits/README.html