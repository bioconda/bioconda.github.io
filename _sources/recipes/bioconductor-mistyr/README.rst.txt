:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mistyr'
.. highlight: bash

bioconductor-mistyr
===================

.. conda:recipe:: bioconductor-mistyr
   :replaces_section_title:
   :noindex:

   Multiview Intercellular SpaTial modeling framework

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/mistyR.html
   :license: GPL-3
   :recipe: /`bioconductor-mistyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mistyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mistyr/meta.yaml>`_

   mistyR is an implementation of the Multiview Intercellular SpaTialmodeling framework \(MISTy\). MISTy is an explainable machine learning framework for knowledge extraction and analysis of single\-cell\, highly multiplexed\, spatially resolved data. MISTy facilitates an in\-depth understanding of marker interactions by profiling the intra\- and intercellular relationships. MISTy is a flexible framework able to process a custom number of views. Each of these views can describe a different spatial context\, i.e.\, define a relationship among the observed expressions of the markers\, such as intracellular regulation or paracrine regulation\, but also\, the views can also capture cell\-type specific relationships\, capture relations between functional footprints or focus on relations between different anatomical regions. Each MISTy view is considered as a potential source of variability in the measured marker expressions. Each MISTy view is then analyzed for its contribution to the total expression of each marker and is explained in terms of the interactions with other measurements that led to the observed contribution.


.. conda:package:: bioconductor-mistyr

   |downloads_bioconductor-mistyr| |docker_bioconductor-mistyr|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.2.1-0``,  ``1.0.2-0``

      

   
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-caret: 
   :depends on r-deldir: 
   :depends on r-digest: 
   :depends on r-distances: 
   :depends on r-dplyr: ``>=1.1.0``
   :depends on r-filelock: 
   :depends on r-furrr: ``>=0.2.0``
   :depends on r-ggplot2: 
   :depends on r-purrr: 
   :depends on r-r.utils: 
   :depends on r-ranger: 
   :depends on r-readr: ``>=2.0.0``
   :depends on r-ridge: 
   :depends on r-rlang: 
   :depends on r-rlist: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-tidyselect: ``>=1.2.0``
   :depends on r-withr: 

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

    pixi global install bioconductor-mistyr

to add into an existing workspace instead, run::

    pixi add bioconductor-mistyr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mistyr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mistyr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mistyr:<tag>

(see `bioconductor-mistyr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mistyr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mistyr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mistyr
   :alt:   (downloads)
.. |docker_bioconductor-mistyr| image:: https://quay.io/repository/biocontainers/bioconductor-mistyr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mistyr
.. _`bioconductor-mistyr/tags`: https://quay.io/repository/biocontainers/bioconductor-mistyr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mistyr";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.1","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mistyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mistyr/README.html