:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adductomicsr'
.. highlight: bash

bioconductor-adductomicsr
=========================

.. conda:recipe:: bioconductor-adductomicsr
   :replaces_section_title:
   :noindex:

   Processing of adductomic mass spectral datasets

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/adductomicsR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-adductomicsr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adductomicsr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adductomicsr/meta.yaml>`_

   Processes MS2 data to identify potentially adducted peptides from spectra that has been corrected for mass drift and retention time drift and quantifies MS1 level mass spectral peaks.


.. conda:package:: bioconductor-adductomicsr

   |downloads_bioconductor-adductomicsr| |docker_bioconductor-adductomicsr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-adductdata: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-mzr: ``>=2.44.0,<2.45.0``
   :depends on r-ade4: ``>=1.7.6``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bootstrap: ``>=2017.2``
   :depends on r-data.table: ``>=1.10.4``
   :depends on r-dosnow: ``>=1.0.14``
   :depends on r-dplyr: ``>=0.7.5``
   :depends on r-dt: ``>=0.2``
   :depends on r-fastcluster: ``>=1.1.22``
   :depends on r-foreach: ``>=1.4.3``
   :depends on r-fpc: ``>=2.1.10``
   :depends on r-orgmassspecr: ``>=0.4.6``
   :depends on r-pastecs: ``>=1.3.18``
   :depends on r-pracma: ``>=2.0.4``
   :depends on r-rcppeigen: ``>=0.3.3.3.0``
   :depends on r-reshape2: ``>=1.4.2``
   :depends on r-rvest: ``>=0.3.2``
   :depends on r-smoother: ``>=1.1``
   :depends on r-zoo: ``>=1.8``

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

    pixi global install bioconductor-adductomicsr

to add into an existing workspace instead, run::

    pixi add bioconductor-adductomicsr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-adductomicsr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-adductomicsr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-adductomicsr:<tag>

(see `bioconductor-adductomicsr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-adductomicsr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adductomicsr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adductomicsr
   :alt:   (downloads)
.. |docker_bioconductor-adductomicsr| image:: https://quay.io/repository/biocontainers/bioconductor-adductomicsr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adductomicsr
.. _`bioconductor-adductomicsr/tags`: https://quay.io/repository/biocontainers/bioconductor-adductomicsr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-adductomicsr";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adductomicsr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adductomicsr/README.html