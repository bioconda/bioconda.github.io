:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bisquerna'
.. highlight: bash

r-bisquerna
===========

.. conda:recipe:: r-bisquerna
   :replaces_section_title:
   :noindex:

   Provides tools to accurately estimate cell type abundances from heterogeneous bulk expression.

   :homepage: https://www.biorxiv.org/content/10.1101/669911v1
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-bisquerna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bisquerna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bisquerna/meta.yaml>`_

   A reference\-based method utilizes single\-cell information to generate a signature matrix and transformation of bulk expression for accurate regression based estimates. A marker\-based method utilizes known cell\-specific marker genes to measure relative abundances across samples. For more details\, see Jew and Alvarez et al \(2019\) \<doi\:10.1101\/669911\>.


.. conda:package:: r-bisquerna

   |downloads_r-bisquerna| |docker_r-bisquerna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.5-3</code>,  <code>1.0.5-2</code>,  <code>1.0.5-1</code>,  <code>1.0.5-0</code>,  <code>1.0.4-2</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-1</code>,  <code>1.0.3-0</code>,  </span></summary>
      

      ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-limsolve: 

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

    pixi global install r-bisquerna

to add into an existing workspace instead, run::

    pixi add r-bisquerna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-bisquerna

Alternatively, to install into a new environment, run::

    conda create -n envname r-bisquerna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-bisquerna:<tag>

(see `r-bisquerna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-bisquerna| image:: https://img.shields.io/conda/dn/bioconda/r-bisquerna.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bisquerna
   :alt:   (downloads)
.. |docker_r-bisquerna| image:: https://quay.io/repository/biocontainers/r-bisquerna/status
   :target: https://quay.io/repository/biocontainers/r-bisquerna
.. _`r-bisquerna/tags`: https://quay.io/repository/biocontainers/r-bisquerna?tab=tags


.. raw:: html

    <script>
        var package = "r-bisquerna";
        var versions = ["1.0.5","1.0.5","1.0.5","1.0.5","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bisquerna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bisquerna/README.html