:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xcore'
.. highlight: bash

bioconductor-xcore
==================

.. conda:recipe:: bioconductor-xcore
   :replaces_section_title:
   :noindex:

   xcore expression regulators inference

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/xcore.html
   :license: GPL-2
   :recipe: /`bioconductor-xcore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xcore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xcore/meta.yaml>`_

   xcore is an R package for transcription factor activity modeling based on known molecular signatures and user\'s gene expression data. Accompanying xcoredata package provides a collection of molecular signatures\, constructed from publicly available ChiP\-seq experiments. xcore use ridge regression to model changes in expression as a linear combination of molecular signatures and find their unknown activities. Obtained\, estimates can be further tested for significance to select molecular signatures with the highest predicted effect on the observed expression changes.


.. conda:package:: bioconductor-xcore

   |downloads_bioconductor-xcore| |docker_bioconductor-xcore|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-foreach: ``>=1.5.1``
   :depends on r-glmnet: ``>=4.1.2``
   :depends on r-iterators: ``>=1.0.13``
   :depends on r-magrittr: ``>=2.0.1``
   :depends on r-matrix: ``>=1.3.4``

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

    pixi global install bioconductor-xcore

to add into an existing workspace instead, run::

    pixi add bioconductor-xcore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-xcore

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-xcore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-xcore:<tag>

(see `bioconductor-xcore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-xcore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xcore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xcore
   :alt:   (downloads)
.. |docker_bioconductor-xcore| image:: https://quay.io/repository/biocontainers/bioconductor-xcore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xcore
.. _`bioconductor-xcore/tags`: https://quay.io/repository/biocontainers/bioconductor-xcore?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xcore";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xcore/README.html