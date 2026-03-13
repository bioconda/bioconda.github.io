:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mbamethyl'
.. highlight: bash

bioconductor-mbamethyl
======================

.. conda:recipe:: bioconductor-mbamethyl
   :replaces_section_title:
   :noindex:

   Model\-based analysis of DNA methylation data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MBAmethyl.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mbamethyl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbamethyl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbamethyl/meta.yaml>`_
   :links: biotools: :biotools:`mbamethyl`, doi: :doi:`10.1111/biom.12422`

   This package provides a function for reconstructing DNA methylation values from raw measurements. It iteratively implements the group fused lars to smooth related\-by\-location methylation values and the constrained least squares to remove probe affinity effect across multiple sequences.


.. conda:package:: bioconductor-mbamethyl

   |downloads_bioconductor-mbamethyl| |docker_bioconductor-mbamethyl|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
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

    pixi global install bioconductor-mbamethyl

to add into an existing workspace instead, run::

    pixi add bioconductor-mbamethyl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mbamethyl

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mbamethyl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mbamethyl:<tag>

(see `bioconductor-mbamethyl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mbamethyl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mbamethyl.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mbamethyl
   :alt:   (downloads)
.. |docker_bioconductor-mbamethyl| image:: https://quay.io/repository/biocontainers/bioconductor-mbamethyl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mbamethyl
.. _`bioconductor-mbamethyl/tags`: https://quay.io/repository/biocontainers/bioconductor-mbamethyl?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mbamethyl";
        var versions = ["1.44.0","1.40.0","1.36.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mbamethyl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mbamethyl/README.html