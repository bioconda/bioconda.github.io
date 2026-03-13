:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytofqc'
.. highlight: bash

bioconductor-cytofqc
====================

.. conda:recipe:: bioconductor-cytofqc
   :replaces_section_title:
   :noindex:

   Labels normalized cells for CyTOF data and assigns probabilities for each label

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cytofQC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cytofqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytofqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytofqc/meta.yaml>`_

   cytofQC is a package for initial cleaning of CyTOF data. It uses a semi\-supervised approach for labeling cells with their most likely data type \(bead\, doublet\, debris\, dead\) and the probability that they belong to each label type. This package does not remove data from the dataset\, but provides labels and information to aid the data user in cleaning their data. Our algorithm is able to distinguish between doublets and large cells.


.. conda:package:: bioconductor-cytofqc

   |downloads_bioconductor-cytofqc| |docker_bioconductor-cytofqc|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-catalyst: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-e1071: 
   :depends on r-eztune: 
   :depends on r-gbm: 
   :depends on r-ggplot2: 
   :depends on r-hrbrthemes: 
   :depends on r-matrixstats: 
   :depends on r-randomforest: 
   :depends on r-rmarkdown: 
   :depends on r-ssc: 

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

    pixi global install bioconductor-cytofqc

to add into an existing workspace instead, run::

    pixi add bioconductor-cytofqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cytofqc

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cytofqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cytofqc:<tag>

(see `bioconductor-cytofqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cytofqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytofqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytofqc
   :alt:   (downloads)
.. |docker_bioconductor-cytofqc| image:: https://quay.io/repository/biocontainers/bioconductor-cytofqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytofqc
.. _`bioconductor-cytofqc/tags`: https://quay.io/repository/biocontainers/bioconductor-cytofqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cytofqc";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytofqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytofqc/README.html