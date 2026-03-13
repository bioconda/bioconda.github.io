:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-viber'
.. highlight: bash

r-viber
=======

.. conda:recipe:: r-viber
   :replaces_section_title:
   :noindex:

   Variational Binomial Mixtures.

   :homepage: https://github.com/caravagnalab/VIBER
   :documentation: https://caravagnalab.github.io/VIBER/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-viber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-viber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-viber/meta.yaml>`_

   VIBER is a package that implements a variational Bayesian model to
   fit multi\-variate Binomial mixtures. The statistical model is
   semi\-parametric and fit by a variational mean\-field approximation to
   the model posterior. The components are Binomial distributions which
   can model count data\; these can be used to model sequencing counts in
   the context of cancer\, for instance. The package implements methods to
   fit and visualize clustering results.



.. conda:package:: r-viber

   |downloads_r-viber| |docker_r-viber|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cli: 
   :depends on r-crayon: 
   :depends on r-ctree: 
   :depends on r-dplyr: 
   :depends on r-easypar: 
   :depends on r-ggplot2: 
   :depends on r-pio: 
   :depends on r-reshape2: 

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

    pixi global install r-viber

to add into an existing workspace instead, run::

    pixi add r-viber

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-viber

Alternatively, to install into a new environment, run::

    conda create -n envname r-viber

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-viber:<tag>

(see `r-viber/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-viber| image:: https://img.shields.io/conda/dn/bioconda/r-viber.svg?style=flat
   :target: https://anaconda.org/bioconda/r-viber
   :alt:   (downloads)
.. |docker_r-viber| image:: https://quay.io/repository/biocontainers/r-viber/status
   :target: https://quay.io/repository/biocontainers/r-viber
.. _`r-viber/tags`: https://quay.io/repository/biocontainers/r-viber?tab=tags


.. raw:: html

    <script>
        var package = "r-viber";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-viber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-viber/README.html