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

   :versions: 2.3.2, 2.3.1

   :depends: :conda:package:`numpy` >=1.7.1 :conda:package:`pbcommand` >=1.1.1 :conda:package:`pbcore` >=1.5.1 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`python-consensuscore` >=1.1.1 :conda:package:`python-consensuscore2` >=3.1.0 

   :required~by: |required_by_genomicconsensus|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genomicconsensus

   and update with::

      conda update genomicconsensus

   or use the docker container::

      docker pull quay.io/repository/biocontainers/genomicconsensus


.. |required_by_genomicconsensus| conda:required_by:: genomicconsensus
.. |downloads_genomicconsensus| image:: https://img.shields.io/conda/dn/bioconda/genomicconsensus.svg?style=flat
   :alt:   (downloads)
.. |docker_genomicconsensus| image:: https://quay.io/repository/biocontainers/genomicconsensus/status
   :target: https://quay.io/repository/biocontainers/genomicconsensus







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomicconsensus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomicconsensus/README.html

