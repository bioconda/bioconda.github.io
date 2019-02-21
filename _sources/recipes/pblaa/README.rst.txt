:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pblaa'
.. highlight: bash

pblaa
=====

.. conda:recipe:: pblaa
   :replaces_section_title:

   PacBio tool to deconvolute mixtures of alleles and loci into phased consensus sequences.

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`pblaa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pblaa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pblaa/meta.yaml>`_

   


.. conda:package:: pblaa

   |downloads_pblaa| |docker_pblaa|

   :versions: 2.4.2-1, 2.4.2-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pblaa

   and update with::

      conda update pblaa

   or use the docker container::

      docker pull quay.io/biocontainers/pblaa:<tag>

   (see `pblaa/tags`_ for valid values for ``<tag>``)


.. |downloads_pblaa| image:: https://img.shields.io/conda/dn/bioconda/pblaa.svg?style=flat
   :alt:   (downloads)
.. |docker_pblaa| image:: https://quay.io/repository/biocontainers/pblaa/status
   :target: https://quay.io/repository/biocontainers/pblaa
.. _`pblaa/tags`: https://quay.io/repository/biocontainers/pblaa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pblaa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pblaa/README.html