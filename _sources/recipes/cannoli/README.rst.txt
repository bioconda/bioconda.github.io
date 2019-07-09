:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cannoli'
.. highlight: bash

cannoli
=======

.. conda:recipe:: cannoli
   :replaces_section_title:

   Big Data Genomics ADAM Pipe API wrappers for bioinformatics tools

   :homepage: https://github.com/bigdatagenomics/cannoli
   :license: Apache 2
   :recipe: /`cannoli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cannoli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cannoli/meta.yaml>`_

   


.. conda:package:: cannoli

   |downloads_cannoli| |docker_cannoli|

   :versions: 0.6.0-0, 0.2.0-1, 0.2.0-0
   
   :depends openjdk: >=8,<9
   :depends pyspark: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cannoli

   and update with::

      conda update cannoli

   or use the docker container::

      docker pull quay.io/biocontainers/cannoli:<tag>

   (see `cannoli/tags`_ for valid values for ``<tag>``)


.. |downloads_cannoli| image:: https://img.shields.io/conda/dn/bioconda/cannoli.svg?style=flat
   :target: https://anaconda.org/bioconda/cannoli
   :alt:   (downloads)
.. |docker_cannoli| image:: https://quay.io/repository/biocontainers/cannoli/status
   :target: https://quay.io/repository/biocontainers/cannoli
.. _`cannoli/tags`: https://quay.io/repository/biocontainers/cannoli?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cannoli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cannoli/README.html