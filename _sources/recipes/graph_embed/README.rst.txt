:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graph_embed'
.. highlight: bash

graph_embed
===========

.. conda:recipe:: graph_embed
   :replaces_section_title:
   :noindex:

   Compute a 2D embedding of a data matrix given supervised class information.

   :homepage: https://github.com/fabriziocosta/GraphEmbed
   :license: MIT / MIT
   :recipe: /`graph_embed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graph_embed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graph_embed/meta.yaml>`_

   


.. conda:package:: graph_embed

   |downloads_graph_embed| |docker_graph_embed|

   :versions:
      
      

      ``2.4-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on docopt: 
   :depends on matplotlib: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on pygraphviz: 
   :depends on python: 
   :depends on scikit-learn: ``0.22``
   :depends on toolz: 

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

    pixi global install graph_embed

to add into an existing workspace instead, run::

    pixi add graph_embed

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install graph_embed

Alternatively, to install into a new environment, run::

    conda create -n envname graph_embed

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/graph_embed:<tag>

(see `graph_embed/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_graph_embed| image:: https://img.shields.io/conda/dn/bioconda/graph_embed.svg?style=flat
   :target: https://anaconda.org/bioconda/graph_embed
   :alt:   (downloads)
.. |docker_graph_embed| image:: https://quay.io/repository/biocontainers/graph_embed/status
   :target: https://quay.io/repository/biocontainers/graph_embed
.. _`graph_embed/tags`: https://quay.io/repository/biocontainers/graph_embed?tab=tags


.. raw:: html

    <script>
        var package = "graph_embed";
        var versions = ["2.4","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graph_embed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graph_embed/README.html