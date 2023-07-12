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
      
      

      ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends minigraph: 
   :depends numpy: 
   :depends python: ``>=3.8.13``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install svjedi-graph

   and update with::

      conda update svjedi-graph

   or use the docker container::

      docker pull quay.io/biocontainers/svjedi-graph:<tag>

   (see `svjedi-graph/tags`_ for valid values for ``<tag>``)


.. |downloads_svjedi-graph| image:: https://img.shields.io/conda/dn/bioconda/svjedi-graph.svg?style=flat
   :target: https://anaconda.org/bioconda/svjedi-graph
   :alt:   (downloads)
.. |docker_svjedi-graph| image:: https://quay.io/repository/biocontainers/svjedi-graph/status
   :target: https://quay.io/repository/biocontainers/svjedi-graph
.. _`svjedi-graph/tags`: https://quay.io/repository/biocontainers/svjedi-graph?tab=tags


.. raw:: html

    <script>
        var package = "svjedi-graph";
        var versions = ["1.2.0","1.1.1","1.1.0","1.0.0"];
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