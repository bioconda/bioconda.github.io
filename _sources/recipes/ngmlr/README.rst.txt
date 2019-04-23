:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngmlr'
.. highlight: bash

ngmlr
=====

.. conda:recipe:: ngmlr
   :replaces_section_title:

   ngmlr is a long\-read mapper designed to align PacBio or Oxford Nanopore reads to a reference genome and optimized for structural variation detection

   :homepage: https://github.com/philres/ngmlr
   :license: MIT
   :recipe: /`ngmlr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngmlr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngmlr/meta.yaml>`_

   


.. conda:package:: ngmlr

   |downloads_ngmlr| |docker_ngmlr|

   :versions: 0.2.7-1, 0.2.7-0, 0.2.6-1, 0.2.6-0, 0.2.5-0, 0.2.4-2, 0.2.4-1, 0.2.4-0, 0.2.3-2, 0.2.3-1, 0.2.3-0, 0.2.2-0
   
   :depends libcxx: >=4.0.1
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ngmlr

   and update with::

      conda update ngmlr

   or use the docker container::

      docker pull quay.io/biocontainers/ngmlr:<tag>

   (see `ngmlr/tags`_ for valid values for ``<tag>``)


.. |downloads_ngmlr| image:: https://img.shields.io/conda/dn/bioconda/ngmlr.svg?style=flat
   :alt:   (downloads)
.. |docker_ngmlr| image:: https://quay.io/repository/biocontainers/ngmlr/status
   :target: https://quay.io/repository/biocontainers/ngmlr
.. _`ngmlr/tags`: https://quay.io/repository/biocontainers/ngmlr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngmlr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngmlr/README.html