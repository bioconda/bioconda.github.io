:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fpa'
.. highlight: bash

fpa
===

.. conda:recipe:: fpa
   :replaces_section_title:

   Filter Pairwise Alignment filter long read mapping information to save disk space

   :homepage: https://github.com/natir/yacrd
   :license: MIT / MIT
   :recipe: /`fpa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fpa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fpa/meta.yaml>`_

   


.. conda:package:: fpa

   |downloads_fpa| |docker_fpa|

   :versions: 0.4-0, 0.3-0, 0.2-1, 0.1.1-1
   
   :depends bzip2: >=1.0.6,<2.0a0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends xz: >=5.2.4,<5.3.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fpa

   and update with::

      conda update fpa

   or use the docker container::

      docker pull quay.io/biocontainers/fpa:<tag>

   (see `fpa/tags`_ for valid values for ``<tag>``)


.. |downloads_fpa| image:: https://img.shields.io/conda/dn/bioconda/fpa.svg?style=flat
   :alt:   (downloads)
.. |docker_fpa| image:: https://quay.io/repository/biocontainers/fpa/status
   :target: https://quay.io/repository/biocontainers/fpa
.. _`fpa/tags`: https://quay.io/repository/biocontainers/fpa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fpa/README.html