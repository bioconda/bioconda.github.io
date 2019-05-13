:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stellar'
.. highlight: bash

stellar
=======

.. conda:recipe:: stellar
   :replaces_section_title:

   STELLAR is a tool for finding pairwise local alignments between long genomic or very many short sequences.

   :homepage: https://github.com/seqan/seqan/tree/master/apps/stellar/README
   :license: LGPLv3+
   :recipe: /`stellar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stellar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stellar/meta.yaml>`_

   


.. conda:package:: stellar

   |downloads_stellar| |docker_stellar|

   :versions: 1.4.9-1, 1.4.9-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install stellar

   and update with::

      conda update stellar

   or use the docker container::

      docker pull quay.io/biocontainers/stellar:<tag>

   (see `stellar/tags`_ for valid values for ``<tag>``)


.. |downloads_stellar| image:: https://img.shields.io/conda/dn/bioconda/stellar.svg?style=flat
   :target: https://anaconda.org/bioconda/stellar
   :alt:   (downloads)
.. |docker_stellar| image:: https://quay.io/repository/biocontainers/stellar/status
   :target: https://quay.io/repository/biocontainers/stellar
.. _`stellar/tags`: https://quay.io/repository/biocontainers/stellar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stellar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stellar/README.html