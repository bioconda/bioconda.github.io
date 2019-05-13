:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transrate-tools'
.. highlight: bash

transrate-tools
===============

.. conda:recipe:: transrate-tools
   :replaces_section_title:

   Command\-line tools used by transrate for processing bam files.

   :homepage: https://github.com/blahah/transrate-tools
   :license: MIT
   :recipe: /`transrate-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transrate-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transrate-tools/meta.yaml>`_

   


.. conda:package:: transrate-tools

   |downloads_transrate-tools| |docker_transrate-tools|

   :versions: 1.0.0-5, 1.0.0-4, 1.0.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install transrate-tools

   and update with::

      conda update transrate-tools

   or use the docker container::

      docker pull quay.io/biocontainers/transrate-tools:<tag>

   (see `transrate-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_transrate-tools| image:: https://img.shields.io/conda/dn/bioconda/transrate-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/transrate-tools
   :alt:   (downloads)
.. |docker_transrate-tools| image:: https://quay.io/repository/biocontainers/transrate-tools/status
   :target: https://quay.io/repository/biocontainers/transrate-tools
.. _`transrate-tools/tags`: https://quay.io/repository/biocontainers/transrate-tools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transrate-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transrate-tools/README.html