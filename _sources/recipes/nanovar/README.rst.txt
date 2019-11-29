:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanovar'
.. highlight: bash

nanovar
=======

.. conda:recipe:: nanovar
   :replaces_section_title:

   Structural variant caller using low\-depth long reads

   :homepage: https://github.com/cytham/nanovar
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`nanovar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanovar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanovar/meta.yaml>`_

   


.. conda:package:: nanovar

   |downloads_nanovar| |docker_nanovar|

   :versions: 1.2.6-0, 1.2.5-0, 1.2.3-0
   
   :depends bedtools: >=2.26.0
   :depends biopython: >=1.74
   :depends blast: >=2.5.0
   :depends hs-blastn: >=0.0.5
   :depends matplotlib: >=2.2.3
   :depends natsort: >=6.2.0
   :depends numpy: >=1.17.3
   :depends progress: >=1.4
   :depends pybedtools: >=0.8.0
   :depends python: >=3.6
   :depends scipy: >=1.2.1
   :depends tensorflow: >=2.0.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanovar

   and update with::

      conda update nanovar

   or use the docker container::

      docker pull quay.io/biocontainers/nanovar:<tag>

   (see `nanovar/tags`_ for valid values for ``<tag>``)


.. |downloads_nanovar| image:: https://img.shields.io/conda/dn/bioconda/nanovar.svg?style=flat
   :target: https://anaconda.org/bioconda/nanovar
   :alt:   (downloads)
.. |docker_nanovar| image:: https://quay.io/repository/biocontainers/nanovar/status
   :target: https://quay.io/repository/biocontainers/nanovar
.. _`nanovar/tags`: https://quay.io/repository/biocontainers/nanovar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanovar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanovar/README.html