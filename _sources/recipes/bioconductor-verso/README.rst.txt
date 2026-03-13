:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-verso'
.. highlight: bash

bioconductor-verso
==================

.. conda:recipe:: bioconductor-verso
   :replaces_section_title:
   :noindex:

   Viral Evolution ReconStructiOn \(VERSO\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/VERSO.html
   :license: file LICENSE
   :recipe: /`bioconductor-verso <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-verso>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-verso/meta.yaml>`_

   Mutations that rapidly accumulate in viral genomes during a pandemic can be used to track the evolution of the virus and\, accordingly\, unravel the viral infection network. To this extent\, sequencing samples of the virus can be employed to estimate models from genomic epidemiology and may serve\, for instance\, to estimate the proportion of undetected infected people by uncovering cryptic transmissions\, as well as to predict likely trends in the number of infected\, hospitalized\, dead and recovered people. VERSO is an algorithmic framework that processes variants profiles from viral samples to produce phylogenetic models of viral evolution. The approach solves a Boolean Matrix Factorization problem with phylogenetic constraints\, by maximizing a log\-likelihood function. VERSO includes two separate and subsequent steps\; in this package we provide an R implementation of VERSO STEP 1.


.. conda:package:: bioconductor-verso

   |downloads_bioconductor-verso| |docker_bioconductor-verso|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  <code>1.0.0-1</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-ape: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.tree: 
   :depends on r-rfast: 

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

    pixi global install bioconductor-verso

to add into an existing workspace instead, run::

    pixi add bioconductor-verso

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-verso

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-verso

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-verso:<tag>

(see `bioconductor-verso/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-verso| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-verso.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-verso
   :alt:   (downloads)
.. |docker_bioconductor-verso| image:: https://quay.io/repository/biocontainers/bioconductor-verso/status
   :target: https://quay.io/repository/biocontainers/bioconductor-verso
.. _`bioconductor-verso/tags`: https://quay.io/repository/biocontainers/bioconductor-verso?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-verso";
        var versions = ["1.20.0","1.16.0","1.12.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-verso/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-verso/README.html