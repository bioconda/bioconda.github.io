:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'collect_mgf'
.. highlight: bash

collect_mgf
===========

.. conda:recipe:: collect_mgf
   :replaces_section_title:
   :noindex:

   Collects MGF files and dd\_results from an XMass setup\_QDD.tcl experiment to a single MGF file.

   :homepage: http://www.ms-utils.org/collect_mgf.c
   :license: GPL-3.0
   :recipe: /`collect_mgf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/collect_mgf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/collect_mgf/meta.yaml>`_
   :links: biotools: :biotools:`collect_mgf`

   


.. conda:package:: collect_mgf

   |downloads_collect_mgf| |docker_collect_mgf|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install collect_mgf

   and update with::

      conda update collect_mgf

   or use the docker container::

      docker pull quay.io/biocontainers/collect_mgf:<tag>

   (see `collect_mgf/tags`_ for valid values for ``<tag>``)


.. |downloads_collect_mgf| image:: https://img.shields.io/conda/dn/bioconda/collect_mgf.svg?style=flat
   :target: https://anaconda.org/bioconda/collect_mgf
   :alt:   (downloads)
.. |docker_collect_mgf| image:: https://quay.io/repository/biocontainers/collect_mgf/status
   :target: https://quay.io/repository/biocontainers/collect_mgf
.. _`collect_mgf/tags`: https://quay.io/repository/biocontainers/collect_mgf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/collect_mgf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/collect_mgf/README.html