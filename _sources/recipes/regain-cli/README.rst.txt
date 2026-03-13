:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'regain-cli'
.. highlight: bash

regain-cli
==========

.. conda:recipe:: regain-cli
   :replaces_section_title:
   :noindex:

   Bayesian\-network pipeline for ARG\/virulence co\-occurrence analysis.

   :homepage: https://github.com/ERBringHorvath/regain_CLI
   :license: MIT
   :recipe: /`regain-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/regain-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/regain-cli/meta.yaml>`_

   ReGAIN is a reproducible CLI for quantifying co\-occurrence among
   bacterial antibiotic\/heavy metal resistance and virulence genes using Bayesian network
   structure learning \(bnlearn\/gRain\) and post\-hoc metrics. It includes
   dataset curation\, visualization\, and multivariate analysis.



.. conda:package:: regain-cli

   |downloads_regain-cli| |docker_regain-cli|

   :versions:
      
      

      ``1.7.1-0``,  ``1.6.3-0``,  ``1.6.2-0``

      

   
   :depends on bioconductor-graph: 
   :depends on biopython: ``>=1.83``
   :depends on blast: 
   :depends on ncbi-amrfinderplus: 
   :depends on pandas: 
   :depends on python: ``>=3.10``
   :depends on r-ape: 
   :depends on r-base: ``>=4.4``
   :depends on r-bnlearn: 
   :depends on r-cluster: 
   :depends on r-compositions: 
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-ellipse: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-ggraph: 
   :depends on r-ggrepel: 
   :depends on r-grain: 
   :depends on r-igraph: 
   :depends on r-optparse: 
   :depends on r-pbapply: 
   :depends on r-progressr: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-scales: 
   :depends on r-tibble: 
   :depends on r-tidygraph: 
   :depends on r-tidyr: 
   :depends on r-vegan: 
   :depends on r-visnetwork: 
   :depends on tqdm: ``>=4.67``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install regain-cli

to add into an existing workspace instead, run::

    pixi add regain-cli

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install regain-cli

Alternatively, to install into a new environment, run::

    conda create -n envname regain-cli

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/regain-cli:<tag>

(see `regain-cli/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_regain-cli| image:: https://img.shields.io/conda/dn/bioconda/regain-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/regain-cli
   :alt:   (downloads)
.. |docker_regain-cli| image:: https://quay.io/repository/biocontainers/regain-cli/status
   :target: https://quay.io/repository/biocontainers/regain-cli
.. _`regain-cli/tags`: https://quay.io/repository/biocontainers/regain-cli?tab=tags


.. raw:: html

    <script>
        var package = "regain-cli";
        var versions = ["1.7.1","1.6.3","1.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/regain-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/regain-cli/README.html