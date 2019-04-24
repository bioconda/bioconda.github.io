:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bpp-phyl'
.. highlight: bash

bpp-phyl
========

.. conda:recipe:: bpp-phyl
   :replaces_section_title:

   Bio\+\+ is a set of C\+\+ libraries for Bioinformatics.

   :homepage: https://github.com/BioPP/bpp-phyl
   :license: CeCILL
   :recipe: /`bpp-phyl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpp-phyl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpp-phyl/meta.yaml>`_

   


.. conda:package:: bpp-phyl

   |downloads_bpp-phyl| |docker_bpp-phyl|

   :versions: 2.4.1-0, 2.2.0-1, 2.2.0-0
   
   :depends bpp-seq: 
   :depends libgcc-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bpp-phyl

   and update with::

      conda update bpp-phyl

   or use the docker container::

      docker pull quay.io/biocontainers/bpp-phyl:<tag>

   (see `bpp-phyl/tags`_ for valid values for ``<tag>``)


.. |downloads_bpp-phyl| image:: https://img.shields.io/conda/dn/bioconda/bpp-phyl.svg?style=flat
   :alt:   (downloads)
.. |docker_bpp-phyl| image:: https://quay.io/repository/biocontainers/bpp-phyl/status
   :target: https://quay.io/repository/biocontainers/bpp-phyl
.. _`bpp-phyl/tags`: https://quay.io/repository/biocontainers/bpp-phyl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bpp-phyl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bpp-phyl/README.html