:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coral'
.. highlight: bash

coral
=====

.. conda:recipe:: coral
   :replaces_section_title:
   :noindex:

   Coral is an efficient tool to bridge paire\-end RNA\-seq reads.

   :homepage: https://github.com/Shao-Group/coral
   :license: BSD 3-Clause License
   :recipe: /`coral <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coral>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coral/meta.yaml>`_

   


.. conda:package:: coral

   |downloads_coral| |docker_coral|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends htslib: ``>=1.9,<1.10.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install coral

   and update with::

      conda update coral

   or use the docker container::

      docker pull quay.io/biocontainers/coral:<tag>

   (see `coral/tags`_ for valid values for ``<tag>``)


.. |downloads_coral| image:: https://img.shields.io/conda/dn/bioconda/coral.svg?style=flat
   :target: https://anaconda.org/bioconda/coral
   :alt:   (downloads)
.. |docker_coral| image:: https://quay.io/repository/biocontainers/coral/status
   :target: https://quay.io/repository/biocontainers/coral
.. _`coral/tags`: https://quay.io/repository/biocontainers/coral?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coral/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coral/README.html