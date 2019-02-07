.. title:: Package Recipe 'python-consensuscore2'
.. highlight: bash


python-consensuscore2
=====================

.. conda:recipe:: python-consensuscore2
   :replaces_section_title:

   PacBio Arrow Consensus library for Sequel data

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`python-consensuscore2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-consensuscore2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-consensuscore2/meta.yaml>`_

   


.. conda:package:: python-consensuscore2

   |downloads_python-consensuscore2| |docker_python-consensuscore2|

   :versions: 3.1.0

   :depends: :conda:package:`numpy` >=1.7.1 :conda:package:`python` >=2.7,<2.8.0a0 

   :required~by: |required_by_python-consensuscore2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-consensuscore2

   and update with::

      conda update python-consensuscore2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/python-consensuscore2


.. |required_by_python-consensuscore2| conda:required_by:: python-consensuscore2
.. |downloads_python-consensuscore2| image:: https://img.shields.io/conda/dn/bioconda/python-consensuscore2.svg?style=flat
   :alt:   (downloads)
.. |docker_python-consensuscore2| image:: https://quay.io/repository/biocontainers/python-consensuscore2/status
   :target: https://quay.io/repository/biocontainers/python-consensuscore2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-consensuscore2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-consensuscore2/README.html

