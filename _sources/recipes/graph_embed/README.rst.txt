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

      

   
   :depends docopt: 
   :depends matplotlib: 
   :depends networkx: 
   :depends numpy: 
   :depends pygraphviz: 
   :depends python: 
   :depends scikit-learn: ``0.22``
   :depends toolz: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install graph_embed

   and update with::

      conda update graph_embed

   or use the docker container::

      docker pull quay.io/biocontainers/graph_embed:<tag>

   (see `graph_embed/tags`_ for valid values for ``<tag>``)


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