:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rlassocox'
.. highlight: bash

bioconductor-rlassocox
======================

.. conda:recipe:: bioconductor-rlassocox
   :replaces_section_title:
   :noindex:

   A reweighted Lasso\-Cox by integrating gene interaction information

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RLassoCox.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rlassocox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rlassocox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rlassocox/meta.yaml>`_

   RLassoCox is a package that implements the RLasso\-Cox model proposed by Wei Liu. The RLasso\-Cox model integrates gene interaction information into the Lasso\-Cox model for accurate survival prediction and survival biomarker discovery. It is based on the hypothesis that topologically important genes in the gene interaction network tend to have stable expression changes. The RLasso\-Cox model uses random walk to evaluate the topological weight of genes\, and then highlights topologically important genes to improve the generalization ability of the Lasso\-Cox model. The RLasso\-Cox model has the advantage of identifying small gene sets with high prognostic performance on independent datasets\, which may play an important role in identifying robust survival biomarkers for various cancer types.


.. conda:package:: bioconductor-rlassocox

   |downloads_bioconductor-rlassocox| |docker_bioconductor-rlassocox|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-glmnet: 
   :depends on r-igraph: 
   :depends on r-matrix: 
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

    pixi global install bioconductor-rlassocox

to add into an existing workspace instead, run::

    pixi add bioconductor-rlassocox

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rlassocox

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rlassocox

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rlassocox:<tag>

(see `bioconductor-rlassocox/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rlassocox| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rlassocox.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rlassocox
   :alt:   (downloads)
.. |docker_bioconductor-rlassocox| image:: https://quay.io/repository/biocontainers/bioconductor-rlassocox/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rlassocox
.. _`bioconductor-rlassocox/tags`: https://quay.io/repository/biocontainers/bioconductor-rlassocox?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rlassocox";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rlassocox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rlassocox/README.html