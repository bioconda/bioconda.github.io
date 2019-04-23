:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lordfast'
.. highlight: bash

lordfast
========

.. conda:recipe:: lordfast
   :replaces_section_title:

   Sensitive and Fast Alignment Search Tool for Long Read sequencing Data

   :homepage: https://github.com/vpc-ccg/lordfast
   :license: GPL-3.0
   :recipe: /`lordfast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lordfast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lordfast/meta.yaml>`_

   


.. conda:package:: lordfast

   |downloads_lordfast| |docker_lordfast|

   :versions: 0.0.10-0, 0.0.9-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lordfast

   and update with::

      conda update lordfast

   or use the docker container::

      docker pull quay.io/biocontainers/lordfast:<tag>

   (see `lordfast/tags`_ for valid values for ``<tag>``)


.. |downloads_lordfast| image:: https://img.shields.io/conda/dn/bioconda/lordfast.svg?style=flat
   :alt:   (downloads)
.. |docker_lordfast| image:: https://quay.io/repository/biocontainers/lordfast/status
   :target: https://quay.io/repository/biocontainers/lordfast
.. _`lordfast/tags`: https://quay.io/repository/biocontainers/lordfast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lordfast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lordfast/README.html