:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hcluster_sg'
.. highlight: bash

hcluster_sg
===========

.. conda:recipe:: hcluster_sg
   :replaces_section_title:

   A tool for hierarchically clustering on a sparse graph

   :homepage: https://github.com/douglasgscofield/hcluster
   :license: GPLv2
   :recipe: /`hcluster_sg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hcluster_sg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hcluster_sg/meta.yaml>`_

   


.. conda:package:: hcluster_sg

   |downloads_hcluster_sg| |docker_hcluster_sg|

   :versions: 0.5.1-2, 0.5.1-1, 0.5.1-0
   
   :depends libstdcxx-ng: >=4.9
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hcluster_sg

   and update with::

      conda update hcluster_sg

   or use the docker container::

      docker pull quay.io/biocontainers/hcluster_sg:<tag>

   (see `hcluster_sg/tags`_ for valid values for ``<tag>``)


.. |downloads_hcluster_sg| image:: https://img.shields.io/conda/dn/bioconda/hcluster_sg.svg?style=flat
   :alt:   (downloads)
.. |docker_hcluster_sg| image:: https://quay.io/repository/biocontainers/hcluster_sg/status
   :target: https://quay.io/repository/biocontainers/hcluster_sg
.. _`hcluster_sg/tags`: https://quay.io/repository/biocontainers/hcluster_sg?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hcluster_sg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hcluster_sg/README.html