:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-acgh'
.. highlight: bash

bioconductor-acgh
=================

.. conda:recipe:: bioconductor-acgh
   :replaces_section_title:
   :noindex:

   Classes and functions for Array Comparative Genomic Hybridization data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/aCGH.html
   :license: GPL-2
   :recipe: /`bioconductor-acgh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-acgh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-acgh/meta.yaml>`_
   :links: biotools: :biotools:`acgh`, doi: :doi:`10.1093/bioinformatics/bti677`

   Functions for reading aCGH data from image analysis output files and clone information files\, creation of aCGH S3 objects for storing these data. Basic methods for accessing\/replacing\, subsetting\, printing and plotting aCGH objects.


.. conda:package:: bioconductor-acgh

   |downloads_bioconductor-acgh| |docker_bioconductor-acgh|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.88.0-0</code>,  <code>1.84.0-0</code>,  <code>1.80.0-1</code>,  <code>1.80.0-0</code>,  <code>1.78.0-0</code>,  <code>1.76.0-1</code>,  <code>1.76.0-0</code>,  <code>1.72.0-2</code>,  <code>1.72.0-1</code>,  </span></summary>
      

      ``1.88.0-0``,  ``1.84.0-0``,  ``1.80.0-1``,  ``1.80.0-0``,  ``1.78.0-0``,  ``1.76.0-1``,  ``1.76.0-0``,  ``1.72.0-2``,  ``1.72.0-1``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-multtest: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-multtest: ``>=2.66.0,<2.67.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 
   :depends on r-survival: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install bioconductor-acgh

to add into an existing workspace instead, run::

    pixi add bioconductor-acgh

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-acgh

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-acgh

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-acgh:<tag>

(see `bioconductor-acgh/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-acgh| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-acgh.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-acgh
   :alt:   (downloads)
.. |docker_bioconductor-acgh| image:: https://quay.io/repository/biocontainers/bioconductor-acgh/status
   :target: https://quay.io/repository/biocontainers/bioconductor-acgh
.. _`bioconductor-acgh/tags`: https://quay.io/repository/biocontainers/bioconductor-acgh?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-acgh";
        var versions = ["1.88.0","1.84.0","1.80.0","1.80.0","1.78.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-acgh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-acgh/README.html