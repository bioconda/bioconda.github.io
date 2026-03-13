:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cate'
.. highlight: bash

r-cate
======

.. conda:recipe:: r-cate
   :replaces_section_title:
   :noindex:

   Provides several methods for factor analysis in high dimension \(both n\,p \>\> 1\) and methods to adjust for possible confounders in multiple hypothesis testing.

   :homepage: https://CRAN.R-project.org/package=cate
   :license: GPL2 / GPL-2
   :recipe: /`r-cate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cate/meta.yaml>`_

   


.. conda:package:: r-cate

   |downloads_r-cate| |docker_r-cate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.1-6</code>,  <code>1.1.1-5</code>,  <code>1.1.1-4</code>,  <code>1.1.1-3</code>,  <code>1.1.1-2</code>,  <code>1.1.1-1</code>,  <code>1.1.1-0</code>,  <code>1.1-1</code>,  <code>1.1-0</code>,  </span></summary>
      

      ``1.1.1-6``,  ``1.1.1-5``,  ``1.1.1-4``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-sva: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-corpcor: 
   :depends on r-esabcv: 
   :depends on r-leapp: 
   :depends on r-mass: 
   :depends on r-matrix: 
   :depends on r-ruv: 

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

    pixi global install r-cate

to add into an existing workspace instead, run::

    pixi add r-cate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-cate

Alternatively, to install into a new environment, run::

    conda create -n envname r-cate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-cate:<tag>

(see `r-cate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-cate| image:: https://img.shields.io/conda/dn/bioconda/r-cate.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cate
   :alt:   (downloads)
.. |docker_r-cate| image:: https://quay.io/repository/biocontainers/r-cate/status
   :target: https://quay.io/repository/biocontainers/r-cate
.. _`r-cate/tags`: https://quay.io/repository/biocontainers/r-cate?tab=tags


.. raw:: html

    <script>
        var package = "r-cate";
        var versions = ["1.1.1","1.1.1","1.1.1","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cate/README.html