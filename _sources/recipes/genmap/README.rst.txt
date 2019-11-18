:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genmap'
.. highlight: bash

genmap
======

.. conda:recipe:: genmap
   :replaces_section_title:

   Fast computation of genome mappability.

   :homepage: https://github.com/cpockrandt/genmap
   :license: BSD
   :recipe: /`genmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genmap/meta.yaml>`_

   


.. conda:package:: genmap

   |downloads_genmap| |docker_genmap|

   :versions: 1.1.0-0, 1.0.2-1, 1.0.2-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genmap

   and update with::

      conda update genmap

   or use the docker container::

      docker pull quay.io/biocontainers/genmap:<tag>

   (see `genmap/tags`_ for valid values for ``<tag>``)


.. |downloads_genmap| image:: https://img.shields.io/conda/dn/bioconda/genmap.svg?style=flat
   :target: https://anaconda.org/bioconda/genmap
   :alt:   (downloads)
.. |docker_genmap| image:: https://quay.io/repository/biocontainers/genmap/status
   :target: https://quay.io/repository/biocontainers/genmap
.. _`genmap/tags`: https://quay.io/repository/biocontainers/genmap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genmap/README.html