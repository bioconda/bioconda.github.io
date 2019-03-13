:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gappa'
.. highlight: bash

gappa
=====

.. conda:recipe:: gappa
   :replaces_section_title:

   Genesis Applications for Phylogenetic Placement Analysis

   :homepage: https://github.com/lczech/gappa
   :license: GNU General Public License v3.0
   :recipe: /`gappa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gappa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gappa/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty767`

   


.. conda:package:: gappa

   |downloads_gappa| |docker_gappa|

   :versions: 0.2.0-0, 0.1.0-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gappa

   and update with::

      conda update gappa

   or use the docker container::

      docker pull quay.io/biocontainers/gappa:<tag>

   (see `gappa/tags`_ for valid values for ``<tag>``)


.. |downloads_gappa| image:: https://img.shields.io/conda/dn/bioconda/gappa.svg?style=flat
   :alt:   (downloads)
.. |docker_gappa| image:: https://quay.io/repository/biocontainers/gappa/status
   :target: https://quay.io/repository/biocontainers/gappa
.. _`gappa/tags`: https://quay.io/repository/biocontainers/gappa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gappa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gappa/README.html