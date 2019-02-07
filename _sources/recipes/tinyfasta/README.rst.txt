.. title:: Package Recipe 'tinyfasta'
.. highlight: bash


tinyfasta
=========

.. conda:recipe:: tinyfasta
   :replaces_section_title:

   Tiny Python package\, with no external dependencies\, for parsing FASTA sequence files.

   :homepage: https://github.com/tjelvar-olsson/tinyfasta
   :license: MIT
   :recipe: /`tinyfasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tinyfasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tinyfasta/meta.yaml>`_

   


.. conda:package:: tinyfasta

   |downloads_tinyfasta| |docker_tinyfasta|

   :versions: 0.1.0

   :depends: :conda:package:`python`  

   :required~by: |required_by_tinyfasta|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tinyfasta

   and update with::

      conda update tinyfasta

   or use the docker container::

      docker pull quay.io/repository/biocontainers/tinyfasta


.. |required_by_tinyfasta| conda:required_by:: tinyfasta
.. |downloads_tinyfasta| image:: https://img.shields.io/conda/dn/bioconda/tinyfasta.svg?style=flat
   :alt:   (downloads)
.. |docker_tinyfasta| image:: https://quay.io/repository/biocontainers/tinyfasta/status
   :target: https://quay.io/repository/biocontainers/tinyfasta







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tinyfasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tinyfasta/README.html

