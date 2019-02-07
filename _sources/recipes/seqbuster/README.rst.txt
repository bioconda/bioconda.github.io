.. title:: Package Recipe 'seqbuster'
.. highlight: bash


seqbuster
=========

.. conda:recipe:: seqbuster
   :replaces_section_title:

   miRNA and isomiR annotation

   :homepage: https://github.com/lpantano/seqbuster
   :license: MIT
   :recipe: /`seqbuster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqbuster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqbuster/meta.yaml>`_
   :links: biotools: :biotools:`seqbuster`

   


.. conda:package:: seqbuster

   |downloads_seqbuster| |docker_seqbuster|

   :versions: 3.2, 3.1, 3.1a, 3.0, 2.3

   :depends: :conda:package:`openjdk` >=8 

   :required~by: |required_by_seqbuster|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqbuster

   and update with::

      conda update seqbuster

   or use the docker container::

      docker pull quay.io/repository/biocontainers/seqbuster


.. |required_by_seqbuster| conda:required_by:: seqbuster
.. |downloads_seqbuster| image:: https://img.shields.io/conda/dn/bioconda/seqbuster.svg?style=flat
   :alt:   (downloads)
.. |docker_seqbuster| image:: https://quay.io/repository/biocontainers/seqbuster/status
   :target: https://quay.io/repository/biocontainers/seqbuster







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqbuster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqbuster/README.html

