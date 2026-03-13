:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iterativebmasurv'
.. highlight: bash

bioconductor-iterativebmasurv
=============================

.. conda:recipe:: bioconductor-iterativebmasurv
   :replaces_section_title:
   :noindex:

   The Iterative Bayesian Model Averaging \(BMA\) Algorithm For Survival Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/iterativeBMAsurv.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-iterativebmasurv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iterativebmasurv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iterativebmasurv/meta.yaml>`_
   :links: biotools: :biotools:`iterativebmasurv`, doi: :doi:`10.1186/1471-2105-10-72`

   The iterative Bayesian Model Averaging \(BMA\) algorithm for survival analysis is a variable selection method for applying survival analysis to microarray data.


.. conda:package:: bioconductor-iterativebmasurv

   |downloads_bioconductor-iterativebmasurv| |docker_bioconductor-iterativebmasurv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.68.0-0</code>,  <code>1.64.0-0</code>,  <code>1.60.0-1</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  </span></summary>
      

      ``1.68.0-0``,  ``1.64.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bma: 
   :depends on r-leaps: 
   :depends on r-survival: 

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

    pixi global install bioconductor-iterativebmasurv

to add into an existing workspace instead, run::

    pixi add bioconductor-iterativebmasurv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-iterativebmasurv

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-iterativebmasurv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-iterativebmasurv:<tag>

(see `bioconductor-iterativebmasurv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-iterativebmasurv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iterativebmasurv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iterativebmasurv
   :alt:   (downloads)
.. |docker_bioconductor-iterativebmasurv| image:: https://quay.io/repository/biocontainers/bioconductor-iterativebmasurv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iterativebmasurv
.. _`bioconductor-iterativebmasurv/tags`: https://quay.io/repository/biocontainers/bioconductor-iterativebmasurv?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iterativebmasurv";
        var versions = ["1.68.0","1.64.0","1.60.0","1.60.0","1.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iterativebmasurv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iterativebmasurv/README.html