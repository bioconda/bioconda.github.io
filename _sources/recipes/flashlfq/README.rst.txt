:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flashlfq'
.. highlight: bash

flashlfq
========

.. conda:recipe:: flashlfq
   :replaces_section_title:

   ultrafast label\-free quantification algorithm for mass\-spectrometry proteomics

   :homepage: https://github.com/smith-chem-wisc/FlashLFQ
   :license: GPL / LGPL-3.0
   :recipe: /`flashlfq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flashlfq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flashlfq/meta.yaml>`_

   


.. conda:package:: flashlfq

   |downloads_flashlfq| |docker_flashlfq|

   :versions: 0.1.111-0, 0.1.110-0, 0.1.109-0, 0.1.108-1, 0.1.108-0, 0.1.105-2, 0.1.105-0, 0.1.101-0, 0.1.100-0
   
   :depends mono: >=4.0.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install flashlfq

   and update with::

      conda update flashlfq

   or use the docker container::

      docker pull quay.io/biocontainers/flashlfq:<tag>

   (see `flashlfq/tags`_ for valid values for ``<tag>``)


.. |downloads_flashlfq| image:: https://img.shields.io/conda/dn/bioconda/flashlfq.svg?style=flat
   :target: https://anaconda.org/bioconda/flashlfq
   :alt:   (downloads)
.. |docker_flashlfq| image:: https://quay.io/repository/biocontainers/flashlfq/status
   :target: https://quay.io/repository/biocontainers/flashlfq
.. _`flashlfq/tags`: https://quay.io/repository/biocontainers/flashlfq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flashlfq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flashlfq/README.html