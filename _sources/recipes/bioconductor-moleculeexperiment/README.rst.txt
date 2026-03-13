:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-moleculeexperiment'
.. highlight: bash

bioconductor-moleculeexperiment
===============================

.. conda:recipe:: bioconductor-moleculeexperiment
   :replaces_section_title:
   :noindex:

   Prioritising a molecule\-level storage of Spatial Transcriptomics Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MoleculeExperiment.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-moleculeexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moleculeexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moleculeexperiment/meta.yaml>`_

   MoleculeExperiment contains functions to create and work with objects from the new MoleculeExperiment class. We introduce this class for analysing molecule\-based spatial transcriptomics data \(e.g.\, Xenium by 10X\, Cosmx SMI by Nanostring\, and Merscope by Vizgen\). This allows researchers to analyse spatial transcriptomics data at the molecule level\, and to have standardised data formats accross vendors.


.. conda:package:: bioconductor-moleculeexperiment

   |downloads_bioconductor-moleculeexperiment| |docker_bioconductor-moleculeexperiment|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.2-0``,  ``1.0.1-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-ebimage: ``>=4.52.0,<4.53.0``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cli: 
   :depends on r-data.table: 
   :depends on r-dplyr: ``>=1.1.1``
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-matrix: 
   :depends on r-purrr: 
   :depends on r-rjson: 
   :depends on r-rlang: 
   :depends on r-terra: 

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

    pixi global install bioconductor-moleculeexperiment

to add into an existing workspace instead, run::

    pixi add bioconductor-moleculeexperiment

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-moleculeexperiment

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-moleculeexperiment

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-moleculeexperiment:<tag>

(see `bioconductor-moleculeexperiment/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-moleculeexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-moleculeexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-moleculeexperiment
   :alt:   (downloads)
.. |docker_bioconductor-moleculeexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-moleculeexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-moleculeexperiment
.. _`bioconductor-moleculeexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-moleculeexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-moleculeexperiment";
        var versions = ["1.10.0","1.6.0","1.2.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-moleculeexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-moleculeexperiment/README.html