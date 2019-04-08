:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libbambamc'
.. highlight: bash

libbambamc
==========

.. conda:recipe:: libbambamc/0.5.00
   :replaces_section_title:

   lightweight C implementation of name collating BAM file input and BAM file output

   :homepage: https://github.com/gt1/bambamc
   :license: GPLv3
   :recipe: /`libbambamc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libbambamc>`_/`0.5.00 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libbambamc/0.5.00>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libbambamc/0.5.00/meta.yaml>`_

   


.. conda:package:: libbambamc

   |downloads_libbambamc| |docker_libbambamc|

   :versions: 0.0.50-2, 0.0.50-1, 0.0.50-0
   
   :depends libgcc-ng: >=4.9
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libbambamc

   and update with::

      conda update libbambamc

   or use the docker container::

      docker pull quay.io/biocontainers/libbambamc:<tag>

   (see `libbambamc/tags`_ for valid values for ``<tag>``)


.. |downloads_libbambamc| image:: https://img.shields.io/conda/dn/bioconda/libbambamc.svg?style=flat
   :alt:   (downloads)
.. |docker_libbambamc| image:: https://quay.io/repository/biocontainers/libbambamc/status
   :target: https://quay.io/repository/biocontainers/libbambamc
.. _`libbambamc/tags`: https://quay.io/repository/biocontainers/libbambamc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libbambamc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libbambamc/README.html