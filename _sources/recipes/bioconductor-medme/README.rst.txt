:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-medme'
.. highlight: bash

bioconductor-medme
==================

.. conda:recipe:: bioconductor-medme
   :replaces_section_title:
   :noindex:

   Modelling Experimental Data from MeDIP Enrichment

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MEDME.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-medme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-medme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-medme/meta.yaml>`_
   :links: biotools: :biotools:`medme`, doi: :doi:`10.1101/gr.080721.108`

   MEDME allows the prediction of absolute and relative methylation levels based on measures obtained by MeDIP\-microarray experiments


.. conda:package:: bioconductor-medme

   |downloads_bioconductor-medme| |docker_bioconductor-medme|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-1</code>,  <code>1.58.0-0</code>,  <code>1.54.0-2</code>,  <code>1.54.0-1</code>,  <code>1.54.0-0</code>,  </span></summary>
      

      ``1.70.0-0``,  ``1.66.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.54.0-2``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-drc: 
   :depends on r-mass: 

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

    pixi global install bioconductor-medme

to add into an existing workspace instead, run::

    pixi add bioconductor-medme

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-medme

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-medme

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-medme:<tag>

(see `bioconductor-medme/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-medme| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-medme.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-medme
   :alt:   (downloads)
.. |docker_bioconductor-medme| image:: https://quay.io/repository/biocontainers/bioconductor-medme/status
   :target: https://quay.io/repository/biocontainers/bioconductor-medme
.. _`bioconductor-medme/tags`: https://quay.io/repository/biocontainers/bioconductor-medme?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-medme";
        var versions = ["1.70.0","1.66.0","1.62.0","1.60.0","1.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-medme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-medme/README.html