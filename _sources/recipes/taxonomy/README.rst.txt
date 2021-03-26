:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxonomy'
.. highlight: bash

taxonomy
========

.. conda:recipe:: taxonomy
   :replaces_section_title:
   :noindex:

   Python and Rust library for loading\, saving\, and manipulating taxonomic trees

   :homepage: https://github.com/onecodex/taxonomy/
   :license: MIT / MIT License
   :recipe: /`taxonomy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxonomy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxonomy/meta.yaml>`_

   


.. conda:package:: taxonomy

   |downloads_taxonomy| |docker_taxonomy|

   :versions:
      
      

      ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.4.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install taxonomy

   and update with::

      conda update taxonomy

   or use the docker container::

      docker pull quay.io/biocontainers/taxonomy:<tag>

   (see `taxonomy/tags`_ for valid values for ``<tag>``)


.. |downloads_taxonomy| image:: https://img.shields.io/conda/dn/bioconda/taxonomy.svg?style=flat
   :target: https://anaconda.org/bioconda/taxonomy
   :alt:   (downloads)
.. |docker_taxonomy| image:: https://quay.io/repository/biocontainers/taxonomy/status
   :target: https://quay.io/repository/biocontainers/taxonomy
.. _`taxonomy/tags`: https://quay.io/repository/biocontainers/taxonomy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxonomy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxonomy/README.html