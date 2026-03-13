:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dcats'
.. highlight: bash

bioconductor-dcats
==================

.. conda:recipe:: bioconductor-dcats
   :replaces_section_title:
   :noindex:

   Differential Composition Analysis Transformed by a Similarity matrix

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DCATS.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-dcats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dcats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dcats/meta.yaml>`_

   Methods to detect the differential composition abundances between conditions in singel\-cell RNA\-seq experiments\, with or without replicates. It aims to correct bias introduced by missclaisification and enable controlling of confounding covariates. To avoid the influence of proportion change from big cell types\, DCATS can use either total cell number or specific reference group as normalization term.


.. conda:package:: bioconductor-dcats

   |downloads_bioconductor-dcats| |docker_bioconductor-dcats|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on r-aod: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-e1071: 
   :depends on r-matrixstats: 
   :depends on r-mcmcpack: 
   :depends on r-robustbase: 

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

    pixi global install bioconductor-dcats

to add into an existing workspace instead, run::

    pixi add bioconductor-dcats

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dcats

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dcats

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dcats:<tag>

(see `bioconductor-dcats/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dcats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dcats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dcats
   :alt:   (downloads)
.. |docker_bioconductor-dcats| image:: https://quay.io/repository/biocontainers/bioconductor-dcats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dcats
.. _`bioconductor-dcats/tags`: https://quay.io/repository/biocontainers/bioconductor-dcats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dcats";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dcats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dcats/README.html