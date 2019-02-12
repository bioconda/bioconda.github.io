:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dialign-tx'
.. highlight: bash

dialign-tx
==========

.. conda:recipe:: dialign-tx
   :replaces_section_title:

   DIALIGN\-TX is a greedy and progressive approaches for segment\-based multiple sequence alignment

   :homepage: https://dialign-tx.gobics.de
   :license: LGPL
   :recipe: /`dialign-tx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dialign-tx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dialign-tx/meta.yaml>`_

   


.. conda:package:: dialign-tx

   |downloads_dialign-tx| |docker_dialign-tx|

   :versions: 1.0.2-1, 1.0.2-0
   
   :depends libgcc-ng: >=4.9
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dialign-tx

   and update with::

      conda update dialign-tx

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dialign-tx:<tag>

   (see `dialign-tx/tags`_ for valid values for ``<tag>``)


.. |downloads_dialign-tx| image:: https://img.shields.io/conda/dn/bioconda/dialign-tx.svg?style=flat
   :alt:   (downloads)
.. |docker_dialign-tx| image:: https://quay.io/repository/biocontainers/dialign-tx/status
   :target: https://quay.io/repository/biocontainers/dialign-tx
.. _`dialign-tx/tags`: https://quay.io/repository/biocontainers/dialign-tx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dialign-tx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dialign-tx/README.html