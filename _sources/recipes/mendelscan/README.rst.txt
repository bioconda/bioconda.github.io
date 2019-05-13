:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mendelscan'
.. highlight: bash

mendelscan
==========

.. conda:recipe:: mendelscan
   :replaces_section_title:

   Analyze exome data for Mendelian disorders.

   :homepage: https://github.com/genome/mendelscan
   :license: Unknown
   :recipe: /`mendelscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mendelscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mendelscan/meta.yaml>`_

   


.. conda:package:: mendelscan

   |downloads_mendelscan| |docker_mendelscan|

   :versions: v1.2.2-1, v1.2.2-0
   
   :depends java-jdk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mendelscan

   and update with::

      conda update mendelscan

   or use the docker container::

      docker pull quay.io/biocontainers/mendelscan:<tag>

   (see `mendelscan/tags`_ for valid values for ``<tag>``)


.. |downloads_mendelscan| image:: https://img.shields.io/conda/dn/bioconda/mendelscan.svg?style=flat
   :target: https://anaconda.org/bioconda/mendelscan
   :alt:   (downloads)
.. |docker_mendelscan| image:: https://quay.io/repository/biocontainers/mendelscan/status
   :target: https://quay.io/repository/biocontainers/mendelscan
.. _`mendelscan/tags`: https://quay.io/repository/biocontainers/mendelscan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mendelscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mendelscan/README.html