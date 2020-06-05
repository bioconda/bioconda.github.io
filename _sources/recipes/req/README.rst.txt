:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'req'
.. highlight: bash

req
===

.. conda:recipe:: req
   :replaces_section_title:
   :noindex:

   Estimating the rate of elementary quartets \(REQ\) of each internal branch of a phylogenetic tree from a distance matrix

   :homepage: https://research.pasteur.fr/fr/tool/r%CE%B5q-assessing-branch-supports-o%C6%92-a-distance-based-phylogenetic-tree-with-the-rate-o%C6%92-elementary-quartets/
   :license: GPL / GPLv3
   :recipe: /`req <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/req>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/req/meta.yaml>`_

   


.. conda:package:: req

   |downloads_req| |docker_req|

   :versions:
      
      

      ``1.3.190304ac-0``,  ``v1.3.190304ac-1``,  ``v1.3.190304ac-0``

      

   
   :depends openjdk: ``>=8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install req

   and update with::

      conda update req

   or use the docker container::

      docker pull quay.io/biocontainers/req:<tag>

   (see `req/tags`_ for valid values for ``<tag>``)


.. |downloads_req| image:: https://img.shields.io/conda/dn/bioconda/req.svg?style=flat
   :target: https://anaconda.org/bioconda/req
   :alt:   (downloads)
.. |docker_req| image:: https://quay.io/repository/biocontainers/req/status
   :target: https://quay.io/repository/biocontainers/req
.. _`req/tags`: https://quay.io/repository/biocontainers/req?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/req/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/req/README.html