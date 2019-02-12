.. title:: Package Recipe 'swarm'
.. highlight: bash


swarm
=====

.. conda:recipe:: swarm
   :replaces_section_title:

   A robust and fast clustering method for amplicon\-based studies.

   :homepage: https://github.com/torognes/swarm
   :license: Affero GPL
   :recipe: /`swarm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swarm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swarm/meta.yaml>`_
   :links: biotools: :biotools:`swarm`, doi: :doi:`10.7717/peerj.593`

   


.. conda:package:: swarm

   |downloads_swarm| |docker_swarm|

   :versions: 2.2.2, 2.1.13, 2.1.10, 2.1.5, 1.2.19

   :depends: :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`python`  :conda:package:`python-igraph`  

   :required~by: |required_by_swarm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install swarm

   and update with::

      conda update swarm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/swarm


.. |required_by_swarm| conda:required_by:: swarm
.. |downloads_swarm| image:: https://img.shields.io/conda/dn/bioconda/swarm.svg?style=flat
   :alt:   (downloads)
.. |docker_swarm| image:: https://quay.io/repository/biocontainers/swarm/status
   :target: https://quay.io/repository/biocontainers/swarm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/swarm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/swarm/README.html

