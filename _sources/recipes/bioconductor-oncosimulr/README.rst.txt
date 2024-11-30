:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oncosimulr'
.. highlight: bash

bioconductor-oncosimulr
=======================

.. conda:recipe:: bioconductor-oncosimulr
   :replaces_section_title:
   :noindex:

   Forward Genetic Simulation of Cancer Progression with Epistasis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/OncoSimulR.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-oncosimulr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oncosimulr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oncosimulr/meta.yaml>`_
   :links: biotools: :biotools:`oncosimulr`

   Functions for forward population genetic simulation in asexual populations\, with special focus on cancer progression. Fitness can be an arbitrary function of genetic interactions between multiple genes or modules of genes\, including epistasis\, order restrictions in mutation accumulation\, and order effects. Fitness \(including just birth\, just death\, or both birth and death\) can also be a function of the relative and absolute frequencies of other genotypes \(i.e.\, frequency\-dependent fitness\). Mutation rates can differ between genes\, and we can include mutator\/antimutator genes \(to model mutator phenotypes\). Simulating multi\-species scenarios and therapeutic interventions\, including adaptive therapy\, is also possible. Simulations use continuous\-time models and can include driver and passenger genes and modules. Also included are functions for\: simulating random DAGs of the type found in Oncogenetic Trees\, Conjunctive Bayesian Networks\, and other cancer progression models\; plotting and sampling from single or multiple realizations of the simulations\, including single\-cell sampling\; plotting the parent\-child relationships of the clones\; generating random fitness landscapes \(Rough Mount Fuji\, House of Cards\, additive\, NK\, Ising\, and Eggbox models\) and plotting them.


.. conda:package:: bioconductor-oncosimulr

   |downloads_bioconductor-oncosimulr| |docker_bioconductor-oncosimulr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.4.0-0</code>,  <code>4.2.0-0</code>,  <code>4.0.0-0</code>,  <code>3.2.0-2</code>,  <code>3.2.0-1</code>,  <code>3.2.0-0</code>,  <code>3.0.0-0</code>,  <code>2.20.0-1</code>,  <code>2.20.0-0</code>,  </span></summary>
      

      ``4.4.0-0``,  ``4.2.0-0``,  ``4.0.0-0``,  ``3.2.0-2``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.0.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0a0``
   :depends bioconductor-rgraphviz: ``>=2.46.0,<2.47.0``
   :depends bioconductor-rgraphviz: ``>=2.46.0,<2.47.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-car: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gtools: 
   :depends r-igraph: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: ``>=0.12.4``
   :depends r-smatr: 
   :depends r-stringr: 
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

      mamba install bioconductor-oncosimulr

   and update with::

      mamba update bioconductor-oncosimulr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-oncosimulr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-oncosimulr:<tag>

   (see `bioconductor-oncosimulr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-oncosimulr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oncosimulr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oncosimulr
   :alt:   (downloads)
.. |docker_bioconductor-oncosimulr| image:: https://quay.io/repository/biocontainers/bioconductor-oncosimulr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oncosimulr
.. _`bioconductor-oncosimulr/tags`: https://quay.io/repository/biocontainers/bioconductor-oncosimulr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-oncosimulr";
        var versions = ["4.4.0","4.2.0","4.0.0","3.2.0","3.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oncosimulr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oncosimulr/README.html