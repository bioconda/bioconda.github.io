:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-undo'
.. highlight: bash

bioconductor-undo
=================

.. conda:recipe:: bioconductor-undo
   :replaces_section_title:
   :noindex:

   Unsupervised Deconvolution of Tumor\-Stromal Mixed Expressions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/UNDO.html
   :license: GPL-2
   :recipe: /`bioconductor-undo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-undo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-undo/meta.yaml>`_
   :links: biotools: :biotools:`undo`, doi: :doi:`10.1093/bioinformatics/btu607`

   UNDO is an R package for unsupervised deconvolution of tumor and stromal mixed expression data. It detects marker genes and deconvolutes the mixing expression data without any prior knowledge.


.. conda:package:: bioconductor-undo

   |downloads_bioconductor-undo| |docker_bioconductor-undo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.48.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-boot: 
   :depends on r-mass: 
   :depends on r-nnls: 

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

    pixi global install bioconductor-undo

to add into an existing workspace instead, run::

    pixi add bioconductor-undo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-undo

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-undo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-undo:<tag>

(see `bioconductor-undo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-undo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-undo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-undo
   :alt:   (downloads)
.. |docker_bioconductor-undo| image:: https://quay.io/repository/biocontainers/bioconductor-undo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-undo
.. _`bioconductor-undo/tags`: https://quay.io/repository/biocontainers/bioconductor-undo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-undo";
        var versions = ["1.52.0","1.48.0","1.44.0","1.42.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-undo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-undo/README.html