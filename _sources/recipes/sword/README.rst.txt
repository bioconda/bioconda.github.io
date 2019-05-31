:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sword'
.. highlight: bash

sword
=====

.. conda:recipe:: sword
   :replaces_section_title:

   SWORD \- a highly efficient protein database search

   :homepage: https://github.com/rvaser/sword
   :license: GPL3
   :recipe: /`sword <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sword>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sword/meta.yaml>`_

   


.. conda:package:: sword

   |downloads_sword| |docker_sword|

   :versions: 1.0.3-0, 1.0.1-0, 1.0.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sword

   and update with::

      conda update sword

   or use the docker container::

      docker pull quay.io/biocontainers/sword:<tag>

   (see `sword/tags`_ for valid values for ``<tag>``)


.. |downloads_sword| image:: https://img.shields.io/conda/dn/bioconda/sword.svg?style=flat
   :target: https://anaconda.org/bioconda/sword
   :alt:   (downloads)
.. |docker_sword| image:: https://quay.io/repository/biocontainers/sword/status
   :target: https://quay.io/repository/biocontainers/sword
.. _`sword/tags`: https://quay.io/repository/biocontainers/sword?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sword/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sword/README.html