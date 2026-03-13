:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sagenhaft'
.. highlight: bash

bioconductor-sagenhaft
======================

.. conda:recipe:: bioconductor-sagenhaft
   :replaces_section_title:
   :noindex:

   Collection of functions for reading and comparing SAGE libraries

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/sagenhaft.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-sagenhaft <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sagenhaft>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sagenhaft/meta.yaml>`_
   :links: biotools: :biotools:`sagenhaft`, doi: :doi:`10.1038/nmeth.3252`

   This package implements several functions useful for analysis of gene expression data by sequencing tags as done in SAGE \(Serial Analysis of Gene Expressen\) data\, i.e. extraction of a SAGE library from sequence files\, sequence error correction\, library comparison. Sequencing error correction is implementing using an Expectation Maximization Algorithm based on a Mixture Model of tag counts.


.. conda:package:: bioconductor-sagenhaft

   |downloads_bioconductor-sagenhaft| |docker_bioconductor-sagenhaft|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.80.0-0</code>,  <code>1.76.0-0</code>,  <code>1.72.0-1</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-1</code>,  </span></summary>
      

      ``1.80.0-0``,  ``1.76.0-0``,  ``1.72.0-1``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-sparsem: ``>=0.73``

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

    pixi global install bioconductor-sagenhaft

to add into an existing workspace instead, run::

    pixi add bioconductor-sagenhaft

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sagenhaft

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sagenhaft

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sagenhaft:<tag>

(see `bioconductor-sagenhaft/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sagenhaft| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sagenhaft.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sagenhaft
   :alt:   (downloads)
.. |docker_bioconductor-sagenhaft| image:: https://quay.io/repository/biocontainers/bioconductor-sagenhaft/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sagenhaft
.. _`bioconductor-sagenhaft/tags`: https://quay.io/repository/biocontainers/bioconductor-sagenhaft?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sagenhaft";
        var versions = ["1.80.0","1.76.0","1.72.0","1.72.0","1.70.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sagenhaft/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sagenhaft/README.html