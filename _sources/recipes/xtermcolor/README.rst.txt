:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xtermcolor'
.. highlight: bash

xtermcolor
==========

.. conda:recipe:: xtermcolor
   :replaces_section_title:

   Python library for terminal color support \(including 256\-color support

   :homepage: https://github.com/broadinstitute/xtermcolor
   :license: MIT
   :recipe: /`xtermcolor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xtermcolor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xtermcolor/meta.yaml>`_

   


.. conda:package:: xtermcolor

   |downloads_xtermcolor| |docker_xtermcolor|

   :versions: 1.3-1, 1.3-0
   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xtermcolor

   and update with::

      conda update xtermcolor

   or use the docker container::

      docker pull quay.io/biocontainers/xtermcolor:<tag>

   (see `xtermcolor/tags`_ for valid values for ``<tag>``)


.. |downloads_xtermcolor| image:: https://img.shields.io/conda/dn/bioconda/xtermcolor.svg?style=flat
   :alt:   (downloads)
.. |docker_xtermcolor| image:: https://quay.io/repository/biocontainers/xtermcolor/status
   :target: https://quay.io/repository/biocontainers/xtermcolor
.. _`xtermcolor/tags`: https://quay.io/repository/biocontainers/xtermcolor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xtermcolor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xtermcolor/README.html