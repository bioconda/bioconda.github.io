:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scmultiome'
.. highlight: bash

bioconductor-scmultiome
=======================

.. conda:recipe:: bioconductor-scmultiome
   :replaces_section_title:
   :noindex:

   Collection of Public Single\-Cell Multiome \(scATAC \+ scRNAseq\) Datasets

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/scMultiome.html
   :license: CC BY-SA 4.0
   :recipe: /`bioconductor-scmultiome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmultiome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmultiome/meta.yaml>`_

   Single cell multiome data\, containing chromatin accessibility \(scATAC\-seq\) and gene expression \(scRNA\-seq\) information analyzed with the ArchR package and presented as MultiAssayExperiment objects.


.. conda:package:: bioconductor-scmultiome

   |downloads_bioconductor-scmultiome| |docker_bioconductor-scmultiome|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-alabaster.matrix: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-hdf5array: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on curl: 
   :depends on r-azurestor: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-checkmate: 

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

    pixi global install bioconductor-scmultiome

to add into an existing workspace instead, run::

    pixi add bioconductor-scmultiome

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scmultiome

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scmultiome

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scmultiome:<tag>

(see `bioconductor-scmultiome/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scmultiome| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scmultiome.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scmultiome
   :alt:   (downloads)
.. |docker_bioconductor-scmultiome| image:: https://quay.io/repository/biocontainers/bioconductor-scmultiome/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scmultiome
.. _`bioconductor-scmultiome/tags`: https://quay.io/repository/biocontainers/bioconductor-scmultiome?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scmultiome";
        var versions = ["1.10.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scmultiome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scmultiome/README.html