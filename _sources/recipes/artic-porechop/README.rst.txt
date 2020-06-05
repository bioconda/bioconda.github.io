:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'artic-porechop'
.. highlight: bash

artic-porechop
==============

.. conda:recipe:: artic-porechop
   :replaces_section_title:
   :noindex:

   Adapter removal and demultiplexing of Oxford Nanopore reads \(fork of rrwick\/Porechop\)

   :homepage: https://github.com/artic-network/Porechop
   :license: GPL3
   :recipe: /`artic-porechop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artic-porechop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artic-porechop/meta.yaml>`_

   


.. conda:package:: artic-porechop

   |downloads_artic-porechop| |docker_artic-porechop|

   :versions:
      
      

      ``0.3.2pre-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install artic-porechop

   and update with::

      conda update artic-porechop

   or use the docker container::

      docker pull quay.io/biocontainers/artic-porechop:<tag>

   (see `artic-porechop/tags`_ for valid values for ``<tag>``)


.. |downloads_artic-porechop| image:: https://img.shields.io/conda/dn/bioconda/artic-porechop.svg?style=flat
   :target: https://anaconda.org/bioconda/artic-porechop
   :alt:   (downloads)
.. |docker_artic-porechop| image:: https://quay.io/repository/biocontainers/artic-porechop/status
   :target: https://quay.io/repository/biocontainers/artic-porechop
.. _`artic-porechop/tags`: https://quay.io/repository/biocontainers/artic-porechop?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/artic-porechop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/artic-porechop/README.html