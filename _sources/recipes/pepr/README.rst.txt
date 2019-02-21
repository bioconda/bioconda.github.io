:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pepr'
.. highlight: bash

pepr
====

.. conda:recipe:: pepr
   :replaces_section_title:

   Peak\-calling and Prioritization pipeline for replicated ChIP\-Seq data

   :homepage: https://github.com/shawnzhangyx/PePr/
   :license: GPL / GNU General Public License v3 (GPLv3)
   :recipe: /`pepr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepr/meta.yaml>`_

   


.. conda:package:: pepr

   |downloads_pepr| |docker_pepr|

   :versions: 1.1.24-1, 1.1.24-0, 1.1.18-0, 1.0.9-0
   
   :depends numpy: >=1.6.0
   
   :depends pysam: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends scipy: >=0.14.0
   
   :depends sharedmem: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pepr

   and update with::

      conda update pepr

   or use the docker container::

      docker pull quay.io/biocontainers/pepr:<tag>

   (see `pepr/tags`_ for valid values for ``<tag>``)


.. |downloads_pepr| image:: https://img.shields.io/conda/dn/bioconda/pepr.svg?style=flat
   :alt:   (downloads)
.. |docker_pepr| image:: https://quay.io/repository/biocontainers/pepr/status
   :target: https://quay.io/repository/biocontainers/pepr
.. _`pepr/tags`: https://quay.io/repository/biocontainers/pepr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pepr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pepr/README.html