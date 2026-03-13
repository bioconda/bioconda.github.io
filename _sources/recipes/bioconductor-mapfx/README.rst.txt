:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mapfx'
.. highlight: bash

bioconductor-mapfx
==================

.. conda:recipe:: bioconductor-mapfx
   :replaces_section_title:
   :noindex:

   MAssively Parallel Flow cytometry Xplorer \(MAPFX\)\: A Toolbox for Analysing Data from the Massively\-Parallel Cytometry Experiments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MAPFX.html
   :license: GPL-2
   :recipe: /`bioconductor-mapfx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mapfx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mapfx/meta.yaml>`_

   MAPFX is an end\-to\-end toolbox that pre\-processes the raw data from MPC experiments \(e.g.\, BioLegend\'s LEGENDScreen and BD Lyoplates assays\)\, and further imputes the ‘missing’ infinity markers in the wells without those measurements. The pipeline starts by performing background correction on raw intensities to remove the noise from electronic baseline restoration and fluorescence compensation by adapting a normal\-exponential convolution model. Unwanted technical variation\, from sources such as well effects\, is then removed using a log\-normal model with plate\, column\, and row factors\, after which infinity markers are imputed using the informative backbone markers as predictors. The completed dataset can then be used for clustering and other statistical analyses. Additionally\, MAPFX can be used to normalise data from FFC assays as well.


.. conda:package:: bioconductor-mapfx

   |downloads_bioconductor-mapfx| |docker_bioconductor-mapfx|

   :versions:
      
      

      

      

   

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

    pixi global install bioconductor-mapfx

to add into an existing workspace instead, run::

    pixi add bioconductor-mapfx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mapfx

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mapfx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mapfx:<tag>

(see `bioconductor-mapfx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mapfx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mapfx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mapfx
   :alt:   (downloads)
.. |docker_bioconductor-mapfx| image:: https://quay.io/repository/biocontainers/bioconductor-mapfx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mapfx
.. _`bioconductor-mapfx/tags`: https://quay.io/repository/biocontainers/bioconductor-mapfx?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mapfx";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mapfx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mapfx/README.html