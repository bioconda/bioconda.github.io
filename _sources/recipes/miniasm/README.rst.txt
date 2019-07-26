:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'miniasm'
.. highlight: bash

miniasm
=======

.. conda:recipe:: miniasm
   :replaces_section_title:

   Ultrafast de novo assembly for long noisy reads \(though having no consensus step\)

   :homepage: https://github.com/lh3/miniasm
   :license: MIT
   :recipe: /`miniasm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miniasm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miniasm/meta.yaml>`_

   


.. conda:package:: miniasm

   |downloads_miniasm| |docker_miniasm|

   :versions: 0.3_r179-0, 0.2-0, 0.2_r168-3, 0.2_r168-2, 0.2_r168-1, 0.2_r168-0, 0.2_r159-0, 0.2_r137-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install miniasm

   and update with::

      conda update miniasm

   or use the docker container::

      docker pull quay.io/biocontainers/miniasm:<tag>

   (see `miniasm/tags`_ for valid values for ``<tag>``)


.. |downloads_miniasm| image:: https://img.shields.io/conda/dn/bioconda/miniasm.svg?style=flat
   :target: https://anaconda.org/bioconda/miniasm
   :alt:   (downloads)
.. |docker_miniasm| image:: https://quay.io/repository/biocontainers/miniasm/status
   :target: https://quay.io/repository/biocontainers/miniasm
.. _`miniasm/tags`: https://quay.io/repository/biocontainers/miniasm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/miniasm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/miniasm/README.html