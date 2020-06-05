:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pygresql'
.. highlight: bash

pygresql
========

.. conda:recipe:: pygresql
   :replaces_section_title:
   :noindex:

   Python PostgreSQL Interfaces

   :homepage: http://www.pygresql.org
   :license: Python Software Foundation License
   :recipe: /`pygresql <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygresql>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygresql/meta.yaml>`_

   


.. conda:package:: pygresql

   |downloads_pygresql| |docker_pygresql|

   :versions:
      
      

      ``5.0.1-1``,  ``5.0.1-0``

      

   
   :depends postgresql: 
   :depends python: ``>=2.7,<2.8.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pygresql

   and update with::

      conda update pygresql

   or use the docker container::

      docker pull quay.io/biocontainers/pygresql:<tag>

   (see `pygresql/tags`_ for valid values for ``<tag>``)


.. |downloads_pygresql| image:: https://img.shields.io/conda/dn/bioconda/pygresql.svg?style=flat
   :target: https://anaconda.org/bioconda/pygresql
   :alt:   (downloads)
.. |docker_pygresql| image:: https://quay.io/repository/biocontainers/pygresql/status
   :target: https://quay.io/repository/biocontainers/pygresql
.. _`pygresql/tags`: https://quay.io/repository/biocontainers/pygresql?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygresql/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygresql/README.html