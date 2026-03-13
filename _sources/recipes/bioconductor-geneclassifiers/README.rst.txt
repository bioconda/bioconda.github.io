:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneclassifiers'
.. highlight: bash

bioconductor-geneclassifiers
============================

.. conda:recipe:: bioconductor-geneclassifiers
   :replaces_section_title:
   :noindex:

   Application of gene classifiers

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/geneClassifiers.html
   :license: GPL-2
   :recipe: /`bioconductor-geneclassifiers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneclassifiers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneclassifiers/meta.yaml>`_

   This packages aims for easy accessible application of classifiers which have been published in literature using an ExpressionSet as input.


.. conda:package:: bioconductor-geneclassifiers

   |downloads_bioconductor-geneclassifiers| |docker_bioconductor-geneclassifiers|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
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

    pixi global install bioconductor-geneclassifiers

to add into an existing workspace instead, run::

    pixi add bioconductor-geneclassifiers

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-geneclassifiers

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-geneclassifiers

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-geneclassifiers:<tag>

(see `bioconductor-geneclassifiers/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-geneclassifiers| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneclassifiers.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geneclassifiers
   :alt:   (downloads)
.. |docker_bioconductor-geneclassifiers| image:: https://quay.io/repository/biocontainers/bioconductor-geneclassifiers/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneclassifiers
.. _`bioconductor-geneclassifiers/tags`: https://quay.io/repository/biocontainers/bioconductor-geneclassifiers?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geneclassifiers";
        var versions = ["1.34.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneclassifiers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneclassifiers/README.html