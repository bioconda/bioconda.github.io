:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tweedeseq'
.. highlight: bash

bioconductor-tweedeseq
======================

.. conda:recipe:: bioconductor-tweedeseq
   :replaces_section_title:
   :noindex:

   RNA\-seq data analysis using the Poisson\-Tweedie family of distributions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/tweeDEseq.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-tweedeseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tweedeseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tweedeseq/meta.yaml>`_
   :links: biotools: :biotools:`tweedeseq`

   Differential expression analysis of RNA\-seq using the Poisson\-Tweedie \(PT\) family of distributions. PT distributions are described by a mean\, a dispersion and a shape parameter and include Poisson and NB distributions\, among others\, as particular cases. An important feature of this family is that\, while the Negative Binomial \(NB\) distribution only allows a quadratic mean\-variance relationship\, the PT distributions generalizes this relationship to any orde.


.. conda:package:: bioconductor-tweedeseq

   |downloads_bioconductor-tweedeseq| |docker_bioconductor-tweedeseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.45.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.40.0-2</code>,  <code>1.40.0-1</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.48.0-0``,  ``1.45.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.40.0-2``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.1-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-cqn: ``>=1.56.0,<1.57.0``
   :depends on bioconductor-cqn: ``>=1.56.0,<1.57.0a0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-edger: ``>=4.8.2,<4.9.0a0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-mass: 
   :depends on r-rcpp: ``>=1.0.10``

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

    pixi global install bioconductor-tweedeseq

to add into an existing workspace instead, run::

    pixi add bioconductor-tweedeseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tweedeseq

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tweedeseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tweedeseq:<tag>

(see `bioconductor-tweedeseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tweedeseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tweedeseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tweedeseq
   :alt:   (downloads)
.. |docker_bioconductor-tweedeseq| image:: https://quay.io/repository/biocontainers/bioconductor-tweedeseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tweedeseq
.. _`bioconductor-tweedeseq/tags`: https://quay.io/repository/biocontainers/bioconductor-tweedeseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tweedeseq";
        var versions = ["1.56.0","1.52.0","1.52.0","1.48.0","1.45.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tweedeseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tweedeseq/README.html