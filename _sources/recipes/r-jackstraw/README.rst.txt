:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-jackstraw'
.. highlight: bash

r-jackstraw
===========

.. conda:recipe:: r-jackstraw
   :replaces_section_title:
   :noindex:

   Test for association between the observed data and their systematic patterns of variations. Systematic patterns may be captured by latent variables using principal component analysis \(PCA\)\, factor analysis \(FA\)\, and related methods. The jackstraw enables statistical testing for association between observed variables and latent variables\, as captured by PCs or other estimates. Similarly\, unsupervised clustering\, such as K\-means clustering\, partition around medoids \(PAM\)\, and others\, finds subpopulations among the observed variables. The jackstraw estimates statistical significance of cluster membership\, including unsupervised evaluation of cell identities in single cell RNA\-seq. P\-values and posterior probabilities allows one to rigorously evaluate the strength of cluster membership assignments.

   :homepage: https://CRAN.R-project.org/package=jackstraw
   :license: GPL2 / GPL-2.0-only
   :recipe: /`r-jackstraw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-jackstraw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-jackstraw/meta.yaml>`_

   


.. conda:package:: r-jackstraw

   |downloads_r-jackstraw| |docker_r-jackstraw|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.17-0</code>,  <code>1.3.9-1</code>,  <code>1.3.9-0</code>,  <code>1.3.8-1</code>,  <code>1.3.8-0</code>,  <code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.3-6</code>,  <code>1.3-5</code>,  </span></summary>
      

      ``1.3.17-0``,  ``1.3.9-1``,  ``1.3.9-0``,  ``1.3.8-1``,  ``1.3.8-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3-6``,  ``1.3-5``,  ``1.3-4``,  ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-qvalue: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-bedmatrix: 
   :depends on r-cluster: 
   :depends on r-clusterr: 
   :depends on r-corpcor: 
   :depends on r-genio: 
   :depends on r-irlba: 
   :depends on r-rsvd: 

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

    pixi global install r-jackstraw

to add into an existing workspace instead, run::

    pixi add r-jackstraw

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-jackstraw

Alternatively, to install into a new environment, run::

    conda create -n envname r-jackstraw

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-jackstraw:<tag>

(see `r-jackstraw/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-jackstraw| image:: https://img.shields.io/conda/dn/bioconda/r-jackstraw.svg?style=flat
   :target: https://anaconda.org/bioconda/r-jackstraw
   :alt:   (downloads)
.. |docker_r-jackstraw| image:: https://quay.io/repository/biocontainers/r-jackstraw/status
   :target: https://quay.io/repository/biocontainers/r-jackstraw
.. _`r-jackstraw/tags`: https://quay.io/repository/biocontainers/r-jackstraw?tab=tags


.. raw:: html

    <script>
        var package = "r-jackstraw";
        var versions = ["1.3.17","1.3.9","1.3.9","1.3.8","1.3.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-jackstraw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-jackstraw/README.html