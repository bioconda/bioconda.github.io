:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe '2pg_cartesian'
.. highlight: bash

2pg_cartesian
=============

.. conda:recipe:: 2pg_cartesian
   :replaces_section_title:
   :noindex:

   2pg cartesian is a framework of optimization algorithms for protein structure prediction.

   :homepage: https://github.com/rodrigofaccioli/2pg_cartesian
   :license: Apache License, Version 2.0
   :recipe: /`2pg_cartesian <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/2pg_cartesian>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/2pg_cartesian/meta.yaml>`_

   


.. conda:package:: 2pg_cartesian

   |downloads_2pg_cartesian| |docker_2pg_cartesian|

   :versions:
      
      

      ``1.0.1-8``,  ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends on gromacs: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install 2pg_cartesian

to add into an existing workspace instead, run::

    pixi add 2pg_cartesian

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install 2pg_cartesian

Alternatively, to install into a new environment, run::

    conda create -n envname 2pg_cartesian

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/2pg_cartesian:<tag>

(see `2pg_cartesian/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_2pg_cartesian| image:: https://img.shields.io/conda/dn/bioconda/2pg_cartesian.svg?style=flat
   :target: https://anaconda.org/bioconda/2pg_cartesian
   :alt:   (downloads)
.. |docker_2pg_cartesian| image:: https://quay.io/repository/biocontainers/2pg_cartesian/status
   :target: https://quay.io/repository/biocontainers/2pg_cartesian
.. _`2pg_cartesian/tags`: https://quay.io/repository/biocontainers/2pg_cartesian?tab=tags


.. raw:: html

    <script>
        var package = "2pg_cartesian";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/2pg_cartesian/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/2pg_cartesian/README.html