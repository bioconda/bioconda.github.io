:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plek'
.. highlight: bash

plek
====

.. conda:recipe:: plek
   :replaces_section_title:

   Predictor of long non\-coding RNAs and mRNAs based on k\-mer scheme.

   :homepage: https://sourceforge.net/projects/plek
   :license: GPL / GNU GPL v3
   :recipe: /`plek <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plek>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plek/meta.yaml>`_
   :links: biotools: :biotools:`plek`

   


.. conda:package:: plek

   |downloads_plek| |docker_plek|

   :versions: 1.2-0
   
   :depends libgcc-ng: >=4.9
   :depends libstdcxx-ng: >=4.9
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plek

   and update with::

      conda update plek

   or use the docker container::

      docker pull quay.io/biocontainers/plek:<tag>

   (see `plek/tags`_ for valid values for ``<tag>``)


.. |downloads_plek| image:: https://img.shields.io/conda/dn/bioconda/plek.svg?style=flat
   :alt:   (downloads)
.. |docker_plek| image:: https://quay.io/repository/biocontainers/plek/status
   :target: https://quay.io/repository/biocontainers/plek
.. _`plek/tags`: https://quay.io/repository/biocontainers/plek?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plek/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plek/README.html