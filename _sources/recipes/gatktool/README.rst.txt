:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gatktool'
.. highlight: bash

gatktool
========

.. conda:recipe:: gatktool
   :replaces_section_title:

   Functions and classes used to extend a GATK tool with Python

   :homepage: https://broadinstitute.org/
   :license: MIT
   :recipe: /`gatktool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatktool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatktool/meta.yaml>`_

   


.. conda:package:: gatktool

   |downloads_gatktool| |docker_gatktool|

   :versions: 0.0.1-0
   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gatktool

   and update with::

      conda update gatktool

   or use the docker container::

      docker pull quay.io/biocontainers/gatktool:<tag>

   (see `gatktool/tags`_ for valid values for ``<tag>``)


.. |downloads_gatktool| image:: https://img.shields.io/conda/dn/bioconda/gatktool.svg?style=flat
   :alt:   (downloads)
.. |docker_gatktool| image:: https://quay.io/repository/biocontainers/gatktool/status
   :target: https://quay.io/repository/biocontainers/gatktool
.. _`gatktool/tags`: https://quay.io/repository/biocontainers/gatktool?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gatktool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gatktool/README.html