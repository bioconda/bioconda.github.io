:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'suma_package'
.. highlight: bash

suma_package
============

.. conda:recipe:: suma_package
   :replaces_section_title:

   Fast and exact comparison of sequences

   :homepage: http://metabarcoding.org/sumatra
   :license: CeCILL FSLA
   :recipe: /`suma_package <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/suma_package>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/suma_package/meta.yaml>`_

   


.. conda:package:: suma_package

   |downloads_suma_package| |docker_suma_package|

   :versions: 1.0.00-2, 1.0.00-1, 1.0.00-0
   
   :depends libgcc-ng: >=4.9
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install suma_package

   and update with::

      conda update suma_package

   or use the docker container::

      docker pull quay.io/biocontainers/suma_package:<tag>

   (see `suma_package/tags`_ for valid values for ``<tag>``)


.. |downloads_suma_package| image:: https://img.shields.io/conda/dn/bioconda/suma_package.svg?style=flat
   :target: https://anaconda.org/bioconda/suma_package
   :alt:   (downloads)
.. |docker_suma_package| image:: https://quay.io/repository/biocontainers/suma_package/status
   :target: https://quay.io/repository/biocontainers/suma_package
.. _`suma_package/tags`: https://quay.io/repository/biocontainers/suma_package?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/suma_package/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/suma_package/README.html