:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psass'
.. highlight: bash

psass
=====

.. conda:recipe:: psass
   :replaces_section_title:

   Comparison of pooled\-sequencing data for two populations

   :homepage: https://github.com/RomainFeron/PSASS
   :license: GPL3
   :recipe: /`psass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psass/meta.yaml>`_

   


.. conda:package:: psass

   |downloads_psass| |docker_psass|

   :versions: 3.0.1b-0
   
   :depends bzip2: >=1.0.8,<2.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends xz: >=5.2.4,<5.3.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install psass

   and update with::

      conda update psass

   or use the docker container::

      docker pull quay.io/biocontainers/psass:<tag>

   (see `psass/tags`_ for valid values for ``<tag>``)


.. |downloads_psass| image:: https://img.shields.io/conda/dn/bioconda/psass.svg?style=flat
   :target: https://anaconda.org/bioconda/psass
   :alt:   (downloads)
.. |docker_psass| image:: https://quay.io/repository/biocontainers/psass/status
   :target: https://quay.io/repository/biocontainers/psass
.. _`psass/tags`: https://quay.io/repository/biocontainers/psass?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psass/README.html