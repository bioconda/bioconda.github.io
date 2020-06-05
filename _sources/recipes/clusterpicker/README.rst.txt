:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clusterpicker'
.. highlight: bash

clusterpicker
=============

.. conda:recipe:: clusterpicker
   :replaces_section_title:
   :noindex:

   The Cluster Picker identifies clusters in newick\-formatted trees containing thousands of sequences within a few minutes.

   :homepage: https://github.com/emmahodcroft/cluster-picker-and-cluster-matcher
   :license: GPL / GPLv3
   :recipe: /`clusterpicker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clusterpicker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clusterpicker/meta.yaml>`_

   


.. conda:package:: clusterpicker

   |downloads_clusterpicker| |docker_clusterpicker|

   :versions:
      
      

      ``1.2.5-0``,  ``1.2.3-2``

      

   
   :depends openjdk: ``>=6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clusterpicker

   and update with::

      conda update clusterpicker

   or use the docker container::

      docker pull quay.io/biocontainers/clusterpicker:<tag>

   (see `clusterpicker/tags`_ for valid values for ``<tag>``)


.. |downloads_clusterpicker| image:: https://img.shields.io/conda/dn/bioconda/clusterpicker.svg?style=flat
   :target: https://anaconda.org/bioconda/clusterpicker
   :alt:   (downloads)
.. |docker_clusterpicker| image:: https://quay.io/repository/biocontainers/clusterpicker/status
   :target: https://quay.io/repository/biocontainers/clusterpicker
.. _`clusterpicker/tags`: https://quay.io/repository/biocontainers/clusterpicker?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clusterpicker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clusterpicker/README.html