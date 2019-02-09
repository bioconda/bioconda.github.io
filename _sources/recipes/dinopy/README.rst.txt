.. title:: Package Recipe 'dinopy'
.. highlight: bash


dinopy
======

.. conda:recipe:: dinopy
   :replaces_section_title:

   DNA input and output library for Python and Cython. Includes reader and writer for FASTA and FASTQ files\, support for samtools faidx files\, and generators for solid and gapped q\-grams \(k\-mers\).

   :homepage: https://bitbucket.org/HenningTimm/dinopy
   :license: MIT License
   :recipe: /`dinopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dinopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dinopy/meta.yaml>`_

   


.. conda:package:: dinopy

   |downloads_dinopy| |docker_dinopy|

   :versions: 2.0.1, 2.0.0, 1.2.1, 1.2.0

   :depends: :conda:package:`numpy` >=1.9 :conda:package:`python` >=3.5,<3.6.0a0 

   :required~by: |required_by_dinopy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dinopy

   and update with::

      conda update dinopy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dinopy


.. |required_by_dinopy| conda:required_by:: dinopy
.. |downloads_dinopy| image:: https://img.shields.io/conda/dn/bioconda/dinopy.svg?style=flat
   :alt:   (downloads)
.. |docker_dinopy| image:: https://quay.io/repository/biocontainers/dinopy/status
   :target: https://quay.io/repository/biocontainers/dinopy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dinopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dinopy/README.html

