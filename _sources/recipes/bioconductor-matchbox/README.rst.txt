:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-matchbox'
.. highlight: bash

bioconductor-matchbox
=====================

.. conda:recipe:: bioconductor-matchbox
   :replaces_section_title:
   :noindex:

   Utilities to compute\, compare\, and plot the agreement between ordered vectors of features \(ie. distinct genomic experiments\). The package includes Correspondence\-At\-the\-TOP \(CAT\) analysis.

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/matchBox.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-matchbox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matchbox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matchbox/meta.yaml>`_

   The matchBox package enables comparing ranked vectors of features\, merging multiple datasets\, removing redundant features\, using CAT\-plots and Venn diagrams\, and computing statistical significance.


.. conda:package:: bioconductor-matchbox

   |downloads_bioconductor-matchbox| |docker_bioconductor-matchbox|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.48.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-matchbox

to add into an existing workspace instead, run::

    pixi add bioconductor-matchbox

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-matchbox

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-matchbox

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-matchbox:<tag>

(see `bioconductor-matchbox/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-matchbox| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-matchbox.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-matchbox
   :alt:   (downloads)
.. |docker_bioconductor-matchbox| image:: https://quay.io/repository/biocontainers/bioconductor-matchbox/status
   :target: https://quay.io/repository/biocontainers/bioconductor-matchbox
.. _`bioconductor-matchbox/tags`: https://quay.io/repository/biocontainers/bioconductor-matchbox?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-matchbox";
        var versions = ["1.52.0","1.48.0","1.44.0","1.42.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-matchbox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-matchbox/README.html