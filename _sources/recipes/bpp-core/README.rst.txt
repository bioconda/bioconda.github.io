:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bpp-core'
.. highlight: bash

bpp-core
========

.. conda:recipe:: bpp-core
   :replaces_section_title:

   Bio\+\+ is a set of C\+\+ libraries for Bioinformatics.

   :homepage: https://github.com/BioPP/bpp-core
   :license: CeCILL
   :recipe: /`bpp-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpp-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpp-core/meta.yaml>`_

   


.. conda:package:: bpp-core

   |downloads_bpp-core| |docker_bpp-core|

   :versions: 2.4.1-1, 2.4.1-0, 2.2.0-1, 2.2.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bpp-core

   and update with::

      conda update bpp-core

   or use the docker container::

      docker pull quay.io/biocontainers/bpp-core:<tag>

   (see `bpp-core/tags`_ for valid values for ``<tag>``)


.. |downloads_bpp-core| image:: https://img.shields.io/conda/dn/bioconda/bpp-core.svg?style=flat
   :target: https://anaconda.org/bioconda/bpp-core
   :alt:   (downloads)
.. |docker_bpp-core| image:: https://quay.io/repository/biocontainers/bpp-core/status
   :target: https://quay.io/repository/biocontainers/bpp-core
.. _`bpp-core/tags`: https://quay.io/repository/biocontainers/bpp-core?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bpp-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bpp-core/README.html