:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'carnac-lr'
.. highlight: bash

carnac-lr
=========

.. conda:recipe:: carnac-lr
   :replaces_section_title:

   Clustering coefficient\-based Acquisition of RNA Communities in Long Read

   :homepage: https://github.com/kamimrcht/CARNAC-LR
   :license: AGPL / GNU Affero General Public License
   :recipe: /`carnac-lr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/carnac-lr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/carnac-lr/meta.yaml>`_

   


.. conda:package:: carnac-lr

   |downloads_carnac-lr| |docker_carnac-lr|

   :versions: 1.0.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends python: >=3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install carnac-lr

   and update with::

      conda update carnac-lr

   or use the docker container::

      docker pull quay.io/biocontainers/carnac-lr:<tag>

   (see `carnac-lr/tags`_ for valid values for ``<tag>``)


.. |downloads_carnac-lr| image:: https://img.shields.io/conda/dn/bioconda/carnac-lr.svg?style=flat
   :target: https://anaconda.org/bioconda/carnac-lr
   :alt:   (downloads)
.. |docker_carnac-lr| image:: https://quay.io/repository/biocontainers/carnac-lr/status
   :target: https://quay.io/repository/biocontainers/carnac-lr
.. _`carnac-lr/tags`: https://quay.io/repository/biocontainers/carnac-lr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/carnac-lr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/carnac-lr/README.html