:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ditasic'
.. highlight: bash

ditasic
=======

.. conda:recipe:: ditasic
   :replaces_section_title:

   DiTASiC is designed as a comprehensive approach for abundance estimation and differential abundance assessment of individual taxa in metagenomics samples.

   :homepage: https://rki_bioinformatics.gitlab.io/ditasic/
   :license: MIT
   :recipe: /`ditasic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ditasic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ditasic/meta.yaml>`_

   


.. conda:package:: ditasic

   |downloads_ditasic| |docker_ditasic|

   :versions: 0.2-0
   
   :depends biopython: >=1.70
   
   :depends kallisto: >=0.43.1
   
   :depends mason: >=2.0.7
   
   :depends numpy: >=1.8.0
   
   :depends python: >=3.7,<3.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ditasic

   and update with::

      conda update ditasic

   or use the docker container::

      docker pull quay.io/biocontainers/ditasic:<tag>

   (see `ditasic/tags`_ for valid values for ``<tag>``)


.. |downloads_ditasic| image:: https://img.shields.io/conda/dn/bioconda/ditasic.svg?style=flat
   :alt:   (downloads)
.. |docker_ditasic| image:: https://quay.io/repository/biocontainers/ditasic/status
   :target: https://quay.io/repository/biocontainers/ditasic
.. _`ditasic/tags`: https://quay.io/repository/biocontainers/ditasic?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ditasic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ditasic/README.html