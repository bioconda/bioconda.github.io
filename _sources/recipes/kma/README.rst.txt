:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kma'
.. highlight: bash

kma
===

.. conda:recipe:: kma
   :replaces_section_title:

   KMA is mapping a method designed to map raw reads directly against redundant databases\, in an ultra\-fast manner using seed and extend.

   :homepage: https://bitbucket.org/genomicepidemiology/kma
   :license: Apache-2.0
   :recipe: /`kma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kma/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-018-2336-6`

   


.. conda:package:: kma

   |downloads_kma| |docker_kma|

   :versions: 1.2.0-0, 1.1.7-0, 1.0.1-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kma

   and update with::

      conda update kma

   or use the docker container::

      docker pull quay.io/biocontainers/kma:<tag>

   (see `kma/tags`_ for valid values for ``<tag>``)


.. |downloads_kma| image:: https://img.shields.io/conda/dn/bioconda/kma.svg?style=flat
   :alt:   (downloads)
.. |docker_kma| image:: https://quay.io/repository/biocontainers/kma/status
   :target: https://quay.io/repository/biocontainers/kma
.. _`kma/tags`: https://quay.io/repository/biocontainers/kma?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kma/README.html