:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'teloclip'
.. highlight: bash

teloclip
========

.. conda:recipe:: teloclip
   :replaces_section_title:

   A tool for the recovery of unassembled telomeres from soft\-clipped read alignments.

   :homepage: https://github.com/Adamtaranto/teloclip
   :license: MIT / MIT License
   :recipe: /`teloclip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/teloclip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/teloclip/meta.yaml>`_

   


.. conda:package:: teloclip

   |downloads_teloclip| |docker_teloclip|

   :versions: 0.0.3-1, 0.0.3-0, 0.0.2-0
   
   :depends python: >=3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install teloclip

   and update with::

      conda update teloclip

   or use the docker container::

      docker pull quay.io/biocontainers/teloclip:<tag>

   (see `teloclip/tags`_ for valid values for ``<tag>``)


.. |downloads_teloclip| image:: https://img.shields.io/conda/dn/bioconda/teloclip.svg?style=flat
   :target: https://anaconda.org/bioconda/teloclip
   :alt:   (downloads)
.. |docker_teloclip| image:: https://quay.io/repository/biocontainers/teloclip/status
   :target: https://quay.io/repository/biocontainers/teloclip
.. _`teloclip/tags`: https://quay.io/repository/biocontainers/teloclip?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/teloclip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/teloclip/README.html