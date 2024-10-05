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

         <details><summary><span class="truncated-version-list"><code>0.3.11-0</code>,  <code>0.3.10-0</code>,  <code>0.3.9-0</code>,  <code>0.3.8-0</code>,  <code>0.3.4-0</code>,  <code>0.3.3-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.0-0</code>,  </span></summary>
      

      ``0.3.11-0``,  ``0.3.10-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.2-0``,  ``0.1.0-0``,  ``0.0.2b3-0``

      
      .. raw:: html

         </details>
      

   
   :depends aenum: 
   :depends biopython: 
   :depends cassandra-driver: 
   :depends gremlinpython: 
   :depends importlib_metadata: 
   :depends isodate: 
   :depends mysql-connector-python: 
   :depends networkx: 
   :depends prettytable: 
   :depends python: ``>=3.6``
   :depends python-igraph: 
   :depends redis-py: 
   :depends redisgraph-py: 
   :depends texttable: 
   :depends tqdm: 
   :depends wcwidth: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install protgraph

   and update with::

      mamba update protgraph

  To create a new environment, run::

      mamba create --name myenvname protgraph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/protgraph:<tag>

   (see `protgraph/tags`_ for valid values for ``<tag>``)


.. |downloads_protgraph| image:: https://img.shields.io/conda/dn/bioconda/protgraph.svg?style=flat
   :target: https://anaconda.org/bioconda/protgraph
   :alt:   (downloads)
.. |docker_protgraph| image:: https://quay.io/repository/biocontainers/protgraph/status
   :target: https://quay.io/repository/biocontainers/protgraph
.. _`protgraph/tags`: https://quay.io/repository/biocontainers/protgraph?tab=tags


.. raw:: html

    <script>
        var package = "protgraph";
        var versions = ["0.3.11","0.3.10","0.3.9","0.3.8","0.3.4"];
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