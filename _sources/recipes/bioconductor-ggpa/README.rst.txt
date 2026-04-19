:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggpa'
.. highlight: bash

bioconductor-ggpa
=================

.. conda:recipe:: bioconductor-ggpa
   :replaces_section_title:
   :noindex:

   graph\-GPA\: A graphical model for prioritizing GWAS results and investigating pleiotropic architecture

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GGPA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ggpa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggpa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggpa/meta.yaml>`_

   Genome\-wide association studies \(GWAS\) is a widely used tool for identification of genetic variants associated with phenotypes and diseases\, though complex diseases featuring many genetic variants with small effects present difficulties for traditional these studies. By leveraging pleiotropy\, the statistical power of a single GWAS can be increased. This package provides functions for fitting graph\-GPA\, a statistical framework to prioritize GWAS results by integrating pleiotropy. \'GGPA\' package provides user\-friendly interface to fit graph\-GPA models\, implement association mapping\, and generate a phenotype graph.


.. conda:package:: bioconductor-ggpa

   |downloads_bioconductor-ggpa| |docker_bioconductor-ggpa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.6.0-2</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggally: 
   :depends on r-matrixstats: 
   :depends on r-network: 
   :depends on r-rcpp: ``>=0.11.3``
   :depends on r-rcpparmadillo: 
   :depends on r-scales: 
   :depends on r-sna: 

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

    pixi global install bioconductor-ggpa

to add into an existing workspace instead, run::

    pixi add bioconductor-ggpa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ggpa

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ggpa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ggpa:<tag>

(see `bioconductor-ggpa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ggpa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggpa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggpa
   :alt:   (downloads)
.. |docker_bioconductor-ggpa| image:: https://quay.io/repository/biocontainers/bioconductor-ggpa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggpa
.. _`bioconductor-ggpa/tags`: https://quay.io/repository/biocontainers/bioconductor-ggpa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ggpa";
        var versions = ["1.22.0","1.18.0","1.14.0","1.14.0","1.12.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggpa/README.html