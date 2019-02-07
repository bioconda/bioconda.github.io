.. title:: Package Recipe 'vkmz'
.. highlight: bash


vkmz
====

.. conda:recipe:: vkmz
   :replaces_section_title:

   metabolomics formula prediction and van Krevelen diagram generation

   :homepage: https://github.com/HegemanLab/vkmz
   :license: MIT / MIT License
   :recipe: /`vkmz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vkmz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vkmz/meta.yaml>`_

   


.. conda:package:: vkmz

   |downloads_vkmz| |docker_vkmz|

   :versions: 1.4dev2, v1.4dev1, v1.3.1

   :depends: :conda:package:`python` >=3.6 

   :required~by: |required_by_vkmz|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vkmz

   and update with::

      conda update vkmz

   or use the docker container::

      docker pull quay.io/repository/biocontainers/vkmz


.. |required_by_vkmz| conda:required_by:: vkmz
.. |downloads_vkmz| image:: https://img.shields.io/conda/dn/bioconda/vkmz.svg?style=flat
   :alt:   (downloads)
.. |docker_vkmz| image:: https://quay.io/repository/biocontainers/vkmz/status
   :target: https://quay.io/repository/biocontainers/vkmz







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vkmz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vkmz/README.html

