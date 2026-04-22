:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crumblr'
.. highlight: bash

bioconductor-crumblr
====================

.. conda:recipe:: bioconductor-crumblr
   :replaces_section_title:
   :noindex:

   Count ratio uncertainty modeling base linear regression

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/crumblr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-crumblr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crumblr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crumblr/meta.yaml>`_

   Crumblr enables analysis of count ratio data using precision weighted linear \(mixed\) models.  It uses an asymptotic normal approximation of the variance following the centered log ration transform \(CLR\) that is widely used in compositional data analysis.  Crumblr provides a fast\, flexible alternative to GLMs and GLMM\'s while retaining high power and controlling the false positive rate.


.. conda:package:: bioconductor-crumblr

   |downloads_bioconductor-crumblr| |docker_bioconductor-crumblr|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-ggtree: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-variancepartition: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-mass: 
   :depends on r-rdpack: 
   :depends on r-rfast: 
   :depends on r-tidytree: 
   :depends on r-viridis: 

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

    pixi global install bioconductor-crumblr

to add into an existing workspace instead, run::

    pixi add bioconductor-crumblr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-crumblr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-crumblr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-crumblr:<tag>

(see `bioconductor-crumblr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-crumblr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crumblr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crumblr
   :alt:   (downloads)
.. |docker_bioconductor-crumblr| image:: https://quay.io/repository/biocontainers/bioconductor-crumblr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crumblr
.. _`bioconductor-crumblr/tags`: https://quay.io/repository/biocontainers/bioconductor-crumblr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crumblr";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crumblr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crumblr/README.html