.. title:: Package Recipe 'rseg'
.. highlight: bash


rseg
====

.. conda:recipe:: rseg
   :replaces_section_title:

   The RSEG software package is used to analyze ChIP\-Seq data\, especially for identifying genomic regions and their boundaries marked by diffusive histone modification markers\, such as H3K36me3 and H3K27me3.

   :homepage: http://smithlabresearch.org/software/rseg
   :license: GPLv3
   :recipe: /`rseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rseg/meta.yaml>`_

   


.. conda:package:: rseg

   |downloads_rseg| |docker_rseg|

   :versions: 0.4.9

   :depends: :conda:package:`libgcc`  :conda:package:`zlib`  

   :required~by: |required_by_rseg|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rseg

   and update with::

      conda update rseg

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rseg


.. |required_by_rseg| conda:required_by:: rseg
.. |downloads_rseg| image:: https://img.shields.io/conda/dn/bioconda/rseg.svg?style=flat
   :alt:   (downloads)
.. |docker_rseg| image:: https://quay.io/repository/biocontainers/rseg/status
   :target: https://quay.io/repository/biocontainers/rseg







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rseg/README.html

