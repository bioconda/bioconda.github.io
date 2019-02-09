.. title:: Package Recipe 'smhasher'
.. highlight: bash


smhasher
========

.. conda:recipe:: smhasher
   :replaces_section_title:

   Python extension for smhasher hash functions

   :homepage: http://github.com/phensley/python-smhasher
   :license: MIT / MIT License
   :recipe: /`smhasher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smhasher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smhasher/meta.yaml>`_

   


.. conda:package:: smhasher

   |downloads_smhasher| |docker_smhasher|

   :versions: 0.150.1

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_smhasher|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install smhasher

   and update with::

      conda update smhasher

   or use the docker container::

      docker pull quay.io/repository/biocontainers/smhasher


.. |required_by_smhasher| conda:required_by:: smhasher
.. |downloads_smhasher| image:: https://img.shields.io/conda/dn/bioconda/smhasher.svg?style=flat
   :alt:   (downloads)
.. |docker_smhasher| image:: https://quay.io/repository/biocontainers/smhasher/status
   :target: https://quay.io/repository/biocontainers/smhasher







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smhasher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smhasher/README.html

