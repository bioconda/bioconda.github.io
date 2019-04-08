:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crisper_recognition_tool'
.. highlight: bash

crisper_recognition_tool
========================

.. conda:recipe:: crisper_recognition_tool
   :replaces_section_title:

   A tool for automatic detection of clustered regularly interspaced palindromic repeats \(CRISPR\).

   :homepage: http://www.room220.com/crt/
   :license: Public domain software
   :recipe: /`crisper_recognition_tool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisper_recognition_tool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisper_recognition_tool/meta.yaml>`_

   


.. conda:package:: crisper_recognition_tool

   |downloads_crisper_recognition_tool| |docker_crisper_recognition_tool|

   :versions: 1.2-1, 1.2-0
   
   :depends openjdk: >=6
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install crisper_recognition_tool

   and update with::

      conda update crisper_recognition_tool

   or use the docker container::

      docker pull quay.io/biocontainers/crisper_recognition_tool:<tag>

   (see `crisper_recognition_tool/tags`_ for valid values for ``<tag>``)


.. |downloads_crisper_recognition_tool| image:: https://img.shields.io/conda/dn/bioconda/crisper_recognition_tool.svg?style=flat
   :alt:   (downloads)
.. |docker_crisper_recognition_tool| image:: https://quay.io/repository/biocontainers/crisper_recognition_tool/status
   :target: https://quay.io/repository/biocontainers/crisper_recognition_tool
.. _`crisper_recognition_tool/tags`: https://quay.io/repository/biocontainers/crisper_recognition_tool?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crisper_recognition_tool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crisper_recognition_tool/README.html