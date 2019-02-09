.. title:: Package Recipe 'nasm'
.. highlight: bash


nasm
====

.. conda:recipe:: nasm
   :replaces_section_title:

   NASM\, the Netwide Assembler.

   :homepage: http://www.nasm.us
   :license: Simplified BSD License
   :recipe: /`nasm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nasm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nasm/meta.yaml>`_

   


.. conda:package:: nasm

   |downloads_nasm| |docker_nasm|

   :versions: 2.11.08

   :depends: 

   :required~by: |required_by_nasm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nasm

   and update with::

      conda update nasm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nasm


.. |required_by_nasm| conda:required_by:: nasm
.. |downloads_nasm| image:: https://img.shields.io/conda/dn/bioconda/nasm.svg?style=flat
   :alt:   (downloads)
.. |docker_nasm| image:: https://quay.io/repository/biocontainers/nasm/status
   :target: https://quay.io/repository/biocontainers/nasm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nasm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nasm/README.html

