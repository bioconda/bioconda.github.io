:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'telseq'
.. highlight: bash

telseq
======

.. conda:recipe:: telseq
   :replaces_section_title:

   A software for calculating telomere length

   :homepage: https://github.com/zd1/telseq
   :license: GPL-3
   :recipe: /`telseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telseq/meta.yaml>`_

   


.. conda:package:: telseq

   |downloads_telseq| |docker_telseq|

   :versions: 0.0.2-1, 0.0.2-0, 0.0.1-1, 0.0.1-0
   
   :depends bamtools: >=2.4.1,<2.4.2.0a0
   
   :depends libgcc-ng: >=7.3.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install telseq

   and update with::

      conda update telseq

   or use the docker container::

      docker pull quay.io/biocontainers/telseq:<tag>

   (see `telseq/tags`_ for valid values for ``<tag>``)


.. |downloads_telseq| image:: https://img.shields.io/conda/dn/bioconda/telseq.svg?style=flat
   :alt:   (downloads)
.. |docker_telseq| image:: https://quay.io/repository/biocontainers/telseq/status
   :target: https://quay.io/repository/biocontainers/telseq
.. _`telseq/tags`: https://quay.io/repository/biocontainers/telseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/telseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/telseq/README.html