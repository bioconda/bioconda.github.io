:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circminer'
.. highlight: bash

circminer
=========

.. conda:recipe:: circminer
   :replaces_section_title:

   Sensitive and fast computational tool for detecting circular RNAs \(circRNAs\) from RNA\-Seq data.

   :homepage: https://github.com/vpc-ccg/circminer
   :license: GPLv3
   :recipe: /`circminer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circminer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circminer/meta.yaml>`_

   


.. conda:package:: circminer

   |downloads_circminer| |docker_circminer|

   :versions: 0.4.2-0
   
   :depends coreutils: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install circminer

   and update with::

      conda update circminer

   or use the docker container::

      docker pull quay.io/biocontainers/circminer:<tag>

   (see `circminer/tags`_ for valid values for ``<tag>``)


.. |downloads_circminer| image:: https://img.shields.io/conda/dn/bioconda/circminer.svg?style=flat
   :target: https://anaconda.org/bioconda/circminer
   :alt:   (downloads)
.. |docker_circminer| image:: https://quay.io/repository/biocontainers/circminer/status
   :target: https://quay.io/repository/biocontainers/circminer
.. _`circminer/tags`: https://quay.io/repository/biocontainers/circminer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circminer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circminer/README.html