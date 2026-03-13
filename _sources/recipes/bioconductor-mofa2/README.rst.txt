:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mofa2'
.. highlight: bash

bioconductor-mofa2
==================

.. conda:recipe:: bioconductor-mofa2
   :replaces_section_title:
   :noindex:

   Multi\-Omics Factor Analysis v2

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MOFA2.html
   :license: file LICENSE
   :recipe: /`bioconductor-mofa2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mofa2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mofa2/meta.yaml>`_

   The MOFA2 package contains a collection of tools for training and analysing multi\-omic factor analysis \(MOFA\). MOFA is a probabilistic factor model that aims to identify principal axes of variation from data sets that can comprise multiple omic layers and\/or groups of samples. Additional time or space information on the samples can be incorporated using the MEFISTO framework\, which is part of MOFA2. Downstream analysis functions to inspect molecular features underlying each factor\, vizualisation\, imputation etc are available.


.. conda:package:: bioconductor-mofa2

   |downloads_bioconductor-mofa2| |docker_bioconductor-mofa2|

   :versions:
      
      

      ``1.20.2-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-1``

      

   
   :depends on bioconductor-basilisk: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-basilisk: ``>=1.22.0,<1.23.0a0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0a0``
   :depends on bioconductor-hdf5array: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-hdf5array: ``>=1.38.0,<1.39.0a0``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-rhdf5: ``>=2.54.1,<2.55.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-corrplot: 
   :depends on r-cowplot: 
   :depends on r-dplyr: 
   :depends on r-forcats: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-magrittr: 
   :depends on r-pheatmap: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-reticulate: 
   :depends on r-rtsne: 
   :depends on r-stringi: 
   :depends on r-tidyr: 
   :depends on r-uwot: 

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

    pixi global install bioconductor-mofa2

to add into an existing workspace instead, run::

    pixi add bioconductor-mofa2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mofa2

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mofa2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mofa2:<tag>

(see `bioconductor-mofa2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mofa2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mofa2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mofa2
   :alt:   (downloads)
.. |docker_bioconductor-mofa2| image:: https://quay.io/repository/biocontainers/bioconductor-mofa2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mofa2
.. _`bioconductor-mofa2/tags`: https://quay.io/repository/biocontainers/bioconductor-mofa2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mofa2";
        var versions = ["1.20.2","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mofa2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mofa2/README.html