.. title:: Package Recipe 'onto2nx'
.. highlight: bash


onto2nx
=======

.. conda:recipe:: onto2nx
   :replaces_section_title:

   A package for parsing ontologies into NetworkX graphs

   :homepage: https://github.com/cthoyt/onto2nx
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`onto2nx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/onto2nx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/onto2nx/meta.yaml>`_

   


.. conda:package:: onto2nx

   |downloads_onto2nx| |docker_onto2nx|

   :versions: 0.1.0

   :depends: :conda:package:`click`  :conda:package:`colorama`  :conda:package:`networkx`  :conda:package:`pyfiglet`  :conda:package:`pygments`  :conda:package:`python` 2.7* :conda:package:`rdflib`  :conda:package:`rdflib-jsonld`  :conda:package:`requests`  :conda:package:`sparqlwrapper`  

   :required~by: |required_by_onto2nx|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install onto2nx

   and update with::

      conda update onto2nx

   or use the docker container::

      docker pull quay.io/repository/biocontainers/onto2nx


.. |required_by_onto2nx| conda:required_by:: onto2nx
.. |downloads_onto2nx| image:: https://img.shields.io/conda/dn/bioconda/onto2nx.svg?style=flat
   :alt:   (downloads)
.. |docker_onto2nx| image:: https://quay.io/repository/biocontainers/onto2nx/status
   :target: https://quay.io/repository/biocontainers/onto2nx







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/onto2nx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/onto2nx/README.html

