:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirge-build'
.. highlight: bash

mirge-build
===========

.. conda:recipe:: mirge-build
   :replaces_section_title:
   :noindex:

   miRge\-build\: Building libraries of small RNA sequencing Data

   :homepage: https://github.com/mhalushka/miRge3_build
   :documentation: https://mirge-build.readthedocs.io/
   
   :developer docs: https://github.com/mhalushka/miRge3_build/
   :license: MIT / MIT
   :recipe: /`mirge-build <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirge-build>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirge-build/meta.yaml>`_

   


.. conda:package:: mirge-build

   |downloads_mirge-build| |docker_mirge-build|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends biopython: ``1.77``
   :depends bowtie: ``1.2.3``
   :depends python: 
   :depends scikit-learn: ``0.23.1``
   :depends scipy: ``1.4.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mirge-build

   and update with::

      conda update mirge-build

   or use the docker container::

      docker pull quay.io/biocontainers/mirge-build:<tag>

   (see `mirge-build/tags`_ for valid values for ``<tag>``)


.. |downloads_mirge-build| image:: https://img.shields.io/conda/dn/bioconda/mirge-build.svg?style=flat
   :target: https://anaconda.org/bioconda/mirge-build
   :alt:   (downloads)
.. |docker_mirge-build| image:: https://quay.io/repository/biocontainers/mirge-build/status
   :target: https://quay.io/repository/biocontainers/mirge-build
.. _`mirge-build/tags`: https://quay.io/repository/biocontainers/mirge-build?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirge-build/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirge-build/README.html