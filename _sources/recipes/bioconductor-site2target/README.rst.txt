:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-site2target'
.. highlight: bash

bioconductor-site2target
========================

.. conda:recipe:: bioconductor-site2target
   :replaces_section_title:
   :noindex:

   An R package to associate peaks and target genes

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/Site2Target.html
   :license: GPL-2
   :recipe: /`bioconductor-site2target <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-site2target>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-site2target/meta.yaml>`_

   Statistics implemented for both peak\-wise and gene\-wise associations. In peak\-wise associations\, the p\-value of the target genes of a given set of peaks are calculated. Negative binomial or Poisson distributions can be used for modeling the unweighted peaks targets and log\-nromal can be used to model the weighted peaks. In gene\-wise associations a table consisting of a set of genes\, mapped to specific peaks\, is generated using the given rules.


.. conda:package:: bioconductor-site2target

   |downloads_bioconductor-site2target| |docker_bioconductor-site2target|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-mass: 

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

    pixi global install bioconductor-site2target

to add into an existing workspace instead, run::

    pixi add bioconductor-site2target

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-site2target

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-site2target

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-site2target:<tag>

(see `bioconductor-site2target/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-site2target| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-site2target.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-site2target
   :alt:   (downloads)
.. |docker_bioconductor-site2target| image:: https://quay.io/repository/biocontainers/bioconductor-site2target/status
   :target: https://quay.io/repository/biocontainers/bioconductor-site2target
.. _`bioconductor-site2target/tags`: https://quay.io/repository/biocontainers/bioconductor-site2target?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-site2target";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-site2target/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-site2target/README.html