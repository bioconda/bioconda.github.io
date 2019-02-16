:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sqt'
.. highlight: bash

sqt
===

.. conda:recipe:: sqt
   :replaces_section_title:

   Command\-line tools for the analysis of high\-throughput sequencing data

   :homepage: https://bitbucket.org/marcelm/sqt
   :license: MIT
   :recipe: /`sqt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sqt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sqt/meta.yaml>`_

   


.. conda:package:: sqt

   |downloads_sqt| |docker_sqt|

   :versions: 0.8.0-2, 0.8.0-0, 0.7.0-2, 0.7.0-1, 0.7.0-0, 0.6.3-0, 0.6.1-0
   
   :depends cutadapt: 
   
   :depends libgcc-ng: >=4.9
   
   :depends matplotlib: 
   
   :depends pysam: 
   
   :depends python: >=3.5,<3.6.0a0
   
   :depends seaborn: 
   
   :depends xopen: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sqt

   and update with::

      conda update sqt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sqt:<tag>

   (see `sqt/tags`_ for valid values for ``<tag>``)


.. |downloads_sqt| image:: https://img.shields.io/conda/dn/bioconda/sqt.svg?style=flat
   :alt:   (downloads)
.. |docker_sqt| image:: https://quay.io/repository/biocontainers/sqt/status
   :target: https://quay.io/repository/biocontainers/sqt
.. _`sqt/tags`: https://quay.io/repository/biocontainers/sqt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sqt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sqt/README.html