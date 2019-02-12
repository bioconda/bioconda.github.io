:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntcard'
.. highlight: bash

ntcard
======

.. conda:recipe:: ntcard
   :replaces_section_title:

   Estimating k\-mer coverage histogram of genomics data

   :homepage: https://github.com/bcgsc/ntCard
   :license: GPL-3.0
   :recipe: /`ntcard <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntcard>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntcard/meta.yaml>`_

   


.. conda:package:: ntcard

   |downloads_ntcard| |docker_ntcard|

   :versions: 1.0.0-2, 1.0.0-1, 1.0.0-0
   
   :depends libstdcxx-ng: >=4.9
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ntcard

   and update with::

      conda update ntcard

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ntcard:<tag>

   (see `ntcard/tags`_ for valid values for ``<tag>``)


.. |downloads_ntcard| image:: https://img.shields.io/conda/dn/bioconda/ntcard.svg?style=flat
   :alt:   (downloads)
.. |docker_ntcard| image:: https://quay.io/repository/biocontainers/ntcard/status
   :target: https://quay.io/repository/biocontainers/ntcard
.. _`ntcard/tags`: https://quay.io/repository/biocontainers/ntcard?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntcard/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntcard/README.html