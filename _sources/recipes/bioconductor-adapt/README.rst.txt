:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adapt'
.. highlight: bash

bioconductor-adapt
==================

.. conda:recipe:: bioconductor-adapt
   :replaces_section_title:
   :noindex:

   Analysis of Microbiome Differential Abundance by Pooling Tobit Models

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ADAPT.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-adapt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adapt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adapt/meta.yaml>`_

   ADAPT carries out differential abundance analysis for microbiome metagenomics data in phyloseq format. It has two innovations. One is to treat zero counts as left censored and use Tobit models for log count ratios. The other is an innovative way to find non\-differentially abundant taxa as reference\, then use the reference taxa to find the differentially abundant ones.


.. conda:package:: bioconductor-adapt

   |downloads_bioconductor-adapt| |docker_bioconductor-adapt|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-phyloseq: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-phyloseq: ``>=1.54.0,<1.55.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: ``>=3.4.1``
   :depends on r-ggrepel: ``>=0.9.1``
   :depends on r-rcpp: ``>=1.0.8``
   :depends on r-rcpparmadillo: ``>=0.10.8``
   :depends on r-rcppparallel: ``>=5.1.5``
   :depends on tbb-devel: ``>=2022.3.0,<2022.4.0a0``

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

    pixi global install bioconductor-adapt

to add into an existing workspace instead, run::

    pixi add bioconductor-adapt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-adapt

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-adapt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-adapt:<tag>

(see `bioconductor-adapt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-adapt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adapt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adapt
   :alt:   (downloads)
.. |docker_bioconductor-adapt| image:: https://quay.io/repository/biocontainers/bioconductor-adapt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adapt
.. _`bioconductor-adapt/tags`: https://quay.io/repository/biocontainers/bioconductor-adapt?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-adapt";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adapt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adapt/README.html