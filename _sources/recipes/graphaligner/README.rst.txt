:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graphaligner'
.. highlight: bash

graphaligner
============

.. conda:recipe:: graphaligner
   :replaces_section_title:

   Sequence to graph aligner for long reads

   :homepage: https://github.com/maickrau/GraphAligner
   :license: MIT
   :recipe: /`graphaligner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphaligner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphaligner/meta.yaml>`_

   


.. conda:package:: graphaligner

   |downloads_graphaligner| |docker_graphaligner|

   :versions: 1.0.6-0, 1.0.5-0, 1.0.4-0, 1.0.3-0, 1.0.1-1, 1.0.1-0, 1.0.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install graphaligner

   and update with::

      conda update graphaligner

   or use the docker container::

      docker pull quay.io/biocontainers/graphaligner:<tag>

   (see `graphaligner/tags`_ for valid values for ``<tag>``)


.. |downloads_graphaligner| image:: https://img.shields.io/conda/dn/bioconda/graphaligner.svg?style=flat
   :alt:   (downloads)
.. |docker_graphaligner| image:: https://quay.io/repository/biocontainers/graphaligner/status
   :target: https://quay.io/repository/biocontainers/graphaligner
.. _`graphaligner/tags`: https://quay.io/repository/biocontainers/graphaligner?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphaligner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphaligner/README.html