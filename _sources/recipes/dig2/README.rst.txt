.. title:: Package Recipe 'dig2'
.. highlight: bash


dig2
====

.. conda:recipe:: dig2
   :replaces_section_title:

   dig2 is a simple but flexible in silico digester of protein sequences in the FASTA format. It allows for almost any enzyme to be simulated\, including MS\/MS enzymes to generate CID or ECD\/ETD fragments.

   :homepage: http://www.ms-utils.org/dig2/dig2.html
   :license: GPL3
   :recipe: /`dig2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dig2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dig2/meta.yaml>`_
   :links: biotools: :biotools:`dig2`

   


.. conda:package:: dig2

   |downloads_dig2| |docker_dig2|

   :versions: 1.0

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_dig2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dig2

   and update with::

      conda update dig2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dig2


.. |required_by_dig2| conda:required_by:: dig2
.. |downloads_dig2| image:: https://img.shields.io/conda/dn/bioconda/dig2.svg?style=flat
   :alt:   (downloads)
.. |docker_dig2| image:: https://quay.io/repository/biocontainers/dig2/status
   :target: https://quay.io/repository/biocontainers/dig2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dig2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dig2/README.html

