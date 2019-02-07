.. title:: Package Recipe 'seqkit'
.. highlight: bash


seqkit
======

.. conda:recipe:: seqkit
   :replaces_section_title:

   Cross\-platform and ultrafast toolkit for FASTA\/Q file manipulation

   :homepage: https://github.com/shenwei356/seqkit
   :license: MIT
   :recipe: /`seqkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqkit/meta.yaml>`_

   


.. conda:package:: seqkit

   |downloads_seqkit| |docker_seqkit|

   :versions: 0.10.0, 0.9.3, 0.9.2, 0.9.1, 0.9.0, 0.8.1, 0.8.0, 0.7.2, 0.7.1, 0.7.0, 0.6.0, 0.5.5, 0.5.4, 0.5.3, 0.5.2, 0.5.1, 0.5.0, 0.4.5, 0.4.4, 0.4.3, 0.3.4.1

   :depends: 

   :required~by: |required_by_seqkit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqkit

   and update with::

      conda update seqkit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/seqkit


.. |required_by_seqkit| conda:required_by:: seqkit
.. |downloads_seqkit| image:: https://img.shields.io/conda/dn/bioconda/seqkit.svg?style=flat
   :alt:   (downloads)
.. |docker_seqkit| image:: https://quay.io/repository/biocontainers/seqkit/status
   :target: https://quay.io/repository/biocontainers/seqkit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqkit/README.html

