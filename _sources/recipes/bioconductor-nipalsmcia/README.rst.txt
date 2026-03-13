:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nipalsmcia'
.. highlight: bash

bioconductor-nipalsmcia
=======================

.. conda:recipe:: bioconductor-nipalsmcia
   :replaces_section_title:
   :noindex:

   Multiple Co\-Inertia Analysis via the NIPALS Method

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/nipalsMCIA.html
   :license: GPL-3
   :recipe: /`bioconductor-nipalsmcia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nipalsmcia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nipalsmcia/meta.yaml>`_

   Computes Multiple Co\-Inertia Analysis \(MCIA\)\, a dimensionality reduction \(jDR\) algorithm\, for a multi\-block dataset using a modification to the Nonlinear Iterative Partial Least Squares method \(NIPALS\) proposed in \(Hanafi et. al\, 2010\). Allows multiple options for row\- and table\-level preprocessing\, and speeds up computation of variance explained. Vignettes detail application to bulk\- and single cell\- multi\-omics studies.


.. conda:package:: bioconductor-nipalsmcia

   |downloads_bioconductor-nipalsmcia| |docker_bioconductor-nipalsmcia|

   :versions:
      
      

      ``1.8.1-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-fgsea: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: ``>=3.0.0``
   :depends on r-pracma: 
   :depends on r-rlang: 
   :depends on r-rspectra: 
   :depends on r-scales: 

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

    pixi global install bioconductor-nipalsmcia

to add into an existing workspace instead, run::

    pixi add bioconductor-nipalsmcia

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-nipalsmcia

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-nipalsmcia

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-nipalsmcia:<tag>

(see `bioconductor-nipalsmcia/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-nipalsmcia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nipalsmcia.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nipalsmcia
   :alt:   (downloads)
.. |docker_bioconductor-nipalsmcia| image:: https://quay.io/repository/biocontainers/bioconductor-nipalsmcia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nipalsmcia
.. _`bioconductor-nipalsmcia/tags`: https://quay.io/repository/biocontainers/bioconductor-nipalsmcia?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nipalsmcia";
        var versions = ["1.8.1","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nipalsmcia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nipalsmcia/README.html