:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cernanetsim'
.. highlight: bash

bioconductor-cernanetsim
========================

.. conda:recipe:: bioconductor-cernanetsim
   :replaces_section_title:
   :noindex:

   Regulation Simulator of Interaction between miRNA and Competing RNAs \(ceRNA\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ceRNAnetsim.html
   :license: GPL (>= 3.0)
   :recipe: /`bioconductor-cernanetsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cernanetsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cernanetsim/meta.yaml>`_

   This package simulates regulations of ceRNA \(Competing Endogenous\) expression levels after a expression level change in one or more miRNA\/mRNAs. The methodolgy adopted by the package has potential to incorparate any ceRNA \(circRNA\, lincRNA\, etc.\) into miRNA\:target interaction network.  The package basically distributes miRNA expression over available ceRNAs where each ceRNA attracks miRNAs proportional to its amount. But\, the package can utilize multiple parameters that modify miRNA effect on its target \(seed type\, binding energy\, binding location\, etc.\).  The functions handle the given dataset as graph object and the processes progress via edge and node variables.


.. conda:package:: bioconductor-cernanetsim

   |downloads_bioconductor-cernanetsim| |docker_bioconductor-cernanetsim|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-furrr: 
   :depends r-future: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-igraph: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidygraph: 
   :depends r-tidyr: 
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

      mamba install bioconductor-cernanetsim

   and update with::

      mamba update bioconductor-cernanetsim

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cernanetsim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cernanetsim:<tag>

   (see `bioconductor-cernanetsim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cernanetsim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cernanetsim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cernanetsim
   :alt:   (downloads)
.. |docker_bioconductor-cernanetsim| image:: https://quay.io/repository/biocontainers/bioconductor-cernanetsim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cernanetsim
.. _`bioconductor-cernanetsim/tags`: https://quay.io/repository/biocontainers/bioconductor-cernanetsim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cernanetsim";
        var versions = ["1.18.0","1.14.0","1.12.0","1.10.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cernanetsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cernanetsim/README.html