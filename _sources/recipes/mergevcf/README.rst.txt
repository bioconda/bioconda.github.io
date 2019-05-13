:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mergevcf'
.. highlight: bash

mergevcf
========

.. conda:recipe:: mergevcf
   :replaces_section_title:

   Python package and routines for merging VCF files

   :homepage: https://github.com/ljdursi/mergevcf
   :license: MIT
   :recipe: /`mergevcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mergevcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mergevcf/meta.yaml>`_

   


.. conda:package:: mergevcf

   |downloads_mergevcf| |docker_mergevcf|

   :versions: 1.0.1-1, 1.0.1-0
   
   :depends python: >=2.7,<2.8.0a0
   :depends pyvcf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mergevcf

   and update with::

      conda update mergevcf

   or use the docker container::

      docker pull quay.io/biocontainers/mergevcf:<tag>

   (see `mergevcf/tags`_ for valid values for ``<tag>``)


.. |downloads_mergevcf| image:: https://img.shields.io/conda/dn/bioconda/mergevcf.svg?style=flat
   :target: https://anaconda.org/bioconda/mergevcf
   :alt:   (downloads)
.. |docker_mergevcf| image:: https://quay.io/repository/biocontainers/mergevcf/status
   :target: https://quay.io/repository/biocontainers/mergevcf
.. _`mergevcf/tags`: https://quay.io/repository/biocontainers/mergevcf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mergevcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mergevcf/README.html