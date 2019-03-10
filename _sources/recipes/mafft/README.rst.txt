:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mafft'
.. highlight: bash

mafft
=====

.. conda:recipe:: mafft/7.402
   :replaces_section_title:

   Multiple alignment program for amino acid or nucleotide sequences based on fast Fourier transform

   :homepage: http://mafft.cbrc.jp/alignment/software/
   :license: BSD
   :recipe: /`mafft <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mafft>`_/`7.402 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mafft/7.402>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mafft/7.402/meta.yaml>`_

   


.. conda:package:: mafft

   |downloads_mafft| |docker_mafft|

   :versions: 7.407-1, 7.407-0, 7.402-0, 7.313-1, 7.313-0, 7.310-1, 7.310-0, 7.305-1, 7.305-0, 7.221-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mafft

   and update with::

      conda update mafft

   or use the docker container::

      docker pull quay.io/biocontainers/mafft:<tag>

   (see `mafft/tags`_ for valid values for ``<tag>``)


.. |downloads_mafft| image:: https://img.shields.io/conda/dn/bioconda/mafft.svg?style=flat
   :alt:   (downloads)
.. |docker_mafft| image:: https://quay.io/repository/biocontainers/mafft/status
   :target: https://quay.io/repository/biocontainers/mafft
.. _`mafft/tags`: https://quay.io/repository/biocontainers/mafft?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mafft/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mafft/README.html