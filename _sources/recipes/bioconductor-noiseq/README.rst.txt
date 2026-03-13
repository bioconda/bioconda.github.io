:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-noiseq'
.. highlight: bash

bioconductor-noiseq
===================

.. conda:recipe:: bioconductor-noiseq
   :replaces_section_title:
   :noindex:

   Exploratory analysis and differential expression for RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/NOISeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-noiseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-noiseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-noiseq/meta.yaml>`_
   :links: biotools: :biotools:`noiseq`

   Analysis of RNA\-seq expression data or other similar kind of data. Exploratory plots to evualuate saturation\, count distribution\, expression per chromosome\, type of detected features\, features length\, etc. Differential expression between two experimental conditions with no parametric assumptions.


.. conda:package:: bioconductor-noiseq

   |downloads_bioconductor-noiseq| |docker_bioconductor-noiseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.54.0-0</code>,  <code>2.50.0-0</code>,  <code>2.46.0-0</code>,  <code>2.44.0-0</code>,  <code>2.42.0-0</code>,  <code>2.38.0-0</code>,  <code>2.36.0-0</code>,  <code>2.34.0-1</code>,  <code>2.34.0-0</code>,  </span></summary>
      

      ``2.54.0-0``,  ``2.50.0-0``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-0``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-1``,  ``2.34.0-0``,  ``2.31.0-0``,  ``2.30.0-0``,  ``2.28.0-1``,  ``2.26.1-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: ``>=1.2``

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

    pixi global install bioconductor-noiseq

to add into an existing workspace instead, run::

    pixi add bioconductor-noiseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-noiseq

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-noiseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-noiseq:<tag>

(see `bioconductor-noiseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-noiseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-noiseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-noiseq
   :alt:   (downloads)
.. |docker_bioconductor-noiseq| image:: https://quay.io/repository/biocontainers/bioconductor-noiseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-noiseq
.. _`bioconductor-noiseq/tags`: https://quay.io/repository/biocontainers/bioconductor-noiseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-noiseq";
        var versions = ["2.54.0","2.50.0","2.46.0","2.44.0","2.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-noiseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-noiseq/README.html