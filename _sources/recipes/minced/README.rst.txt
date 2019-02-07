.. title:: Package Recipe 'minced'
.. highlight: bash


minced
======

.. conda:recipe:: minced
   :replaces_section_title:

   MinCED \- Mining CRISPRs in Environmental Datasets

   :homepage: https://github.com/ctSkennerton/minced
   :license: GPL-3.0
   :recipe: /`minced <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minced>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minced/meta.yaml>`_

   


.. conda:package:: minced

   |downloads_minced| |docker_minced|

   :versions: 0.3.2, 0.3.0, 0.2.0

   :depends: :conda:package:`openjdk`  

   :required~by: |required_by_minced|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install minced

   and update with::

      conda update minced

   or use the docker container::

      docker pull quay.io/repository/biocontainers/minced


.. |required_by_minced| conda:required_by:: minced
.. |downloads_minced| image:: https://img.shields.io/conda/dn/bioconda/minced.svg?style=flat
   :alt:   (downloads)
.. |docker_minced| image:: https://quay.io/repository/biocontainers/minced/status
   :target: https://quay.io/repository/biocontainers/minced







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minced/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minced/README.html

