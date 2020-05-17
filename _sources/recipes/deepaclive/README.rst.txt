:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepaclive'
.. highlight: bash

deepaclive
==========

.. conda:recipe:: deepaclive
   :replaces_section_title:

   Detecting novel pathogens from NGS reads in real\-time during a sequencing run.

   :homepage: https://gitlab.com/dacs-hpi/deepac-live
   :license: MIT / MIT
   :recipe: /`deepaclive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepaclive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepaclive/meta.yaml>`_

   


.. conda:package:: deepaclive

   |downloads_deepaclive| |docker_deepaclive|

   :versions: 0.3.0-0, 0.2.0-0, 0.1.0-0
   
   :depends biopython: >=1.76
   :depends deepac: >=0.12.0
   :depends paramiko: >=2.7.1
   :depends pysam: >=0.15.4
   :depends python: >=3
   :depends samtools: >=1.9
   :depends scikit-learn: >=0.22.1
   :depends tensorflow: >=2.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deepaclive

   and update with::

      conda update deepaclive

   or use the docker container::

      docker pull quay.io/biocontainers/deepaclive:<tag>

   (see `deepaclive/tags`_ for valid values for ``<tag>``)


.. |downloads_deepaclive| image:: https://img.shields.io/conda/dn/bioconda/deepaclive.svg?style=flat
   :target: https://anaconda.org/bioconda/deepaclive
   :alt:   (downloads)
.. |docker_deepaclive| image:: https://quay.io/repository/biocontainers/deepaclive/status
   :target: https://quay.io/repository/biocontainers/deepaclive
.. _`deepaclive/tags`: https://quay.io/repository/biocontainers/deepaclive?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepaclive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepaclive/README.html