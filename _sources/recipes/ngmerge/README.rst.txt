:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngmerge'
.. highlight: bash

ngmerge
=======

.. conda:recipe:: ngmerge
   :replaces_section_title:

   Merging paired\-end reads and removing sequencing adapters.

   :homepage: https://github.com/harvardinformatics/NGmerge
   :license: MIT
   :recipe: /`ngmerge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngmerge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngmerge/meta.yaml>`_
   :links: biotools: :biotools:`ngmerge`

   


.. conda:package:: ngmerge

   |downloads_ngmerge| |docker_ngmerge|

   :versions: 0.3-1, 0.3-0
   
   :depends libgcc-ng: >=4.9
   :depends openmp: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ngmerge

   and update with::

      conda update ngmerge

   or use the docker container::

      docker pull quay.io/biocontainers/ngmerge:<tag>

   (see `ngmerge/tags`_ for valid values for ``<tag>``)


.. |downloads_ngmerge| image:: https://img.shields.io/conda/dn/bioconda/ngmerge.svg?style=flat
   :alt:   (downloads)
.. |docker_ngmerge| image:: https://quay.io/repository/biocontainers/ngmerge/status
   :target: https://quay.io/repository/biocontainers/ngmerge
.. _`ngmerge/tags`: https://quay.io/repository/biocontainers/ngmerge?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngmerge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngmerge/README.html