:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-batchcorr'
.. highlight: bash

bioconductor-batchcorr
======================

.. conda:recipe:: bioconductor-batchcorr
   :replaces_section_title:
   :noindex:

   Within And Between Batch Correction Of LC\-MS Metabolomics Data

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/batchCorr.html
   :license: GPL-2
   :recipe: /`bioconductor-batchcorr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-batchcorr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-batchcorr/meta.yaml>`_

   From the perspective of metabolites as the continuation of the central dogma of biology\, metabolomics provides the closest link to many phenotypes of interest. This makes metabolomics research promising in teasing apart the complexities of living systems. However\, due to experimental reasons\, the data includes non\-biological variation which limits quality and reproducibility\, especially if the data is obtained from several batches. The batchCorr package reduces unwanted variation by way of between\-batch alignment\, within\-batch drift correction and between\-batch normalization using batch\-specific quality control samples and long\-term reference QC samples. Please see the associated article for more thorough descriptions of algorithms.


.. conda:package:: bioconductor-batchcorr

   |downloads_bioconductor-batchcorr| |docker_bioconductor-batchcorr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-mclust: 
   :depends on r-reshape: 

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

    pixi global install bioconductor-batchcorr

to add into an existing workspace instead, run::

    pixi add bioconductor-batchcorr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-batchcorr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-batchcorr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-batchcorr:<tag>

(see `bioconductor-batchcorr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-batchcorr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-batchcorr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-batchcorr
   :alt:   (downloads)
.. |docker_bioconductor-batchcorr| image:: https://quay.io/repository/biocontainers/bioconductor-batchcorr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-batchcorr
.. _`bioconductor-batchcorr/tags`: https://quay.io/repository/biocontainers/bioconductor-batchcorr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-batchcorr";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-batchcorr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-batchcorr/README.html