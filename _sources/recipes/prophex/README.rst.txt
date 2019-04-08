:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prophex'
.. highlight: bash

prophex
=======

.. conda:recipe:: prophex
   :replaces_section_title:

   The ProPhex k\-mer index.

   :homepage: https://github.com/prophyle/prophex
   :license: MIT
   :recipe: /`prophex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prophex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prophex/meta.yaml>`_

   


.. conda:package:: prophex

   |downloads_prophex| |docker_prophex|

   :versions: 0.1.1-0, 0.1.0-4, 0.1.0-3, 0.1.0-2
   
   :depends libgcc-ng: >=4.9
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prophex

   and update with::

      conda update prophex

   or use the docker container::

      docker pull quay.io/biocontainers/prophex:<tag>

   (see `prophex/tags`_ for valid values for ``<tag>``)


.. |downloads_prophex| image:: https://img.shields.io/conda/dn/bioconda/prophex.svg?style=flat
   :alt:   (downloads)
.. |docker_prophex| image:: https://quay.io/repository/biocontainers/prophex/status
   :target: https://quay.io/repository/biocontainers/prophex
.. _`prophex/tags`: https://quay.io/repository/biocontainers/prophex?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prophex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prophex/README.html