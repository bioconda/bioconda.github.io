:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'subread'
.. highlight: bash

subread
=======

.. conda:recipe:: subread
   :replaces_section_title:

   High\-performance read alignment\, quantification\, and mutation discovery

   :homepage: http://subread.sourceforge.net/
   :license: GPLv3
   :recipe: /`subread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/subread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/subread/meta.yaml>`_
   :links: biotools: :biotools:`subread`, doi: :doi:`10.1093/nar/gkt214`

   


.. conda:package:: subread

   |downloads_subread| |docker_subread|

   :versions: 1.6.3-1, 1.6.3-0, 1.6.2-0, 1.6.1-1, 1.6.1-0, 1.6.0-2, 1.6.0-1, 1.6.0-0, 1.5.3-1, 1.5.3-0, 1.5.2-0, 1.5.0.post3-0, 1.5.0-0, 1.5.0p3-0, 1.4.6p5-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install subread

   and update with::

      conda update subread

   or use the docker container::

      docker pull quay.io/repository/biocontainers/subread:<tag>

   (see `subread/tags`_ for valid values for ``<tag>``)


.. |downloads_subread| image:: https://img.shields.io/conda/dn/bioconda/subread.svg?style=flat
   :alt:   (downloads)
.. |docker_subread| image:: https://quay.io/repository/biocontainers/subread/status
   :target: https://quay.io/repository/biocontainers/subread
.. _`subread/tags`: https://quay.io/repository/biocontainers/subread?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/subread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/subread/README.html