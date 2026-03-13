:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dnacopy'
.. highlight: bash

bioconductor-dnacopy
====================

.. conda:recipe:: bioconductor-dnacopy
   :replaces_section_title:
   :noindex:

   DNA Copy Number Data Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DNAcopy.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-dnacopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnacopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnacopy/meta.yaml>`_
   :links: biotools: :biotools:`dnacopy`, doi: :doi:`10.1038/nmeth.3252`

   Implements the circular binary segmentation \(CBS\) algorithm to segment DNA copy number data and identify genomic regions with abnormal copy number.


.. conda:package:: bioconductor-dnacopy

   |downloads_bioconductor-dnacopy| |docker_bioconductor-dnacopy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.84.0-0</code>,  <code>1.80.0-1</code>,  <code>1.80.0-0</code>,  <code>1.76.0-1</code>,  <code>1.76.0-0</code>,  <code>1.74.1-0</code>,  <code>1.72.0-1</code>,  <code>1.72.0-0</code>,  <code>1.68.0-2</code>,  </span></summary>
      

      ``1.84.0-0``,  ``1.80.0-1``,  ``1.80.0-0``,  ``1.76.0-1``,  ``1.76.0-0``,  ``1.74.1-0``,  ``1.72.0-1``,  ``1.72.0-0``,  ``1.68.0-2``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-2``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.1-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=14.3.0``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install bioconductor-dnacopy

to add into an existing workspace instead, run::

    pixi add bioconductor-dnacopy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dnacopy

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dnacopy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dnacopy:<tag>

(see `bioconductor-dnacopy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dnacopy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dnacopy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dnacopy
   :alt:   (downloads)
.. |docker_bioconductor-dnacopy| image:: https://quay.io/repository/biocontainers/bioconductor-dnacopy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dnacopy
.. _`bioconductor-dnacopy/tags`: https://quay.io/repository/biocontainers/bioconductor-dnacopy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dnacopy";
        var versions = ["1.84.0","1.80.0","1.80.0","1.76.0","1.76.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dnacopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dnacopy/README.html