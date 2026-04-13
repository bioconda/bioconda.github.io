:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simlr'
.. highlight: bash

bioconductor-simlr
==================

.. conda:recipe:: bioconductor-simlr
   :replaces_section_title:
   :noindex:

   Single\-cell Interpretation via Multi\-kernel LeaRning \(SIMLR\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SIMLR.html
   :license: file LICENSE
   :recipe: /`bioconductor-simlr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simlr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simlr/meta.yaml>`_
   :links: biotools: :biotools:`simlr`, doi: :doi:`10.1101/118901`

   Single\-cell RNA\-seq technologies enable high throughput gene expression measurement of individual cells\, and allow the discovery of heterogeneity within cell populations. Measurement of cell\-to\-cell gene expression similarity is critical for the identification\, visualization and analysis of cell populations. However\, single\-cell data introduce challenges to conventional measures of gene expression similarity because of the high level of noise\, outliers and dropouts. We develop a novel similarity\-learning framework\, SIMLR \(Single\-cell Interpretation via Multi\-kernel LeaRning\)\, which learns an appropriate distance metric from the data for dimension reduction\, clustering and visualization.


.. conda:package:: bioconductor-simlr

   |downloads_bioconductor-simlr| |docker_bioconductor-simlr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.1-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.20.0-2</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.1-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 
   :depends on r-pracma: 
   :depends on r-rcpp: 
   :depends on r-rcppannoy: 
   :depends on r-rspectra: 

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

    pixi global install bioconductor-simlr

to add into an existing workspace instead, run::

    pixi add bioconductor-simlr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-simlr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-simlr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-simlr:<tag>

(see `bioconductor-simlr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-simlr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simlr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simlr
   :alt:   (downloads)
.. |docker_bioconductor-simlr| image:: https://quay.io/repository/biocontainers/bioconductor-simlr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simlr
.. _`bioconductor-simlr/tags`: https://quay.io/repository/biocontainers/bioconductor-simlr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-simlr";
        var versions = ["1.36.0","1.32.0","1.28.0","1.26.1","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simlr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simlr/README.html