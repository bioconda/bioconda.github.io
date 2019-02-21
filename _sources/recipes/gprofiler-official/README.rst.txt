:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gprofiler-official'
.. highlight: bash

gprofiler-official
==================

.. conda:recipe:: gprofiler-official
   :replaces_section_title:

   Functional enrichment analysis and more via the g\:Profiler toolkit

   :homepage: http://biit.cs.ut.ee/gprofiler
   :license: BSD / BSD License
   :recipe: /`gprofiler-official <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gprofiler-official>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gprofiler-official/meta.yaml>`_

   


.. conda:package:: gprofiler-official

   |downloads_gprofiler-official| |docker_gprofiler-official|

   :versions: 0.2.3-1, 0.2.3-0
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gprofiler-official

   and update with::

      conda update gprofiler-official

   or use the docker container::

      docker pull quay.io/biocontainers/gprofiler-official:<tag>

   (see `gprofiler-official/tags`_ for valid values for ``<tag>``)


.. |downloads_gprofiler-official| image:: https://img.shields.io/conda/dn/bioconda/gprofiler-official.svg?style=flat
   :alt:   (downloads)
.. |docker_gprofiler-official| image:: https://quay.io/repository/biocontainers/gprofiler-official/status
   :target: https://quay.io/repository/biocontainers/gprofiler-official
.. _`gprofiler-official/tags`: https://quay.io/repository/biocontainers/gprofiler-official?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gprofiler-official/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gprofiler-official/README.html