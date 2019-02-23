:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biolite-tools'
.. highlight: bash

biolite-tools
=============

.. conda:recipe:: biolite-tools
   :replaces_section_title:

   C\+\+ tools for biolite\, a lightweight bioinformatics framework with automated tracking of diagnostics and provenance.

   :homepage: https://bitbucket.org/caseywdunn/biolite
   :license: GPLv3
   :recipe: /`biolite-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biolite-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biolite-tools/meta.yaml>`_

   


.. conda:package:: biolite-tools

   |downloads_biolite-tools| |docker_biolite-tools|

   :versions: 0.4.0-2, 0.4.0-1, 0.4.0-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biolite-tools

   and update with::

      conda update biolite-tools

   or use the docker container::

      docker pull quay.io/biocontainers/biolite-tools:<tag>

   (see `biolite-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_biolite-tools| image:: https://img.shields.io/conda/dn/bioconda/biolite-tools.svg?style=flat
   :alt:   (downloads)
.. |docker_biolite-tools| image:: https://quay.io/repository/biocontainers/biolite-tools/status
   :target: https://quay.io/repository/biocontainers/biolite-tools
.. _`biolite-tools/tags`: https://quay.io/repository/biocontainers/biolite-tools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biolite-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biolite-tools/README.html