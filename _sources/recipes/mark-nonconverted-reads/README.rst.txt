:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mark-nonconverted-reads'
.. highlight: bash

mark-nonconverted-reads
=======================

.. conda:recipe:: mark-nonconverted-reads
   :replaces_section_title:

   A simple filter to mark potential nonconverted reads from methylation experiments

   :homepage: https://github.com/nebiolabs/mark-nonconverted-reads
   :license: AGPL-3.0
   :recipe: /`mark-nonconverted-reads <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mark-nonconverted-reads>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mark-nonconverted-reads/meta.yaml>`_

   


.. conda:package:: mark-nonconverted-reads

   |downloads_mark-nonconverted-reads| |docker_mark-nonconverted-reads|

   :versions: 1.0-0
   
   :depends pysam: 
   :depends python: >=3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mark-nonconverted-reads

   and update with::

      conda update mark-nonconverted-reads

   or use the docker container::

      docker pull quay.io/biocontainers/mark-nonconverted-reads:<tag>

   (see `mark-nonconverted-reads/tags`_ for valid values for ``<tag>``)


.. |downloads_mark-nonconverted-reads| image:: https://img.shields.io/conda/dn/bioconda/mark-nonconverted-reads.svg?style=flat
   :alt:   (downloads)
.. |docker_mark-nonconverted-reads| image:: https://quay.io/repository/biocontainers/mark-nonconverted-reads/status
   :target: https://quay.io/repository/biocontainers/mark-nonconverted-reads
.. _`mark-nonconverted-reads/tags`: https://quay.io/repository/biocontainers/mark-nonconverted-reads?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mark-nonconverted-reads/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mark-nonconverted-reads/README.html