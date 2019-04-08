:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastp'
.. highlight: bash

fastp
=====

.. conda:recipe:: fastp
   :replaces_section_title:

   A FASTQ preprocessor with full features \(QC\/adapters\/trimming\/filtering\/splitting...\)

   :homepage: https://github.com/OpenGene/fastp
   :license: MIT
   :recipe: /`fastp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastp/meta.yaml>`_

   


.. conda:package:: fastp

   |downloads_fastp| |docker_fastp|

   :versions: 0.19.7-0, 0.19.6-0, 0.19.5-0, 0.19.4-0, 0.19.3-0, 0.18.0-0, 0.17.1-0, 0.17.0-0, 0.14.1-0, 0.13.1-0, 0.12.5-0, 0.12.4-0, 0.12.3-0, 0.12.2-1, 0.12.2-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastp

   and update with::

      conda update fastp

   or use the docker container::

      docker pull quay.io/biocontainers/fastp:<tag>

   (see `fastp/tags`_ for valid values for ``<tag>``)


.. |downloads_fastp| image:: https://img.shields.io/conda/dn/bioconda/fastp.svg?style=flat
   :alt:   (downloads)
.. |docker_fastp| image:: https://quay.io/repository/biocontainers/fastp/status
   :target: https://quay.io/repository/biocontainers/fastp
.. _`fastp/tags`: https://quay.io/repository/biocontainers/fastp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastp/README.html