:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqhax'
.. highlight: bash

seqhax
======

.. conda:recipe:: seqhax
   :replaces_section_title:

   A collection of next\-gen sequence data utilities

   :homepage: https://github.com/kdmurray91/seqhax
   :license: MPL2
   :recipe: /`seqhax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqhax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqhax/meta.yaml>`_

   


.. conda:package:: seqhax

   |downloads_seqhax| |docker_seqhax|

   :versions: 0.7.2-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqhax

   and update with::

      conda update seqhax

   or use the docker container::

      docker pull quay.io/biocontainers/seqhax:<tag>

   (see `seqhax/tags`_ for valid values for ``<tag>``)


.. |downloads_seqhax| image:: https://img.shields.io/conda/dn/bioconda/seqhax.svg?style=flat
   :alt:   (downloads)
.. |docker_seqhax| image:: https://quay.io/repository/biocontainers/seqhax/status
   :target: https://quay.io/repository/biocontainers/seqhax
.. _`seqhax/tags`: https://quay.io/repository/biocontainers/seqhax?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqhax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqhax/README.html