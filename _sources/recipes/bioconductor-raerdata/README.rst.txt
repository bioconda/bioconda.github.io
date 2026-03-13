:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-raerdata'
.. highlight: bash

bioconductor-raerdata
=====================

.. conda:recipe:: bioconductor-raerdata
   :replaces_section_title:
   :noindex:

   A collection of datasets for use with raer package

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/raerdata.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-raerdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-raerdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-raerdata/meta.yaml>`_

   raerdata is an ExperimentHub package that provides a collection of files useful for demostrating functionality in the raer package. Datasets include 10x genomics scRNA\-seq\, bulk RNA\-seq\, and paired whole\-genome and RNA\-seq data. Additionally databases of human and mouse RNA editing sites are provided.


.. conda:package:: bioconductor-raerdata

   |downloads_bioconductor-raerdata| |docker_bioconductor-raerdata|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
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

    pixi global install bioconductor-raerdata

to add into an existing workspace instead, run::

    pixi add bioconductor-raerdata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-raerdata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-raerdata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-raerdata:<tag>

(see `bioconductor-raerdata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-raerdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-raerdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-raerdata
   :alt:   (downloads)
.. |docker_bioconductor-raerdata| image:: https://quay.io/repository/biocontainers/bioconductor-raerdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-raerdata
.. _`bioconductor-raerdata/tags`: https://quay.io/repository/biocontainers/bioconductor-raerdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-raerdata";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-raerdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-raerdata/README.html