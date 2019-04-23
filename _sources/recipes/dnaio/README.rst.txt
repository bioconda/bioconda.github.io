:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnaio'
.. highlight: bash

dnaio
=====

.. conda:recipe:: dnaio
   :replaces_section_title:

   Read FASTA and FASTQ files efficiently

   :homepage: https://github.com/marcelm/dnaio/
   :license: MIT License
   :recipe: /`dnaio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnaio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnaio/meta.yaml>`_

   


.. conda:package:: dnaio

   |downloads_dnaio| |docker_dnaio|

   :versions: 0.3-1, 0.3-0
   
   :depends python: >=3.6,<3.7.0a0
   :depends xopen: >=0.5.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dnaio

   and update with::

      conda update dnaio

   or use the docker container::

      docker pull quay.io/biocontainers/dnaio:<tag>

   (see `dnaio/tags`_ for valid values for ``<tag>``)


.. |downloads_dnaio| image:: https://img.shields.io/conda/dn/bioconda/dnaio.svg?style=flat
   :alt:   (downloads)
.. |docker_dnaio| image:: https://quay.io/repository/biocontainers/dnaio/status
   :target: https://quay.io/repository/biocontainers/dnaio
.. _`dnaio/tags`: https://quay.io/repository/biocontainers/dnaio?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnaio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnaio/README.html