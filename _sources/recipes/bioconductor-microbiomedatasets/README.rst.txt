:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microbiomedatasets'
.. highlight: bash

bioconductor-microbiomedatasets
===============================

.. conda:recipe:: bioconductor-microbiomedatasets
   :replaces_section_title:
   :noindex:

   Experiment Hub based microbiome datasets

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/microbiomeDataSets.html
   :license: CC0
   :recipe: /`bioconductor-microbiomedatasets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomedatasets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomedatasets/meta.yaml>`_

   microbiomeDataSets is a collection of microbiome datasets loaded from Bioconductor\'S ExperimentHub infrastructure. The datasets serve as reference for workflows and vignettes published adjacent to the microbiome analysis tools on Bioconductor. Additional datasets can be added overtime and additions from authors are welcome.


.. conda:package:: bioconductor-microbiomedatasets

   |downloads_bioconductor-microbiomedatasets| |docker_bioconductor-microbiomedatasets|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-treesummarizedexperiment: ``>=2.18.0,<2.19.0``
   :depends on curl: 
   :depends on r-ape: 
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

    pixi global install bioconductor-microbiomedatasets

to add into an existing workspace instead, run::

    pixi add bioconductor-microbiomedatasets

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-microbiomedatasets

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-microbiomedatasets

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-microbiomedatasets:<tag>

(see `bioconductor-microbiomedatasets/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-microbiomedatasets| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microbiomedatasets.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microbiomedatasets
   :alt:   (downloads)
.. |docker_bioconductor-microbiomedatasets| image:: https://quay.io/repository/biocontainers/bioconductor-microbiomedatasets/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microbiomedatasets
.. _`bioconductor-microbiomedatasets/tags`: https://quay.io/repository/biocontainers/bioconductor-microbiomedatasets?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-microbiomedatasets";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microbiomedatasets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microbiomedatasets/README.html