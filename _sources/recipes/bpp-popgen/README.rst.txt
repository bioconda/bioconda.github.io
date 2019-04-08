:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bpp-popgen'
.. highlight: bash

bpp-popgen
==========

.. conda:recipe:: bpp-popgen
   :replaces_section_title:

   Bio\+\+ is a set of C\+\+ libraries for Bioinformatics.

   :homepage: https://github.com/BioPP/bpp-popgen
   :license: CeCILL
   :recipe: /`bpp-popgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpp-popgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpp-popgen/meta.yaml>`_

   


.. conda:package:: bpp-popgen

   |downloads_bpp-popgen| |docker_bpp-popgen|

   :versions: 2.4.1-0
   
   :depends bpp-seq: 
   :depends libgcc-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bpp-popgen

   and update with::

      conda update bpp-popgen

   or use the docker container::

      docker pull quay.io/biocontainers/bpp-popgen:<tag>

   (see `bpp-popgen/tags`_ for valid values for ``<tag>``)


.. |downloads_bpp-popgen| image:: https://img.shields.io/conda/dn/bioconda/bpp-popgen.svg?style=flat
   :alt:   (downloads)
.. |docker_bpp-popgen| image:: https://quay.io/repository/biocontainers/bpp-popgen/status
   :target: https://quay.io/repository/biocontainers/bpp-popgen
.. _`bpp-popgen/tags`: https://quay.io/repository/biocontainers/bpp-popgen?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bpp-popgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bpp-popgen/README.html