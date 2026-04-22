:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scaedata'
.. highlight: bash

bioconductor-scaedata
=====================

.. conda:recipe:: bioconductor-scaedata
   :replaces_section_title:
   :noindex:

   Data Package for SingleCellAlleleExperiment

   :homepage: https://bioconductor.org/packages/3.22/data/experiment/html/scaeData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scaedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scaedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scaedata/meta.yaml>`_

   Contains default datasets used by the Bioconductor package SingleCellAlleleExperiment. The raw FASTQ files were sourced from publicly accessible datasets provided by 10x Genomics. Subsequently\, our scIGD snakemake workflow was employed to process these FASTQ files. The resulting output from scIGD constitutes to the contents of this data package.


.. conda:package:: bioconductor-scaedata

   |downloads_bioconductor-scaedata| |docker_bioconductor-scaedata|

   :versions:
      
      

      ``1.6.0-0``

      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
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

    pixi global install bioconductor-scaedata

to add into an existing workspace instead, run::

    pixi add bioconductor-scaedata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scaedata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scaedata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scaedata:<tag>

(see `bioconductor-scaedata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scaedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scaedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scaedata
   :alt:   (downloads)
.. |docker_bioconductor-scaedata| image:: https://quay.io/repository/biocontainers/bioconductor-scaedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scaedata
.. _`bioconductor-scaedata/tags`: https://quay.io/repository/biocontainers/bioconductor-scaedata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scaedata";
        var versions = ["1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scaedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scaedata/README.html