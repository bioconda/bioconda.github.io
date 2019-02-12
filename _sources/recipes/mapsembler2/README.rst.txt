.. title:: Package Recipe 'mapsembler2'
.. highlight: bash


mapsembler2
===========

.. conda:recipe:: mapsembler2
   :replaces_section_title:

   Targeted assembly software

   :homepage: https://colibread.inria.fr/software/mapsembler2/
   :license: GNU Affero General Public License
   :recipe: /`mapsembler2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapsembler2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapsembler2/meta.yaml>`_

   


.. conda:package:: mapsembler2

   |downloads_mapsembler2| |docker_mapsembler2|

   :versions: 2.2.4

   :depends: :conda:package:`libgcc`  :conda:package:`zlib` 1.2.8* 

   :required~by: |required_by_mapsembler2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mapsembler2

   and update with::

      conda update mapsembler2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mapsembler2


.. |required_by_mapsembler2| conda:required_by:: mapsembler2
.. |downloads_mapsembler2| image:: https://img.shields.io/conda/dn/bioconda/mapsembler2.svg?style=flat
   :alt:   (downloads)
.. |docker_mapsembler2| image:: https://quay.io/repository/biocontainers/mapsembler2/status
   :target: https://quay.io/repository/biocontainers/mapsembler2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapsembler2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapsembler2/README.html

