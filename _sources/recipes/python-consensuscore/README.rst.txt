.. title:: Package Recipe 'python-consensuscore'
.. highlight: bash


python-consensuscore
====================

.. conda:recipe:: python-consensuscore
   :replaces_section_title:

   PacBio Quiver Consensus library for RSII data

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`python-consensuscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-consensuscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-consensuscore/meta.yaml>`_

   


.. conda:package:: python-consensuscore

   |downloads_python-consensuscore| |docker_python-consensuscore|

   :versions: 1.1.1, 1.0.2, 1.0.0

   :depends: :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`numpy` >=1.7.1 :conda:package:`python` >=2.7,<2.8.0a0 

   :required~by: |required_by_python-consensuscore|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-consensuscore

   and update with::

      conda update python-consensuscore

   or use the docker container::

      docker pull quay.io/repository/biocontainers/python-consensuscore


.. |required_by_python-consensuscore| conda:required_by:: python-consensuscore
.. |downloads_python-consensuscore| image:: https://img.shields.io/conda/dn/bioconda/python-consensuscore.svg?style=flat
   :alt:   (downloads)
.. |docker_python-consensuscore| image:: https://quay.io/repository/biocontainers/python-consensuscore/status
   :target: https://quay.io/repository/biocontainers/python-consensuscore







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-consensuscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-consensuscore/README.html

