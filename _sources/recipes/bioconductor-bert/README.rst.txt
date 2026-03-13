:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bert'
.. highlight: bash

bioconductor-bert
=================

.. conda:recipe:: bioconductor-bert
   :replaces_section_title:
   :noindex:

   High Performance Data Integration for Large\-Scale Analyses of Incomplete Omic Profiles Using Batch\-Effect Reduction Trees \(BERT\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BERT.html
   :license: GPL-3
   :recipe: /`bioconductor-bert <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bert>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bert/meta.yaml>`_

   Provides efficient batch\-effect adjustment of data with missing values. BERT orders all batch effect correction to a tree of pairwise computations. BERT allows parallelization over sub\-trees.


.. conda:package:: bioconductor-bert

   |downloads_bioconductor-bert| |docker_bioconductor-bert|

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

    pixi global install bioconductor-bert

to add into an existing workspace instead, run::

    pixi add bioconductor-bert

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bert

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bert

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bert:<tag>

(see `bioconductor-bert/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bert| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bert.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bert
   :alt:   (downloads)
.. |docker_bioconductor-bert| image:: https://quay.io/repository/biocontainers/bioconductor-bert/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bert
.. _`bioconductor-bert/tags`: https://quay.io/repository/biocontainers/bioconductor-bert?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bert";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bert/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bert/README.html