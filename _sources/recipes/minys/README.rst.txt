:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minys'
.. highlight: bash

minys
=====

.. conda:recipe:: minys
   :replaces_section_title:

   MinYS allows targeted assembly of bacterial genomes using a reference\-guided pipeline.

   :homepage: https://github.com/cguyomar/MinYS
   :license: file
   :recipe: /`minys <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minys>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minys/meta.yaml>`_

   


.. conda:package:: minys

   |downloads_minys| |docker_minys|

   :versions: 1.1-1, 1.1-0, 1.0-0
   
   :depends bwa: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends mindthegap: 
   :depends minia: 
   :depends numpy: 
   :depends pyani: 
   :depends python: >=3
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install minys

   and update with::

      conda update minys

   or use the docker container::

      docker pull quay.io/biocontainers/minys:<tag>

   (see `minys/tags`_ for valid values for ``<tag>``)


.. |downloads_minys| image:: https://img.shields.io/conda/dn/bioconda/minys.svg?style=flat
   :target: https://anaconda.org/bioconda/minys
   :alt:   (downloads)
.. |docker_minys| image:: https://quay.io/repository/biocontainers/minys/status
   :target: https://quay.io/repository/biocontainers/minys
.. _`minys/tags`: https://quay.io/repository/biocontainers/minys?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minys/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minys/README.html