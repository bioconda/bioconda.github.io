:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scaledmatrix'
.. highlight: bash

bioconductor-scaledmatrix
=========================

.. conda:recipe:: bioconductor-scaledmatrix
   :replaces_section_title:
   :noindex:

   Creating a DelayedMatrix of Scaled and Centered Values

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ScaledMatrix.html
   :license: GPL-3
   :recipe: /`bioconductor-scaledmatrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scaledmatrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scaledmatrix/meta.yaml>`_

   Provides delayed computation of a matrix of scaled and centered values. The result is equivalent to using the scale\(\) function but avoids explicit realization of a dense matrix during block processing. This permits greater efficiency in common operations\, most notably matrix multiplication.


.. conda:package:: bioconductor-scaledmatrix

   |downloads_bioconductor-scaledmatrix| |docker_bioconductor-scaledmatrix|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
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

    pixi global install bioconductor-scaledmatrix

to add into an existing workspace instead, run::

    pixi add bioconductor-scaledmatrix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scaledmatrix

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scaledmatrix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scaledmatrix:<tag>

(see `bioconductor-scaledmatrix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scaledmatrix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scaledmatrix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scaledmatrix
   :alt:   (downloads)
.. |docker_bioconductor-scaledmatrix| image:: https://quay.io/repository/biocontainers/bioconductor-scaledmatrix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scaledmatrix
.. _`bioconductor-scaledmatrix/tags`: https://quay.io/repository/biocontainers/bioconductor-scaledmatrix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scaledmatrix";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.1","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scaledmatrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scaledmatrix/README.html