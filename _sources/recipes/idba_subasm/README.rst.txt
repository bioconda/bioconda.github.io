:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'idba_subasm'
.. highlight: bash

idba_subasm
===========

.. conda:recipe:: idba_subasm
   :replaces_section_title:

   Fork of IDBA with modifications to perform subassembly for the read cloud metagenomic assembler Athena

   :homepage: https://github.com/abishara/idba
   :license: GPL2
   :recipe: /`idba_subasm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idba_subasm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idba_subasm/meta.yaml>`_

   


.. conda:package:: idba_subasm

   |downloads_idba_subasm| |docker_idba_subasm|

   :versions: 1.1.3a2-0, 1.1.3a1-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install idba_subasm

   and update with::

      conda update idba_subasm

   or use the docker container::

      docker pull quay.io/biocontainers/idba_subasm:<tag>

   (see `idba_subasm/tags`_ for valid values for ``<tag>``)


.. |downloads_idba_subasm| image:: https://img.shields.io/conda/dn/bioconda/idba_subasm.svg?style=flat
   :alt:   (downloads)
.. |docker_idba_subasm| image:: https://quay.io/repository/biocontainers/idba_subasm/status
   :target: https://quay.io/repository/biocontainers/idba_subasm
.. _`idba_subasm/tags`: https://quay.io/repository/biocontainers/idba_subasm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/idba_subasm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/idba_subasm/README.html