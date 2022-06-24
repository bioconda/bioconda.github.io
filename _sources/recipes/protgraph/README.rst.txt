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
   :license: BSD / BSD
   :recipe: /`protgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protgraph/meta.yaml>`_

   


.. conda:package:: protgraph

   |downloads_protgraph| |docker_protgraph|

   :versions:
      
      

      ``0.3.3-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.2-0``,  ``0.1.0-0``,  ``0.0.2b3-0``

      

   
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

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install protgraph

   and update with::

      conda update protgraph

   or use the docker container::

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
        var versions = ["0.3.3","0.3.1","0.3.0","0.2.0","0.1.2"];
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