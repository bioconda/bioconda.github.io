.. title:: Package Recipe 'graph_embed'
.. highlight: bash


graph_embed
===========

.. conda:recipe:: graph_embed
   :replaces_section_title:

   Compute a 2D embedding of a data matrix given supervised class information.

   :homepage: https://github.com/fabriziocosta/GraphEmbed
   :license: MIT
   :recipe: /`graph_embed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graph_embed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graph_embed/meta.yaml>`_

   


.. conda:package:: graph_embed

   |downloads_graph_embed| |docker_graph_embed|

   :versions: 1.0

   :depends: :conda:package:`docopt`  :conda:package:`matplotlib`  :conda:package:`networkx`  :conda:package:`numpy`  :conda:package:`python` >=2.7,<3 :conda:package:`scikit-learn`  

   :required~by: |required_by_graph_embed|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install graph_embed

   and update with::

      conda update graph_embed

   or use the docker container::

      docker pull quay.io/repository/biocontainers/graph_embed


.. |required_by_graph_embed| conda:required_by:: graph_embed
.. |downloads_graph_embed| image:: https://img.shields.io/conda/dn/bioconda/graph_embed.svg?style=flat
   :alt:   (downloads)
.. |docker_graph_embed| image:: https://quay.io/repository/biocontainers/graph_embed/status
   :target: https://quay.io/repository/biocontainers/graph_embed







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graph_embed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graph_embed/README.html

