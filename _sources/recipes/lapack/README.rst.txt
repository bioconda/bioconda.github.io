:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lapack'
.. highlight: bash

lapack
======

.. conda:recipe:: lapack
   :replaces_section_title:

   Linear Algebra PACKage

   :homepage: http://www.netlib.org/lapack
   :license: BSD
   :recipe: /`lapack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lapack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lapack/meta.yaml>`_

   


.. conda:package:: lapack

   |downloads_lapack| |docker_lapack|

   :versions: 3.6.0-2, 3.6.0-1
   
   :depends libgcc: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lapack

   and update with::

      conda update lapack

   or use the docker container::

      docker pull quay.io/repository/biocontainers/lapack:<tag>

   (see `lapack/tags`_ for valid values for ``<tag>``)


.. |downloads_lapack| image:: https://img.shields.io/conda/dn/bioconda/lapack.svg?style=flat
   :alt:   (downloads)
.. |docker_lapack| image:: https://quay.io/repository/biocontainers/lapack/status
   :target: https://quay.io/repository/biocontainers/lapack
.. _`lapack/tags`: https://quay.io/repository/biocontainers/lapack?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lapack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lapack/README.html