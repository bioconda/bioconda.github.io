:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mapcaller'
.. highlight: bash

mapcaller
=========

.. conda:recipe:: mapcaller
   :replaces_section_title:

   MapCaller\: combined short\-read mapper and variant caller

   :homepage: https://github.com/hsinnan75/MapCaller
   :license: MIT
   :recipe: /`mapcaller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapcaller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapcaller/meta.yaml>`_
   :links: doi: :doi:`10.1101/783605`

   An efficient and versatile approach for short\-read mapping and variant identification using high\-throughput sequenced data.


.. conda:package:: mapcaller

   |downloads_mapcaller| |docker_mapcaller|

   :versions: 0.9.9.6-0
   
   :depends boost: >=1.70.0,<1.70.1.0a0
   :depends bzip2: >=1.0.8,<2.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends xz: >=5.2.4,<5.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mapcaller

   and update with::

      conda update mapcaller

   or use the docker container::

      docker pull quay.io/biocontainers/mapcaller:<tag>

   (see `mapcaller/tags`_ for valid values for ``<tag>``)


.. |downloads_mapcaller| image:: https://img.shields.io/conda/dn/bioconda/mapcaller.svg?style=flat
   :target: https://anaconda.org/bioconda/mapcaller
   :alt:   (downloads)
.. |docker_mapcaller| image:: https://quay.io/repository/biocontainers/mapcaller/status
   :target: https://quay.io/repository/biocontainers/mapcaller
.. _`mapcaller/tags`: https://quay.io/repository/biocontainers/mapcaller?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapcaller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapcaller/README.html