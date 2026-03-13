:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ancombc'
.. highlight: bash

bioconductor-ancombc
====================

.. conda:recipe:: bioconductor-ancombc
   :replaces_section_title:
   :noindex:

   Microbiome differential abudance and correlation analyses with bias correction

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ANCOMBC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ancombc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ancombc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ancombc/meta.yaml>`_

   ANCOMBC is a package containing differential abundance \(DA\) and correlation analyses for microbiome data. Specifically\, the package includes Analysis of Compositions of Microbiomes with Bias Correction 2 \(ANCOM\-BC2\)\, Analysis of Compositions of Microbiomes with Bias Correction \(ANCOM\-BC\)\, and Analysis of Composition of Microbiomes \(ANCOM\) for DA analysis\, and Sparse Estimation of Correlations among Microbiomes \(SECOM\) for correlation analysis. Microbiome data are typically subject to two sources of biases\: unequal sampling fractions \(sample\-specific biases\) and differential sequencing efficiencies \(taxon\-specific biases\). Methodologies included in the ANCOMBC package are designed to correct these biases and construct statistically consistent estimators.


.. conda:package:: bioconductor-ancombc

   |downloads_bioconductor-ancombc| |docker_bioconductor-ancombc|

   :versions:
      
      

      ``2.12.0-0``,  ``2.8.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.1-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.5-0``,  ``1.0.0-2``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cvxr: 
   :depends on r-desctools: 
   :depends on r-doparallel: 
   :depends on r-dorng: 
   :depends on r-energy: 
   :depends on r-foreach: 
   :depends on r-gtools: 
   :depends on r-hmisc: 
   :depends on r-lme4: 
   :depends on r-lmertest: 
   :depends on r-mass: 
   :depends on r-matrix: 
   :depends on r-multcomp: 
   :depends on r-nloptr: 
   :depends on r-rdpack: 

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

    pixi global install bioconductor-ancombc

to add into an existing workspace instead, run::

    pixi add bioconductor-ancombc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ancombc

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ancombc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ancombc:<tag>

(see `bioconductor-ancombc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ancombc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ancombc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ancombc
   :alt:   (downloads)
.. |docker_bioconductor-ancombc| image:: https://quay.io/repository/biocontainers/bioconductor-ancombc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ancombc
.. _`bioconductor-ancombc/tags`: https://quay.io/repository/biocontainers/bioconductor-ancombc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ancombc";
        var versions = ["2.12.0","2.8.0","2.4.0","2.2.0","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ancombc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ancombc/README.html