:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'neurodocker'
.. highlight: bash

neurodocker
===========

.. conda:recipe:: neurodocker
   :replaces_section_title:

   Neurodocker is a command\-line program that generates custom Dockerfiles and Singularity recipes for neuroimaging and minifies existing containers.

   :homepage: https://github.com/kaczmarj/neurodocker
   :license: Apache / Apache-2.0
   :recipe: /`neurodocker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neurodocker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neurodocker/meta.yaml>`_

   


.. conda:package:: neurodocker

   |downloads_neurodocker| |docker_neurodocker|

   :versions: 0.4.3-0, 0.4.2-0, 0.4.1-0
   
   :depends jinja2: >=2.0
   
   :depends python: >=3.5,<3.6.0a0
   
   :depends pyyaml: >=3.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install neurodocker

   and update with::

      conda update neurodocker

   or use the docker container::

      docker pull quay.io/repository/biocontainers/neurodocker:<tag>

   (see `neurodocker/tags`_ for valid values for ``<tag>``)


.. |downloads_neurodocker| image:: https://img.shields.io/conda/dn/bioconda/neurodocker.svg?style=flat
   :alt:   (downloads)
.. |docker_neurodocker| image:: https://quay.io/repository/biocontainers/neurodocker/status
   :target: https://quay.io/repository/biocontainers/neurodocker
.. _`neurodocker/tags`: https://quay.io/repository/biocontainers/neurodocker?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/neurodocker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/neurodocker/README.html