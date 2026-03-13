:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-swamp'
.. highlight: bash

r-swamp
=======

.. conda:recipe:: r-swamp
   :replaces_section_title:
   :noindex:

   Collection of functions to connect the structure of the data with the information on the samples. Three types of associations are covered\: 1. linear model of principal components. 2. hierarchical clustering analysis. 3. distribution of features\-sample annotation associations. Additionally\, the inter\-relation between sample annotations can be analyzed. Simple methods are provided for the correction of batch effects and removal of principal components.

   :homepage: https://CRAN.R-project.org/package=swamp
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-swamp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-swamp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-swamp/meta.yaml>`_

   


.. conda:package:: r-swamp

   |downloads_r-swamp| |docker_r-swamp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.1-7</code>,  <code>1.5.1-6</code>,  <code>1.5.1-5</code>,  <code>1.5.1-4</code>,  <code>1.5.1-3</code>,  <code>1.5.1-2</code>,  <code>1.5.1-1</code>,  <code>1.5.1-0</code>,  <code>1.4.1-3</code>,  </span></summary>
      

      ``1.5.1-7``,  ``1.5.1-6``,  ``1.5.1-5``,  ``1.5.1-4``,  ``1.5.1-3``,  ``1.5.1-2``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.4.1-3``,  ``1.4.1-2``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-impute: 
   :depends on r-amap: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-gplots: 
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

    pixi global install r-swamp

to add into an existing workspace instead, run::

    pixi add r-swamp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-swamp

Alternatively, to install into a new environment, run::

    conda create -n envname r-swamp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-swamp:<tag>

(see `r-swamp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-swamp| image:: https://img.shields.io/conda/dn/bioconda/r-swamp.svg?style=flat
   :target: https://anaconda.org/bioconda/r-swamp
   :alt:   (downloads)
.. |docker_r-swamp| image:: https://quay.io/repository/biocontainers/r-swamp/status
   :target: https://quay.io/repository/biocontainers/r-swamp
.. _`r-swamp/tags`: https://quay.io/repository/biocontainers/r-swamp?tab=tags


.. raw:: html

    <script>
        var package = "r-swamp";
        var versions = ["1.5.1","1.5.1","1.5.1","1.5.1","1.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-swamp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-swamp/README.html