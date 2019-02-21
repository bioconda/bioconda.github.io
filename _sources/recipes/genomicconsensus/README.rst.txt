:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomicconsensus'
.. highlight: bash

genomicconsensus
================

.. conda:recipe:: genomicconsensus
   :replaces_section_title:

   PacBio genomic consensus and variant caller for RSII and Sequel

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`genomicconsensus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomicconsensus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomicconsensus/meta.yaml>`_

   


.. conda:package:: genomicconsensus

   |downloads_genomicconsensus| |docker_genomicconsensus|

   :versions: 2.3.2-3, 2.3.2-2, 2.3.2-1, 2.3.2-0, 2.3.1-0
   
   :depends numpy: >=1.15
   
   :depends pbcommand: >=1.1.1
   
   :depends pbcore: >=1.6.5
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends python-consensuscore: >=1.1.1
   
   :depends python-consensuscore2: >=3.1.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genomicconsensus

   and update with::

      conda update genomicconsensus

   or use the docker container::

      docker pull quay.io/biocontainers/genomicconsensus:<tag>

   (see `genomicconsensus/tags`_ for valid values for ``<tag>``)


.. |downloads_genomicconsensus| image:: https://img.shields.io/conda/dn/bioconda/genomicconsensus.svg?style=flat
   :alt:   (downloads)
.. |docker_genomicconsensus| image:: https://quay.io/repository/biocontainers/genomicconsensus/status
   :target: https://quay.io/repository/biocontainers/genomicconsensus
.. _`genomicconsensus/tags`: https://quay.io/repository/biocontainers/genomicconsensus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomicconsensus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomicconsensus/README.html