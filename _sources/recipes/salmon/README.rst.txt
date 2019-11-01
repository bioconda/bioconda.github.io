:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'salmon'
.. highlight: bash

salmon
======

.. conda:recipe:: salmon
   :replaces_section_title:

   Highly\-accurate \& wicked fast transcript\-level quantification from RNA\-seq reads using lightweight alignments

   :homepage: https://github.com/COMBINE-lab/salmon
   :license: GPLv3
   :recipe: /`salmon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salmon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salmon/meta.yaml>`_
   :links: biotools: :biotools:`salmon`, doi: :doi:`10.1038/nmeth.4197`

   


.. conda:package:: salmon

   |downloads_salmon| |docker_salmon|

   :versions: 1.0.0-0, 0.15.0-0, 0.14.2-0, 0.14.1-2, 0.14.1-1, 0.14.1-0, 0.14.0-1, 0.14.0-0, 0.13.1-0, 0.13.0-2, 0.13.0-1, 0.12.0-1, 0.11.3-2, 0.11.3-1, 0.11.2-0, 0.11.1-0, 0.11.0-0, 0.10.2-3, 0.10.2-1, 0.10.1-1, 0.10.0-1, 0.9.1-1, 0.9.1-0, 0.9.0-0, 0.8.2-1, 0.8.2-0, 0.8.1-0, 0.8.0-0, 0.7.2-3, 0.7.2-2, 0.6.0-2, 0.6.0-1, 0.6.0-0, 0.5.1-0
   
   :depends bzip2: >=1.0.8,<2.0a0
   :depends icu: >=64.2,<65.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends tbb: >=2019.9
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install salmon

   and update with::

      conda update salmon

   or use the docker container::

      docker pull quay.io/biocontainers/salmon:<tag>

   (see `salmon/tags`_ for valid values for ``<tag>``)


.. |downloads_salmon| image:: https://img.shields.io/conda/dn/bioconda/salmon.svg?style=flat
   :target: https://anaconda.org/bioconda/salmon
   :alt:   (downloads)
.. |docker_salmon| image:: https://quay.io/repository/biocontainers/salmon/status
   :target: https://quay.io/repository/biocontainers/salmon
.. _`salmon/tags`: https://quay.io/repository/biocontainers/salmon?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/salmon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/salmon/README.html