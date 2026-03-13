:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-m6aboost'
.. highlight: bash

bioconductor-m6aboost
=====================

.. conda:recipe:: bioconductor-m6aboost
   :replaces_section_title:
   :noindex:

   m6Aboost

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/m6Aboost.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-m6aboost <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m6aboost>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m6aboost/meta.yaml>`_

   This package can help user to run the m6Aboost model on their own miCLIP2 data. The package includes functions to assign the read counts and get the features to run the m6Aboost model. The miCLIP2 data should be stored in a GRanges object. More details can be found in the vignette.


.. conda:package:: bioconductor-m6aboost

   |downloads_bioconductor-m6aboost| |docker_bioconductor-m6aboost|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-adabag: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 

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

    pixi global install bioconductor-m6aboost

to add into an existing workspace instead, run::

    pixi add bioconductor-m6aboost

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-m6aboost

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-m6aboost

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-m6aboost:<tag>

(see `bioconductor-m6aboost/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-m6aboost| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-m6aboost.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-m6aboost
   :alt:   (downloads)
.. |docker_bioconductor-m6aboost| image:: https://quay.io/repository/biocontainers/bioconductor-m6aboost/status
   :target: https://quay.io/repository/biocontainers/bioconductor-m6aboost
.. _`bioconductor-m6aboost/tags`: https://quay.io/repository/biocontainers/bioconductor-m6aboost?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-m6aboost";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-m6aboost/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-m6aboost/README.html