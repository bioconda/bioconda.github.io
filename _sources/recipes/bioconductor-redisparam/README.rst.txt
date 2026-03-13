:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-redisparam'
.. highlight: bash

bioconductor-redisparam
=======================

.. conda:recipe:: bioconductor-redisparam
   :replaces_section_title:
   :noindex:

   Provide a \'redis\' back\-end for BiocParallel

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RedisParam.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-redisparam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-redisparam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-redisparam/meta.yaml>`_

   This package provides a Redis\-based back\-end for BiocParallel\, enabling an alternative mechanism for distributed computation. The The \'manager\' distributes tasks to a \'worker\' pool through a central Redis server\, rather than directly to workers as with other BiocParallel implementations. This means that the worker pool can change dynamically during job evaluation. All features of BiocParallel are supported\, including reproducible random number streams\, logging to the manager\, and alternative \'load balancing\' task distributions.


.. conda:package:: bioconductor-redisparam

   |downloads_bioconductor-redisparam| |docker_bioconductor-redisparam|

   :versions:
      
      

      ``1.12.1-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-logger: 
   :depends on r-redux: 
   :depends on r-withr: 

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

    pixi global install bioconductor-redisparam

to add into an existing workspace instead, run::

    pixi add bioconductor-redisparam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-redisparam

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-redisparam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-redisparam:<tag>

(see `bioconductor-redisparam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-redisparam| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-redisparam.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-redisparam
   :alt:   (downloads)
.. |docker_bioconductor-redisparam| image:: https://quay.io/repository/biocontainers/bioconductor-redisparam/status
   :target: https://quay.io/repository/biocontainers/bioconductor-redisparam
.. _`bioconductor-redisparam/tags`: https://quay.io/repository/biocontainers/bioconductor-redisparam?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-redisparam";
        var versions = ["1.12.1","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-redisparam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-redisparam/README.html