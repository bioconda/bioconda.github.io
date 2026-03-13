:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plotgardenerdata'
.. highlight: bash

bioconductor-plotgardenerdata
=============================

.. conda:recipe:: bioconductor-plotgardenerdata
   :replaces_section_title:
   :noindex:

   Datasets and test data files for the plotgardener package

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/plotgardenerData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-plotgardenerdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plotgardenerdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plotgardenerdata/meta.yaml>`_

   This is a supplemental data package for the plotgardener package. Includes example datasets used in plotgardener vignettes and example raw data files. For details on how to use these datasets\, see the plotgardener package vignettes.


.. conda:package:: bioconductor-plotgardenerdata

   |downloads_bioconductor-plotgardenerdata| |docker_bioconductor-plotgardenerdata|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.3.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-plotgardenerdata

to add into an existing workspace instead, run::

    pixi add bioconductor-plotgardenerdata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-plotgardenerdata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-plotgardenerdata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-plotgardenerdata:<tag>

(see `bioconductor-plotgardenerdata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-plotgardenerdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plotgardenerdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-plotgardenerdata
   :alt:   (downloads)
.. |docker_bioconductor-plotgardenerdata| image:: https://quay.io/repository/biocontainers/bioconductor-plotgardenerdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plotgardenerdata
.. _`bioconductor-plotgardenerdata/tags`: https://quay.io/repository/biocontainers/bioconductor-plotgardenerdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-plotgardenerdata";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plotgardenerdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plotgardenerdata/README.html