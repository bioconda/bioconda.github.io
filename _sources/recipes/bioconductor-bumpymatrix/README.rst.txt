:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bumpymatrix'
.. highlight: bash

bioconductor-bumpymatrix
========================

.. conda:recipe:: bioconductor-bumpymatrix
   :replaces_section_title:
   :noindex:

   Bumpy Matrix of Non\-Scalar Objects

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BumpyMatrix.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-bumpymatrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bumpymatrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bumpymatrix/meta.yaml>`_

   Implements the BumpyMatrix class and several subclasses for holding non\-scalar objects in each entry of the matrix. This is akin to a ragged array but the raggedness is in the third dimension\, much like a bumpy surface \- hence the name. Of particular interest is the BumpyDataFrameMatrix\, where each entry is a Bioconductor data frame. This allows us to naturally represent multivariate data in a format that is compatible with two\-dimensional containers like the SummarizedExperiment and MultiAssayExperiment objects.


.. conda:package:: bioconductor-bumpymatrix

   |downloads_bioconductor-bumpymatrix| |docker_bioconductor-bumpymatrix|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 

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

    pixi global install bioconductor-bumpymatrix

to add into an existing workspace instead, run::

    pixi add bioconductor-bumpymatrix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bumpymatrix

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bumpymatrix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bumpymatrix:<tag>

(see `bioconductor-bumpymatrix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bumpymatrix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bumpymatrix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bumpymatrix
   :alt:   (downloads)
.. |docker_bioconductor-bumpymatrix| image:: https://quay.io/repository/biocontainers/bioconductor-bumpymatrix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bumpymatrix
.. _`bioconductor-bumpymatrix/tags`: https://quay.io/repository/biocontainers/bioconductor-bumpymatrix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bumpymatrix";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bumpymatrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bumpymatrix/README.html