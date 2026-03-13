:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-condiments'
.. highlight: bash

bioconductor-condiments
=======================

.. conda:recipe:: bioconductor-condiments
   :replaces_section_title:
   :noindex:

   Differential Topology\, Progression and Differentiation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/condiments.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-condiments <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-condiments>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-condiments/meta.yaml>`_

   This package encapsulate many functions to conduct a differential topology analysis. It focuses on analyzing an \'omic dataset with multiple conditions. While the package is mostly geared toward scRNASeq\, it does not place any restriction on the actual input format.


.. conda:package:: bioconductor-condiments

   |downloads_bioconductor-condiments| |docker_bioconductor-condiments|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-distinct: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-slingshot: ``>=2.18.0,<2.19.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-trajectoryutils: ``>=1.18.0,<1.19.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: ``>=1.0``
   :depends on r-ecume: ``>=0.9.1``
   :depends on r-igraph: 
   :depends on r-magrittr: 
   :depends on r-matrixstats: 
   :depends on r-mgcv: 
   :depends on r-pbapply: 
   :depends on r-rann: 

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

    pixi global install bioconductor-condiments

to add into an existing workspace instead, run::

    pixi add bioconductor-condiments

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-condiments

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-condiments

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-condiments:<tag>

(see `bioconductor-condiments/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-condiments| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-condiments.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-condiments
   :alt:   (downloads)
.. |docker_bioconductor-condiments| image:: https://quay.io/repository/biocontainers/bioconductor-condiments/status
   :target: https://quay.io/repository/biocontainers/bioconductor-condiments
.. _`bioconductor-condiments/tags`: https://quay.io/repository/biocontainers/bioconductor-condiments?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-condiments";
        var versions = ["1.18.0","1.14.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-condiments/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-condiments/README.html