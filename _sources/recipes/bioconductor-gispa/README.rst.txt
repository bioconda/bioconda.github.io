:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gispa'
.. highlight: bash

bioconductor-gispa
==================

.. conda:recipe:: bioconductor-gispa
   :replaces_section_title:
   :noindex:

   GISPA\: Method for Gene Integrated Set Profile Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GISPA.html
   :license: GPL-2
   :recipe: /`bioconductor-gispa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gispa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gispa/meta.yaml>`_

   GISPA is a method intended for the researchers who are interested in defining gene sets with similar\, a priori specified molecular profile. GISPA method has been previously published in Nucleic Acid Research \(Kowalski et al.\, 2016\; PMID\: 26826710\).


.. conda:package:: bioconductor-gispa

   |downloads_bioconductor-gispa| |docker_bioconductor-gispa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends on bioconductor-genefilter: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-gseabase: ``>=1.64.0,<1.65.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-changepoint: 
   :depends on r-data.table: 
   :depends on r-hh: 
   :depends on r-lattice: 
   :depends on r-latticeextra: 
   :depends on r-plyr: 
   :depends on r-scatterplot3d: 

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

    pixi global install bioconductor-gispa

to add into an existing workspace instead, run::

    pixi add bioconductor-gispa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gispa

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gispa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gispa:<tag>

(see `bioconductor-gispa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gispa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gispa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gispa
   :alt:   (downloads)
.. |docker_bioconductor-gispa| image:: https://quay.io/repository/biocontainers/bioconductor-gispa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gispa
.. _`bioconductor-gispa/tags`: https://quay.io/repository/biocontainers/bioconductor-gispa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gispa";
        var versions = ["1.26.0","1.24.0","1.22.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gispa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gispa/README.html