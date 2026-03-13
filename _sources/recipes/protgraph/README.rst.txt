:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'protgraph'
.. highlight: bash

protgraph
=========

.. conda:recipe:: protgraph
   :replaces_section_title:
   :noindex:

   ProtGraph\, a graph generator for proteins.

   :homepage: https://github.com/mpc-bioinformatics/ProtGraph
   :license: BSD / BSD-3-Clause
   :recipe: /`protgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protgraph/meta.yaml>`_

   


.. conda:package:: protgraph

   |downloads_protgraph| |docker_protgraph|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.12-0</code>,  <code>0.3.11-0</code>,  <code>0.3.10-0</code>,  <code>0.3.9-0</code>,  <code>0.3.8-0</code>,  <code>0.3.4-0</code>,  <code>0.3.3-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  </span></summary>
      

      ``0.3.12-0``,  ``0.3.11-0``,  ``0.3.10-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.2-0``,  ``0.1.0-0``,  ``0.0.2b3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on aenum: 
   :depends on biopython: 
   :depends on cassandra-driver: 
   :depends on gremlinpython: 
   :depends on importlib_metadata: 
   :depends on isodate: 
   :depends on mysql-connector-python: 
   :depends on networkx: 
   :depends on prettytable: 
   :depends on python: ``>=3.6``
   :depends on python-igraph: 
   :depends on redis-py: 
   :depends on redisgraph-py: 
   :depends on texttable: 
   :depends on tqdm: 
   :depends on wcwidth: 

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

    pixi global install protgraph

to add into an existing workspace instead, run::

    pixi add protgraph

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install protgraph

Alternatively, to install into a new environment, run::

    conda create -n envname protgraph

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/protgraph:<tag>

(see `protgraph/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_protgraph| image:: https://img.shields.io/conda/dn/bioconda/protgraph.svg?style=flat
   :target: https://anaconda.org/bioconda/protgraph
   :alt:   (downloads)
.. |docker_protgraph| image:: https://quay.io/repository/biocontainers/protgraph/status
   :target: https://quay.io/repository/biocontainers/protgraph
.. _`protgraph/tags`: https://quay.io/repository/biocontainers/protgraph?tab=tags


.. raw:: html

    <script>
        var package = "protgraph";
        var versions = ["0.3.12","0.3.11","0.3.10","0.3.9","0.3.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/protgraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/protgraph/README.html