:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dirichletmultinomial'
.. highlight: bash

bioconductor-dirichletmultinomial
=================================

.. conda:recipe:: bioconductor-dirichletmultinomial
   :replaces_section_title:
   :noindex:

   Dirichlet\-Multinomial Mixture Model Machine Learning for Microbiome Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DirichletMultinomial.html
   :license: LGPL-3
   :recipe: /`bioconductor-dirichletmultinomial <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dirichletmultinomial>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dirichletmultinomial/meta.yaml>`_
   :links: biotools: :biotools:`dirichletmultinomial`, doi: :doi:`10.1371/journal.pone.0030126`

   Dirichlet\-multinomial mixture models can be used to describe variability in microbial metagenomic data. This package is an interface to code originally made available by Holmes\, Harris\, and Quince\, 2012\, PLoS ONE 7\(2\)\: 1\-15\, as discussed further in the man page for this package\, \?DirichletMultinomial.


.. conda:package:: bioconductor-dirichletmultinomial

   |downloads_bioconductor-dirichletmultinomial| |docker_bioconductor-dirichletmultinomial|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.36.0-3</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.36.0-3``,  ``1.36.0-2``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.1-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install bioconductor-dirichletmultinomial

to add into an existing workspace instead, run::

    pixi add bioconductor-dirichletmultinomial

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dirichletmultinomial

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dirichletmultinomial

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dirichletmultinomial:<tag>

(see `bioconductor-dirichletmultinomial/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dirichletmultinomial| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dirichletmultinomial.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dirichletmultinomial
   :alt:   (downloads)
.. |docker_bioconductor-dirichletmultinomial| image:: https://quay.io/repository/biocontainers/bioconductor-dirichletmultinomial/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dirichletmultinomial
.. _`bioconductor-dirichletmultinomial/tags`: https://quay.io/repository/biocontainers/bioconductor-dirichletmultinomial?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dirichletmultinomial";
        var versions = ["1.52.0","1.48.0","1.48.0","1.44.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dirichletmultinomial/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dirichletmultinomial/README.html