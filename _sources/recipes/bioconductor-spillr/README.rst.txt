:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spillr'
.. highlight: bash

bioconductor-spillr
===================

.. conda:recipe:: bioconductor-spillr
   :replaces_section_title:
   :noindex:

   Spillover Compensation in Mass Cytometry Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/spillR.html
   :license: LGPL-3
   :recipe: /`bioconductor-spillr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spillr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spillr/meta.yaml>`_

   Channel interference in mass cytometry can cause spillover and may result in miscounting of protein markers. We develop a nonparametric finite mixture model and use the mixture components to estimate the probability of spillover. We implement our method using expectation\-maximization to fit the mixture model.


.. conda:package:: bioconductor-spillr

   |downloads_bioconductor-spillr| |docker_bioconductor-spillr|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-catalyst: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-spatstat.univar: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-tidyselect: 

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

    pixi global install bioconductor-spillr

to add into an existing workspace instead, run::

    pixi add bioconductor-spillr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-spillr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-spillr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-spillr:<tag>

(see `bioconductor-spillr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-spillr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spillr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spillr
   :alt:   (downloads)
.. |docker_bioconductor-spillr| image:: https://quay.io/repository/biocontainers/bioconductor-spillr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spillr
.. _`bioconductor-spillr/tags`: https://quay.io/repository/biocontainers/bioconductor-spillr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spillr";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spillr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spillr/README.html