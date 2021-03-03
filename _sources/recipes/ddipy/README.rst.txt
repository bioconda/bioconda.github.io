:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ddipy'
.. highlight: bash

ddipy
=====

.. conda:recipe:: ddipy
   :replaces_section_title:
   :noindex:

   Python client for OmicsDI Restful API

   :homepage: https://github.com/OmicsDI/ddipy
   :license: Apache / Apache 2.0
   :recipe: /`ddipy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddipy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddipy/meta.yaml>`_

   


.. conda:package:: ddipy

   |downloads_ddipy| |docker_ddipy|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends click: 
   :depends pyopenssl: 
   :depends python: ``>=3``
   :depends requests: ``2.22.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ddipy

   and update with::

      conda update ddipy

   or use the docker container::

      docker pull quay.io/biocontainers/ddipy:<tag>

   (see `ddipy/tags`_ for valid values for ``<tag>``)


.. |downloads_ddipy| image:: https://img.shields.io/conda/dn/bioconda/ddipy.svg?style=flat
   :target: https://anaconda.org/bioconda/ddipy
   :alt:   (downloads)
.. |docker_ddipy| image:: https://quay.io/repository/biocontainers/ddipy/status
   :target: https://quay.io/repository/biocontainers/ddipy
.. _`ddipy/tags`: https://quay.io/repository/biocontainers/ddipy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ddipy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ddipy/README.html