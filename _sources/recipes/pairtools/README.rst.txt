.. title:: Package Recipe 'pairtools'
.. highlight: bash


pairtools
=========

.. conda:recipe:: pairtools
   :replaces_section_title:

   CLI tools to process mapped Hi\-C data

   :homepage: https://github.com/mirnylab/pairtools
   :documentation: http://pairtools.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`pairtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pairtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pairtools/meta.yaml>`_

   


.. conda:package:: pairtools

   |downloads_pairtools| |docker_pairtools|

   :versions: 0.2.2, 0.2.1, 0.2.0, 0.1.1

   :depends: :conda:package:`click`  :conda:package:`coreutils`  :conda:package:`lz4-c`  :conda:package:`numpy` >=1.9.3,<2.0a0 :conda:package:`pbgzip`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`samtools`  :conda:package:`tabix`  

   :required~by: |required_by_pairtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pairtools

   and update with::

      conda update pairtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pairtools


.. |required_by_pairtools| conda:required_by:: pairtools
.. |downloads_pairtools| image:: https://img.shields.io/conda/dn/bioconda/pairtools.svg?style=flat
   :alt:   (downloads)
.. |docker_pairtools| image:: https://quay.io/repository/biocontainers/pairtools/status
   :target: https://quay.io/repository/biocontainers/pairtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pairtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pairtools/README.html

