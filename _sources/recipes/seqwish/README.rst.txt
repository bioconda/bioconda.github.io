:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqwish'
.. highlight: bash

seqwish
=======

.. conda:recipe:: seqwish
   :replaces_section_title:

   Alignment to variation graph inducer

   :homepage: https://github.com/ekg/seqwish
   :license: MIT
   :recipe: /`seqwish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqwish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqwish/meta.yaml>`_

   


.. conda:package:: seqwish

   |downloads_seqwish| |docker_seqwish|

   :versions: 0.2.1-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends python: >=3.6
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqwish

   and update with::

      conda update seqwish

   or use the docker container::

      docker pull quay.io/biocontainers/seqwish:<tag>

   (see `seqwish/tags`_ for valid values for ``<tag>``)


.. |downloads_seqwish| image:: https://img.shields.io/conda/dn/bioconda/seqwish.svg?style=flat
   :target: https://anaconda.org/bioconda/seqwish
   :alt:   (downloads)
.. |docker_seqwish| image:: https://quay.io/repository/biocontainers/seqwish/status
   :target: https://quay.io/repository/biocontainers/seqwish
.. _`seqwish/tags`: https://quay.io/repository/biocontainers/seqwish?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqwish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqwish/README.html