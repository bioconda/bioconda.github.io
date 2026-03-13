:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-perfect'
.. highlight: bash

bioconductor-perfect
====================

.. conda:recipe:: bioconductor-perfect
   :replaces_section_title:
   :noindex:

   Permutation filtration for microbiome data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/PERFect.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-perfect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-perfect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-perfect/meta.yaml>`_

   PERFect is a novel permutation filtering approach designed to address two unsolved problems in microbiome data processing\: \(i\) define and quantify loss due to filtering by implementing thresholds\, and \(ii\) introduce and evaluate a permutation test for filtering loss to provide a measure of excessive filtering.


.. conda:package:: bioconductor-perfect

   |downloads_bioconductor-perfect| |docker_bioconductor-perfect|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-phyloseq: ``>=1.44.0,<1.45.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-fitdistrplus: ``>=1.0.12``
   :depends on r-ggplot2: ``>=3.0.0``
   :depends on r-matrix: ``>=1.2.14``
   :depends on r-psych: ``>=1.8.4``
   :depends on r-sn: ``>=1.5.2``
   :depends on r-zoo: ``>=1.8.3``

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

    pixi global install bioconductor-perfect

to add into an existing workspace instead, run::

    pixi add bioconductor-perfect

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-perfect

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-perfect

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-perfect:<tag>

(see `bioconductor-perfect/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-perfect| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-perfect.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-perfect
   :alt:   (downloads)
.. |docker_bioconductor-perfect| image:: https://quay.io/repository/biocontainers/bioconductor-perfect/status
   :target: https://quay.io/repository/biocontainers/bioconductor-perfect
.. _`bioconductor-perfect/tags`: https://quay.io/repository/biocontainers/bioconductor-perfect?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-perfect";
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-perfect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-perfect/README.html