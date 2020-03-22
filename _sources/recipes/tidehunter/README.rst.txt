:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tidehunter'
.. highlight: bash

tidehunter
==========

.. conda:recipe:: tidehunter
   :replaces_section_title:

   TideHunter\: efficient and sensitive tandem repeat detection from noisy long reads using seed\-and\-chain

   :homepage: https://github.com/yangao07/TideHunter
   :license: GPL
   :recipe: /`tidehunter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tidehunter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tidehunter/meta.yaml>`_

   


.. conda:package:: tidehunter

   |downloads_tidehunter| |docker_tidehunter|

   :versions: 1.2.2-1, 1.2.2-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tidehunter

   and update with::

      conda update tidehunter

   or use the docker container::

      docker pull quay.io/biocontainers/tidehunter:<tag>

   (see `tidehunter/tags`_ for valid values for ``<tag>``)


.. |downloads_tidehunter| image:: https://img.shields.io/conda/dn/bioconda/tidehunter.svg?style=flat
   :target: https://anaconda.org/bioconda/tidehunter
   :alt:   (downloads)
.. |docker_tidehunter| image:: https://quay.io/repository/biocontainers/tidehunter/status
   :target: https://quay.io/repository/biocontainers/tidehunter
.. _`tidehunter/tags`: https://quay.io/repository/biocontainers/tidehunter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tidehunter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tidehunter/README.html