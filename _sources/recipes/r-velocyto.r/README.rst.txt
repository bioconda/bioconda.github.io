:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-velocyto.r'
.. highlight: bash

r-velocyto.r
============

.. conda:recipe:: r-velocyto.r
   :replaces_section_title:
   :noindex:

   RNA velocity estimation in R

   :homepage: https://github.com/velocyto-team/velocyto.R
   :license: GPL3 / GPL-3
   :recipe: /`r-velocyto.r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-velocyto.r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-velocyto.r/meta.yaml>`_

   


.. conda:package:: r-velocyto.r

   |downloads_r-velocyto.r| |docker_r-velocyto.r|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6-9</code>,  <code>0.6-8</code>,  <code>0.6-7</code>,  <code>0.6-6</code>,  <code>0.6-5</code>,  <code>0.6-4</code>,  <code>0.6-3</code>,  <code>0.6-2</code>,  <code>0.6-1</code>,  </span></summary>
      

      ``0.6-9``,  ``0.6-8``,  ``0.6-7``,  ``0.6-6``,  ``0.6-5``,  ``0.6-4``,  ``0.6-3``,  ``0.6-2``,  ``0.6-1``,  ``0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-pcamethods: ``>=1.98.0,<1.99.0a0``
   :depends on boost-cpp: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-abind: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cluster: 
   :depends on r-hdf5r: 
   :depends on r-igraph: 
   :depends on r-mass: 
   :depends on r-matrix: 
   :depends on r-mgcv: 
   :depends on r-rcpp: ``>=0.12.13``
   :depends on r-rcpparmadillo: 

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

    pixi global install r-velocyto.r

to add into an existing workspace instead, run::

    pixi add r-velocyto.r

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-velocyto.r

Alternatively, to install into a new environment, run::

    conda create -n envname r-velocyto.r

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-velocyto.r:<tag>

(see `r-velocyto.r/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-velocyto.r| image:: https://img.shields.io/conda/dn/bioconda/r-velocyto.r.svg?style=flat
   :target: https://anaconda.org/bioconda/r-velocyto.r
   :alt:   (downloads)
.. |docker_r-velocyto.r| image:: https://quay.io/repository/biocontainers/r-velocyto.r/status
   :target: https://quay.io/repository/biocontainers/r-velocyto.r
.. _`r-velocyto.r/tags`: https://quay.io/repository/biocontainers/r-velocyto.r?tab=tags


.. raw:: html

    <script>
        var package = "r-velocyto.r";
        var versions = ["0.6","0.6","0.6","0.6","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-velocyto.r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-velocyto.r/README.html