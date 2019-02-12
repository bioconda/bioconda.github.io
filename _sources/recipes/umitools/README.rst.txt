:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'umitools'
.. highlight: bash

umitools
========

.. conda:recipe:: umitools
   :replaces_section_title:

   A toolset for handling sequencing data with unique molecular identifiers \(UMIs\)

   :homepage: https://github.com/weng-lab/umitools
   :license: GPL3
   :recipe: /`umitools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umitools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umitools/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12864-018-4933-1`

   


.. conda:package:: umitools

   |downloads_umitools| |docker_umitools|

   :versions: 0.3.4-0, 0.3.0-1, 0.3.0-0
   
   :depends editdistance: 
   
   :depends networkx: 
   
   :depends pysam: 
   
   :depends python: >=3.5,<3.6.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install umitools

   and update with::

      conda update umitools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/umitools:<tag>

   (see `umitools/tags`_ for valid values for ``<tag>``)


.. |downloads_umitools| image:: https://img.shields.io/conda/dn/bioconda/umitools.svg?style=flat
   :alt:   (downloads)
.. |docker_umitools| image:: https://quay.io/repository/biocontainers/umitools/status
   :target: https://quay.io/repository/biocontainers/umitools
.. _`umitools/tags`: https://quay.io/repository/biocontainers/umitools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/umitools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/umitools/README.html