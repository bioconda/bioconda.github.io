:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ruvnormalize'
.. highlight: bash

bioconductor-ruvnormalize
=========================

.. conda:recipe:: bioconductor-ruvnormalize
   :replaces_section_title:
   :noindex:

   RUV for normalization of expression array data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RUVnormalize.html
   :license: GPL-3
   :recipe: /`bioconductor-ruvnormalize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ruvnormalize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ruvnormalize/meta.yaml>`_
   :links: biotools: :biotools:`ruvnormalize`

   RUVnormalize is meant to remove unwanted variation from gene expression data when the factor of interest is not defined\, e.g.\, to clean up a dataset for general use or to do any kind of unsupervised analysis.


.. conda:package:: bioconductor-ruvnormalize

   |downloads_bioconductor-ruvnormalize| |docker_bioconductor-ruvnormalize|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-2</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-2``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-ruvnormalizedata: ``>=1.30.0,<1.31.0``
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

    pixi global install bioconductor-ruvnormalize

to add into an existing workspace instead, run::

    pixi add bioconductor-ruvnormalize

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ruvnormalize

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ruvnormalize

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ruvnormalize:<tag>

(see `bioconductor-ruvnormalize/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ruvnormalize| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ruvnormalize.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ruvnormalize
   :alt:   (downloads)
.. |docker_bioconductor-ruvnormalize| image:: https://quay.io/repository/biocontainers/bioconductor-ruvnormalize/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ruvnormalize
.. _`bioconductor-ruvnormalize/tags`: https://quay.io/repository/biocontainers/bioconductor-ruvnormalize?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ruvnormalize";
        var versions = ["1.44.0","1.40.0","1.36.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ruvnormalize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ruvnormalize/README.html