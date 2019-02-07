.. title:: Package Recipe 'plascope'
.. highlight: bash


plascope
========

.. conda:recipe:: plascope
   :replaces_section_title:

   PlaScope is a targeted approach to assess the plasmidome of bacteria.

   :homepage: https://github.com/GuilhemRoyer/PlaScope
   :license: GPL / GPL (>=3)
   :recipe: /`plascope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plascope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plascope/meta.yaml>`_

   


.. conda:package:: plascope

   |downloads_plascope| |docker_plascope|

   :versions: 1.3

   :depends: :conda:package:`centrifuge` 1.0.3 :conda:package:`spades` >=3.10.1 

   :required~by: |required_by_plascope|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plascope

   and update with::

      conda update plascope

   or use the docker container::

      docker pull quay.io/repository/biocontainers/plascope


.. |required_by_plascope| conda:required_by:: plascope
.. |downloads_plascope| image:: https://img.shields.io/conda/dn/bioconda/plascope.svg?style=flat
   :alt:   (downloads)
.. |docker_plascope| image:: https://quay.io/repository/biocontainers/plascope/status
   :target: https://quay.io/repository/biocontainers/plascope







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plascope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plascope/README.html

