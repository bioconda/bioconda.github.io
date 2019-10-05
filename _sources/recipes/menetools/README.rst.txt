:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'menetools'
.. highlight: bash

menetools
=========

.. conda:recipe:: menetools
   :replaces_section_title:

   Python 3 Metabolic Network Topology Tools

   :homepage: https://github.com/cfrioux/MeneTools
   :license: GPLv3+
   :recipe: /`menetools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/menetools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/menetools/meta.yaml>`_

   


.. conda:package:: menetools

   |downloads_menetools| |docker_menetools|

   :versions: 1.0.4_1-1, 1.0.4_1-0
   
   :depends pyasp: >=1.4.3
   :depends python: >=3.5,<3.6.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install menetools

   and update with::

      conda update menetools

   or use the docker container::

      docker pull quay.io/biocontainers/menetools:<tag>

   (see `menetools/tags`_ for valid values for ``<tag>``)


.. |downloads_menetools| image:: https://img.shields.io/conda/dn/bioconda/menetools.svg?style=flat
   :target: https://anaconda.org/bioconda/menetools
   :alt:   (downloads)
.. |docker_menetools| image:: https://quay.io/repository/biocontainers/menetools/status
   :target: https://quay.io/repository/biocontainers/menetools
.. _`menetools/tags`: https://quay.io/repository/biocontainers/menetools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/menetools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/menetools/README.html