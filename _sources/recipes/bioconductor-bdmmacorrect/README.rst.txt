:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bdmmacorrect'
.. highlight: bash

bioconductor-bdmmacorrect
=========================

.. conda:recipe:: bioconductor-bdmmacorrect
   :replaces_section_title:
   :noindex:

   Meta\-analysis for the metagenomic read counts data from different cohorts

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BDMMAcorrect.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-bdmmacorrect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bdmmacorrect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bdmmacorrect/meta.yaml>`_
   :links: biotools: :biotools:`bdmmacorrect`

   Metagenomic sequencing techniques enable quantitative analyses of the microbiome. However\, combining the microbial data from these experiments is challenging due to the variations between experiments. The existing methods for correcting batch effects do not consider the interactions between variables—microbial taxa in microbial studies—and the overdispersion of the microbiome data. Therefore\, they are not applicable to microbiome data. We develop a new method\, Bayesian Dirichlet\-multinomial regression meta\-analysis \(BDMMA\)\, to simultaneously model the batch effects and detect the microbial taxa associated with phenotypes. BDMMA automatically models the dependence among microbial taxa and is robust to the high dimensionality of the microbiome and their association sparsity.


.. conda:package:: bioconductor-bdmmacorrect

   |downloads_bioconductor-bdmmacorrect| |docker_bioconductor-bdmmacorrect|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.1-1</code>,  <code>1.18.1-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.12.0-2</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.18.1-1``,  ``1.18.1-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.12.0-2``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on r-ape: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-ellipse: 
   :depends on r-ggplot2: 
   :depends on r-rcpp: ``>=0.12.12``
   :depends on r-rcpparmadillo: 
   :depends on r-rcppeigen: 
   :depends on r-vegan: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install bioconductor-bdmmacorrect

to add into an existing workspace instead, run::

    pixi add bioconductor-bdmmacorrect

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bdmmacorrect

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bdmmacorrect

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bdmmacorrect:<tag>

(see `bioconductor-bdmmacorrect/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bdmmacorrect| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bdmmacorrect.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bdmmacorrect
   :alt:   (downloads)
.. |docker_bioconductor-bdmmacorrect| image:: https://quay.io/repository/biocontainers/bioconductor-bdmmacorrect/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bdmmacorrect
.. _`bioconductor-bdmmacorrect/tags`: https://quay.io/repository/biocontainers/bioconductor-bdmmacorrect?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bdmmacorrect";
        var versions = ["1.18.1","1.18.1","1.16.0","1.16.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bdmmacorrect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bdmmacorrect/README.html