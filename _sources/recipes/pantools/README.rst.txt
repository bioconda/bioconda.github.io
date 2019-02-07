.. title:: Package Recipe 'pantools'
.. highlight: bash


pantools
========

.. conda:recipe:: pantools
   :replaces_section_title:

   PanTools is a disk\-based java application for computational pan\-genomics

   :homepage: https://github.com/Sheikhizadeh/pantools
   :license: Unknown
   :recipe: /`pantools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pantools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pantools/meta.yaml>`_

   


.. conda:package:: pantools

   |downloads_pantools| |docker_pantools|

   :versions: 1.0

   :depends: :conda:package:`java-jdk` >=6 :conda:package:`kmc`  :conda:package:`python` 2.7* 

   :required~by: |required_by_pantools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pantools

   and update with::

      conda update pantools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pantools


.. |required_by_pantools| conda:required_by:: pantools
.. |downloads_pantools| image:: https://img.shields.io/conda/dn/bioconda/pantools.svg?style=flat
   :alt:   (downloads)
.. |docker_pantools| image:: https://quay.io/repository/biocontainers/pantools/status
   :target: https://quay.io/repository/biocontainers/pantools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pantools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pantools/README.html

