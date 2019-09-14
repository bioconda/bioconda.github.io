:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svanalyzer'
.. highlight: bash

svanalyzer
==========

.. conda:recipe:: svanalyzer
   :replaces_section_title:

   SVanalyzer\: tools for the analysis of structural variation in genomes

   :homepage: http://svanalyzer.readthedocs.io/
   :license: CC0
   :recipe: /`svanalyzer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svanalyzer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svanalyzer/meta.yaml>`_

   


.. conda:package:: svanalyzer

   |downloads_svanalyzer| |docker_svanalyzer|

   :versions: 0.31-0, 0.3-0
   
   :depends bedtools: 
   :depends edlib: 
   :depends mummer: 
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-log-log4perl: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install svanalyzer

   and update with::

      conda update svanalyzer

   or use the docker container::

      docker pull quay.io/biocontainers/svanalyzer:<tag>

   (see `svanalyzer/tags`_ for valid values for ``<tag>``)


.. |downloads_svanalyzer| image:: https://img.shields.io/conda/dn/bioconda/svanalyzer.svg?style=flat
   :target: https://anaconda.org/bioconda/svanalyzer
   :alt:   (downloads)
.. |docker_svanalyzer| image:: https://quay.io/repository/biocontainers/svanalyzer/status
   :target: https://quay.io/repository/biocontainers/svanalyzer
.. _`svanalyzer/tags`: https://quay.io/repository/biocontainers/svanalyzer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svanalyzer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svanalyzer/README.html