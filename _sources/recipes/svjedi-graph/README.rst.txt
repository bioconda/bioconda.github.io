:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svjedi-graph'
.. highlight: bash

svjedi-graph
============

.. conda:recipe:: svjedi-graph
   :replaces_section_title:
   :noindex:

   SVJedi\-graph is a structural variation \(SV\) genotyper for long read data using a variation graph to represent SVs.

   :homepage: https://github.com/SandraLouise/SVJedi-graph
   :license: AGPL-3.0-or-later
   :recipe: /`svjedi-graph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svjedi-graph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svjedi-graph/meta.yaml>`_

   


.. conda:package:: svjedi-graph

   |downloads_svjedi-graph| |docker_svjedi-graph|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends on minigraph: 
   :depends on numpy: 
   :depends on python: ``>=3.8.13``

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

    pixi global install svjedi-graph

to add into an existing workspace instead, run::

    pixi add svjedi-graph

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install svjedi-graph

Alternatively, to install into a new environment, run::

    conda create -n envname svjedi-graph

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/svjedi-graph:<tag>

(see `svjedi-graph/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_svjedi-graph| image:: https://img.shields.io/conda/dn/bioconda/svjedi-graph.svg?style=flat
   :target: https://anaconda.org/bioconda/svjedi-graph
   :alt:   (downloads)
.. |docker_svjedi-graph| image:: https://quay.io/repository/biocontainers/svjedi-graph/status
   :target: https://quay.io/repository/biocontainers/svjedi-graph
.. _`svjedi-graph/tags`: https://quay.io/repository/biocontainers/svjedi-graph?tab=tags


.. raw:: html

    <script>
        var package = "svjedi-graph";
        var versions = ["1.2.1","1.2.0","1.1.1","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svjedi-graph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svjedi-graph/README.html