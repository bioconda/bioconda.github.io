:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequencetools'
.. highlight: bash

sequencetools
=============

.. conda:recipe:: sequenceTools
   :replaces_section_title:

   Tools for population genetics on sequencing datas

   :homepage: https://github.com/stschiff/sequenceTools
   :license: MIT
   :recipe: /`sequenceTools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequenceTools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequenceTools/meta.yaml>`_

   


.. conda:package:: sequencetools

   |downloads_sequencetools| |docker_sequencetools|

   :versions: 1.2.2-0
   
   :depends gmp: >=6.1.2,<7.0a0
   
   :depends libgcc-ng: >=4.9
   
   :depends samtools: 
   
   :depends xz: >=5.2.3,<5.3.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sequencetools

   and update with::

      conda update sequencetools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sequencetools:<tag>

   (see `sequencetools/tags`_ for valid values for ``<tag>``)


.. |downloads_sequencetools| image:: https://img.shields.io/conda/dn/bioconda/sequencetools.svg?style=flat
   :alt:   (downloads)
.. |docker_sequencetools| image:: https://quay.io/repository/biocontainers/sequencetools/status
   :target: https://quay.io/repository/biocontainers/sequencetools
.. _`sequencetools/tags`: https://quay.io/repository/biocontainers/sequencetools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequencetools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequencetools/README.html