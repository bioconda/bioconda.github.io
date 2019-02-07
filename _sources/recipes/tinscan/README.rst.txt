.. title:: Package Recipe 'tinscan'
.. highlight: bash


tinscan
=======

.. conda:recipe:: tinscan
   :replaces_section_title:

   Find alignment signatures characteristic of transposon insertion sites.

   :homepage: https://github.com/Adamtaranto/TE-insertion-scanner
   :license: MIT / MIT License
   :recipe: /`tinscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tinscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tinscan/meta.yaml>`_

   


.. conda:package:: tinscan

   |downloads_tinscan| |docker_tinscan|

   :versions: 0.2.0

   :depends: :conda:package:`biopython` >=1.70 :conda:package:`python` 3.5* 

   :required~by: |required_by_tinscan|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tinscan

   and update with::

      conda update tinscan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/tinscan


.. |required_by_tinscan| conda:required_by:: tinscan
.. |downloads_tinscan| image:: https://img.shields.io/conda/dn/bioconda/tinscan.svg?style=flat
   :alt:   (downloads)
.. |docker_tinscan| image:: https://quay.io/repository/biocontainers/tinscan/status
   :target: https://quay.io/repository/biocontainers/tinscan







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tinscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tinscan/README.html

