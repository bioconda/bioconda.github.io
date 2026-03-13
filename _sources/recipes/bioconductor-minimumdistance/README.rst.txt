:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-minimumdistance'
.. highlight: bash

bioconductor-minimumdistance
============================

.. conda:recipe:: bioconductor-minimumdistance
   :replaces_section_title:
   :noindex:

   A Package for De Novo CNV Detection in Case\-Parent Trios

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MinimumDistance.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-minimumdistance <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minimumdistance>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minimumdistance/meta.yaml>`_
   :links: biotools: :biotools:`minimumdistance`, doi: :doi:`10.1186/1471-2105-13-330`

   Analysis of de novo copy number variants in trios from high\-dimensional genotyping platforms.


.. conda:package:: bioconductor-minimumdistance

   |downloads_bioconductor-minimumdistance| |docker_bioconductor-minimumdistance|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-0</code>,  <code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  </span></summary>
      

      ``1.54.0-0``,  ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.1-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-dnacopy: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-oligoclasses: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-vanillaice: ``>=1.72.0,<1.73.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-ff: 
   :depends on r-foreach: 
   :depends on r-lattice: 
   :depends on r-matrixstats: 

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

    pixi global install bioconductor-minimumdistance

to add into an existing workspace instead, run::

    pixi add bioconductor-minimumdistance

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-minimumdistance

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-minimumdistance

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-minimumdistance:<tag>

(see `bioconductor-minimumdistance/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-minimumdistance| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-minimumdistance.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-minimumdistance
   :alt:   (downloads)
.. |docker_bioconductor-minimumdistance| image:: https://quay.io/repository/biocontainers/bioconductor-minimumdistance/status
   :target: https://quay.io/repository/biocontainers/bioconductor-minimumdistance
.. _`bioconductor-minimumdistance/tags`: https://quay.io/repository/biocontainers/bioconductor-minimumdistance?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-minimumdistance";
        var versions = ["1.54.0","1.50.0","1.46.0","1.44.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-minimumdistance/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-minimumdistance/README.html