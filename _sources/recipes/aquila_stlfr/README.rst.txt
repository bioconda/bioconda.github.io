:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aquila_stlfr'
.. highlight: bash

aquila_stlfr
============

.. conda:recipe:: aquila_stlfr
   :replaces_section_title:

   Diploid assembly and variants calling for stLFR and hybrid assembler for both linked\-reads.

   :homepage: https://github.com/maiziex/Aquila_stLFR
   :license: MIT
   :recipe: /`aquila_stlfr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aquila_stlfr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aquila_stlfr/meta.yaml>`_

   


.. conda:package:: aquila_stlfr

   |downloads_aquila_stlfr| |docker_aquila_stlfr|

   :versions: 1.2.10-0, 1.2.9-0, 1.2.8-0, 1.2.4-0, 1.2.1-0, 1.1-2, 1.1-0
   
   :depends minimap2: 
   :depends numpy: 
   :depends pysam: 
   :depends python: >=3
   :depends samtools: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install aquila_stlfr

   and update with::

      conda update aquila_stlfr

   or use the docker container::

      docker pull quay.io/biocontainers/aquila_stlfr:<tag>

   (see `aquila_stlfr/tags`_ for valid values for ``<tag>``)


.. |downloads_aquila_stlfr| image:: https://img.shields.io/conda/dn/bioconda/aquila_stlfr.svg?style=flat
   :target: https://anaconda.org/bioconda/aquila_stlfr
   :alt:   (downloads)
.. |docker_aquila_stlfr| image:: https://quay.io/repository/biocontainers/aquila_stlfr/status
   :target: https://quay.io/repository/biocontainers/aquila_stlfr
.. _`aquila_stlfr/tags`: https://quay.io/repository/biocontainers/aquila_stlfr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aquila_stlfr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aquila_stlfr/README.html