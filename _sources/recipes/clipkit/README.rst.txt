:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clipkit'
.. highlight: bash

clipkit
=======

.. conda:recipe:: clipkit
   :replaces_section_title:
   :noindex:

   Alignment trimming software for phylogenetics.

   :homepage: https://github.com/jlsteenwyk/clipkit
   :license: MIT / MIT
   :recipe: /`clipkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clipkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clipkit/meta.yaml>`_

   


.. conda:package:: clipkit

   |downloads_clipkit| |docker_clipkit|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends biopython: ``>=1.76``
   :depends numpy: 
   :depends python: ``>3``
   :depends tqdm: ``>=4.45.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clipkit

   and update with::

      conda update clipkit

   or use the docker container::

      docker pull quay.io/biocontainers/clipkit:<tag>

   (see `clipkit/tags`_ for valid values for ``<tag>``)


.. |downloads_clipkit| image:: https://img.shields.io/conda/dn/bioconda/clipkit.svg?style=flat
   :target: https://anaconda.org/bioconda/clipkit
   :alt:   (downloads)
.. |docker_clipkit| image:: https://quay.io/repository/biocontainers/clipkit/status
   :target: https://quay.io/repository/biocontainers/clipkit
.. _`clipkit/tags`: https://quay.io/repository/biocontainers/clipkit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clipkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clipkit/README.html