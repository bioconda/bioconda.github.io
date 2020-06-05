:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'udocker'
.. highlight: bash

udocker
=======

.. conda:recipe:: udocker
   :replaces_section_title:
   :noindex:

   Freely available tools for computational molecular biology.

   :homepage: https://github.com/indigo-dc/udocker
   :license: Apache / Apache-2.0
   :recipe: /`udocker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/udocker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/udocker/meta.yaml>`_

   


.. conda:package:: udocker

   |downloads_udocker| |docker_udocker|

   :versions:
      
      

      ``1.1.1-2``,  ``1.1.1-0``,  ``1.0.3-0``

      

   
   :depends proot: 
   :depends pycurl: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends simplejson: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install udocker

   and update with::

      conda update udocker

   or use the docker container::

      docker pull quay.io/biocontainers/udocker:<tag>

   (see `udocker/tags`_ for valid values for ``<tag>``)


.. |downloads_udocker| image:: https://img.shields.io/conda/dn/bioconda/udocker.svg?style=flat
   :target: https://anaconda.org/bioconda/udocker
   :alt:   (downloads)
.. |docker_udocker| image:: https://quay.io/repository/biocontainers/udocker/status
   :target: https://quay.io/repository/biocontainers/udocker
.. _`udocker/tags`: https://quay.io/repository/biocontainers/udocker?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/udocker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/udocker/README.html