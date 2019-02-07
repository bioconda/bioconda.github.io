.. title:: Package Recipe 'clever-toolkit'
.. highlight: bash


clever-toolkit
==============

.. conda:recipe:: clever-toolkit
   :replaces_section_title:

   The clever toolkit \(CTK\) is a suite of tools to analyze next\-generation sequencing data and\, in particular\, to discover and genotype insertions and deletions from paired\-end reads.

   :homepage: https://bitbucket.org/tobiasmarschall/clever-toolkit
   :license: GPLv3
   :recipe: /`clever-toolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clever-toolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clever-toolkit/meta.yaml>`_

   


.. conda:package:: clever-toolkit

   |downloads_clever-toolkit| |docker_clever-toolkit|

   :versions: 2.4, 2.3, 2.2.1, 2.1, 2.0rc4, 2.0rc3

   :depends: :conda:package:`bcftools` 1.* :conda:package:`bedtools` >=2.26 :conda:package:`boost` 1.64* :conda:package:`libgcc`  :conda:package:`libstdcxx-ng`  :conda:package:`matplotlib` 2.* :conda:package:`python` 3.5* :conda:package:`samtools` 1.* :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_clever-toolkit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clever-toolkit

   and update with::

      conda update clever-toolkit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/clever-toolkit


.. |required_by_clever-toolkit| conda:required_by:: clever-toolkit
.. |downloads_clever-toolkit| image:: https://img.shields.io/conda/dn/bioconda/clever-toolkit.svg?style=flat
   :alt:   (downloads)
.. |docker_clever-toolkit| image:: https://quay.io/repository/biocontainers/clever-toolkit/status
   :target: https://quay.io/repository/biocontainers/clever-toolkit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clever-toolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clever-toolkit/README.html

