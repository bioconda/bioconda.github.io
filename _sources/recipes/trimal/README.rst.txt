:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trimal'
.. highlight: bash

trimal
======

.. conda:recipe:: trimal
   :replaces_section_title:

   A tool for the automated removal of spurious sequences or poorly aligned regions from a multiple sequence alignment

   :homepage: http://trimal.cgenomics.org
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`trimal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimal/meta.yaml>`_
   :links: biotools: :biotools:`trimAl`

   


.. conda:package:: trimal

   |downloads_trimal| |docker_trimal|

   :versions: 1.4.1-3, 1.4.1-2, 1.4.1-1, 1.4.1-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trimal

   and update with::

      conda update trimal

   or use the docker container::

      docker pull quay.io/biocontainers/trimal:<tag>

   (see `trimal/tags`_ for valid values for ``<tag>``)


.. |downloads_trimal| image:: https://img.shields.io/conda/dn/bioconda/trimal.svg?style=flat
   :target: https://anaconda.org/bioconda/trimal
   :alt:   (downloads)
.. |docker_trimal| image:: https://quay.io/repository/biocontainers/trimal/status
   :target: https://quay.io/repository/biocontainers/trimal
.. _`trimal/tags`: https://quay.io/repository/biocontainers/trimal?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trimal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trimal/README.html