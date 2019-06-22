:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'corset'
.. highlight: bash

corset
======

.. conda:recipe:: corset
   :replaces_section_title:

   Software for clustering de novo assembled transcripts and counting overlapping reads.

   :homepage: https://github.com/Oshlack/Corset
   :license: GPLv3
   :recipe: /`corset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corset/meta.yaml>`_
   :links: biotools: :biotools:`corset`, doi: :doi:`10.1186/s13059-014-0410-6`

   


.. conda:package:: corset

   |downloads_corset| |docker_corset|

   :versions: 1.07-0, 1.06-1, 1.06-0
   
   :depends libstdcxx-ng: >=4.9
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install corset

   and update with::

      conda update corset

   or use the docker container::

      docker pull quay.io/biocontainers/corset:<tag>

   (see `corset/tags`_ for valid values for ``<tag>``)


.. |downloads_corset| image:: https://img.shields.io/conda/dn/bioconda/corset.svg?style=flat
   :target: https://anaconda.org/bioconda/corset
   :alt:   (downloads)
.. |docker_corset| image:: https://quay.io/repository/biocontainers/corset/status
   :target: https://quay.io/repository/biocontainers/corset
.. _`corset/tags`: https://quay.io/repository/biocontainers/corset?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/corset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/corset/README.html