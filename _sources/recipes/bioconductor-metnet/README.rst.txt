:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metnet'
.. highlight: bash

bioconductor-metnet
===================

.. conda:recipe:: bioconductor-metnet
   :replaces_section_title:
   :noindex:

   Inferring metabolic networks from untargeted high\-resolution mass spectrometry data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MetNet.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-metnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metnet/meta.yaml>`_

   MetNet contains functionality to infer metabolic network topologies from quantitative data and high\-resolution mass\/charge information. Using statistical models \(including correlation\, mutual information\, regression and Bayes statistics\) and quantitative data \(intensity values of features\) adjacency matrices are inferred that can be combined to a consensus matrix. Mass differences calculated between mass\/charge values of features will be matched against a data frame of supplied mass\/charge differences referring to transformations of enzymatic activities. In a third step\, the two levels of information are combined to form a adjacency matrix inferred from both quantitative and structure information.


.. conda:package:: bioconductor-metnet

   |downloads_bioconductor-metnet| |docker_bioconductor-metnet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genie3: ``>=1.24.0,<1.25.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bnlearn: ``>=4.3``
   :depends r-corpcor: ``>=1.6.10``
   :depends r-dplyr: ``>=1.0.3``
   :depends r-genenet: ``>=1.2.15``
   :depends r-ggplot2: ``>=3.3.3``
   :depends r-parmigene: ``>=1.0.2``
   :depends r-psych: ``>=2.1.6``
   :depends r-rlang: ``>=0.4.10``
   :depends r-stabs: ``>=0.6``
   :depends r-tibble: ``>=3.0.5``
   :depends r-tidyr: ``>=1.1.2``
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

      mamba install bioconductor-metnet

   and update with::

      mamba update bioconductor-metnet

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metnet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metnet:<tag>

   (see `bioconductor-metnet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metnet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metnet
   :alt:   (downloads)
.. |docker_bioconductor-metnet| image:: https://quay.io/repository/biocontainers/bioconductor-metnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metnet
.. _`bioconductor-metnet/tags`: https://quay.io/repository/biocontainers/bioconductor-metnet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metnet";
        var versions = ["1.20.0","1.18.0","1.16.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metnet/README.html