:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simpleseg'
.. highlight: bash

bioconductor-simpleseg
======================

.. conda:recipe:: bioconductor-simpleseg
   :replaces_section_title:
   :noindex:

   A package to perform simple cell segmentation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/simpleSeg.html
   :license: GPL-3
   :recipe: /`bioconductor-simpleseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simpleseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simpleseg/meta.yaml>`_

   Image segmentation is the process of identifying the borders of individual objects \(in this case cells\) within an image. This allows for the features of cells such as marker expression and morphology to be extracted\, stored and analysed. simpleSeg provides functionality for user friendly\, watershed based segmentation on multiplexed cellular images in R based on the intensity of user specified protein marker channels. simpleSeg can also be used for the normalization of single cell data obtained from multiple images.


.. conda:package:: bioconductor-simpleseg

   |downloads_bioconductor-simpleseg| |docker_bioconductor-simpleseg|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-cytomapper: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-ebimage: ``>=4.52.0,<4.53.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-spatstat.geom: 
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

    pixi global install bioconductor-simpleseg

to add into an existing workspace instead, run::

    pixi add bioconductor-simpleseg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-simpleseg

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-simpleseg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-simpleseg:<tag>

(see `bioconductor-simpleseg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-simpleseg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simpleseg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simpleseg
   :alt:   (downloads)
.. |docker_bioconductor-simpleseg| image:: https://quay.io/repository/biocontainers/bioconductor-simpleseg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simpleseg
.. _`bioconductor-simpleseg/tags`: https://quay.io/repository/biocontainers/bioconductor-simpleseg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-simpleseg";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simpleseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simpleseg/README.html