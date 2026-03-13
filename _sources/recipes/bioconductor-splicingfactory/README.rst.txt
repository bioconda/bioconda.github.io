:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-splicingfactory'
.. highlight: bash

bioconductor-splicingfactory
============================

.. conda:recipe:: bioconductor-splicingfactory
   :replaces_section_title:
   :noindex:

   Splicing Diversity Analysis for Transcriptome Data

   :homepage: https://www.bioconductor.org/packages/release/bioc/html/SplicingFactory.html
   :license: GPL-3.0-only
   :recipe: /`bioconductor-splicingfactory <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicingfactory>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicingfactory/meta.yaml>`_

   The SplicingFactory R package uses transcript\-level expression values to analyze splicing diversity based on various statistical measures\, like Shannon entropy or the Gini index. These measures can quantify transcript isoform diversity within samples or between conditions. Additionally\, the package analyzes the isoform diversity data\, looking for significant changes between conditions.


.. conda:package:: bioconductor-splicingfactory

   |downloads_bioconductor-splicingfactory| |docker_bioconductor-splicingfactory|

   :versions:
      
      

      ``1.18.0-2``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
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

    pixi global install bioconductor-splicingfactory

to add into an existing workspace instead, run::

    pixi add bioconductor-splicingfactory

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-splicingfactory

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-splicingfactory

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-splicingfactory:<tag>

(see `bioconductor-splicingfactory/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-splicingfactory| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-splicingfactory.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-splicingfactory
   :alt:   (downloads)
.. |docker_bioconductor-splicingfactory| image:: https://quay.io/repository/biocontainers/bioconductor-splicingfactory/status
   :target: https://quay.io/repository/biocontainers/bioconductor-splicingfactory
.. _`bioconductor-splicingfactory/tags`: https://quay.io/repository/biocontainers/bioconductor-splicingfactory?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-splicingfactory";
        var versions = ["1.18.0","1.18.0","1.18.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-splicingfactory/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-splicingfactory/README.html