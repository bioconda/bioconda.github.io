:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-spring'
.. highlight: bash

r-spring
========

.. conda:recipe:: r-spring
   :replaces_section_title:
   :noindex:

   Semi\-Parametric Rank\-based approach for INference in Graphical model \(SPRING\)

   :homepage: https://github.com/GraceYoon/SPRING
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-spring <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-spring>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-spring/meta.yaml>`_

   SPRING is to estimate sparse microbial association networks using rank\-based correlation with sparse graphical modeling techniques.


.. conda:package:: r-spring

   |downloads_r-spring| |docker_r-spring|

   :versions:
      
      

      ``1.0.4-3``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``

      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-huge: 
   :depends on r-mixedcca: 
   :depends on r-mvtnorm: 
   :depends on r-pulsar: 
   :depends on r-rootsolve: 
   :depends on r-spieceasi: 

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

    pixi global install r-spring

to add into an existing workspace instead, run::

    pixi add r-spring

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-spring

Alternatively, to install into a new environment, run::

    conda create -n envname r-spring

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-spring:<tag>

(see `r-spring/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-spring| image:: https://img.shields.io/conda/dn/bioconda/r-spring.svg?style=flat
   :target: https://anaconda.org/bioconda/r-spring
   :alt:   (downloads)
.. |docker_r-spring| image:: https://quay.io/repository/biocontainers/r-spring/status
   :target: https://quay.io/repository/biocontainers/r-spring
.. _`r-spring/tags`: https://quay.io/repository/biocontainers/r-spring?tab=tags


.. raw:: html

    <script>
        var package = "r-spring";
        var versions = ["1.0.4","1.0.4","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-spring/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-spring/README.html