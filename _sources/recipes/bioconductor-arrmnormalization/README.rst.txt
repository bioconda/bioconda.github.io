:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-arrmnormalization'
.. highlight: bash

bioconductor-arrmnormalization
==============================

.. conda:recipe:: bioconductor-arrmnormalization
   :replaces_section_title:
   :noindex:

   Adaptive Robust Regression normalization for Illumina methylation data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ARRmNormalization.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-arrmnormalization <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrmnormalization>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrmnormalization/meta.yaml>`_
   :links: biotools: :biotools:`arrmnormalization`, doi: :doi:`10.1186/s13059-014-0503-2`

   Perform the Adaptive Robust Regression method \(ARRm\) for the normalization of methylation data from the Illumina Infinium HumanMethylation 450k assay.


.. conda:package:: bioconductor-arrmnormalization

   |downloads_bioconductor-arrmnormalization| |docker_bioconductor-arrmnormalization|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-2</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-2``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-arrmdata: ``>=1.46.0,<1.47.0``
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

    pixi global install bioconductor-arrmnormalization

to add into an existing workspace instead, run::

    pixi add bioconductor-arrmnormalization

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-arrmnormalization

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-arrmnormalization

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-arrmnormalization:<tag>

(see `bioconductor-arrmnormalization/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-arrmnormalization| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-arrmnormalization.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-arrmnormalization
   :alt:   (downloads)
.. |docker_bioconductor-arrmnormalization| image:: https://quay.io/repository/biocontainers/bioconductor-arrmnormalization/status
   :target: https://quay.io/repository/biocontainers/bioconductor-arrmnormalization
.. _`bioconductor-arrmnormalization/tags`: https://quay.io/repository/biocontainers/bioconductor-arrmnormalization?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-arrmnormalization";
        var versions = ["1.50.0","1.46.0","1.42.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-arrmnormalization/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-arrmnormalization/README.html