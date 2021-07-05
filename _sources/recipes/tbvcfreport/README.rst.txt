:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tbvcfreport'
.. highlight: bash

tbvcfreport
===========

.. conda:recipe:: tbvcfreport
   :replaces_section_title:
   :noindex:

   Parses SnpEff annotated M.tb VCF\(s\) and generates an interactive HTML\-based report.

   :homepage: https://github.com/COMBAT-TB/tbvcfreport
   :documentation: https://github.com/COMBAT-TB/tbvcfreport/blob/master/README.md
   
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`tbvcfreport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbvcfreport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbvcfreport/meta.yaml>`_

   


.. conda:package:: tbvcfreport

   |downloads_tbvcfreport| |docker_tbvcfreport|

   :versions:
      
      

      ``0.1.8-0``,  ``0.1.7-0``

      

   
   :depends click: 
   :depends jinja2: 
   :depends neo4j-python-driver: 
   :depends python: ``>=3.6``
   :depends pyvcf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tbvcfreport

   and update with::

      conda update tbvcfreport

   or use the docker container::

      docker pull quay.io/biocontainers/tbvcfreport:<tag>

   (see `tbvcfreport/tags`_ for valid values for ``<tag>``)


.. |downloads_tbvcfreport| image:: https://img.shields.io/conda/dn/bioconda/tbvcfreport.svg?style=flat
   :target: https://anaconda.org/bioconda/tbvcfreport
   :alt:   (downloads)
.. |docker_tbvcfreport| image:: https://quay.io/repository/biocontainers/tbvcfreport/status
   :target: https://quay.io/repository/biocontainers/tbvcfreport
.. _`tbvcfreport/tags`: https://quay.io/repository/biocontainers/tbvcfreport?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tbvcfreport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tbvcfreport/README.html