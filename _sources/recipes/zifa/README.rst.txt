:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zifa'
.. highlight: bash

zifa
====

.. conda:recipe:: zifa
   :replaces_section_title:

   Dimensionality reduction for zero\-inflated single\-cell gene expression analysis

   :homepage: https://github.com/epierson9/ZIFA
   :license: MIT / MIT
   :recipe: /`zifa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zifa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zifa/meta.yaml>`_

   


.. conda:package:: zifa

   |downloads_zifa| |docker_zifa|

   :versions: 0.1.0-1, 0.1.0-0
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install zifa

   and update with::

      conda update zifa

   or use the docker container::

      docker pull quay.io/biocontainers/zifa:<tag>

   (see `zifa/tags`_ for valid values for ``<tag>``)


.. |downloads_zifa| image:: https://img.shields.io/conda/dn/bioconda/zifa.svg?style=flat
   :alt:   (downloads)
.. |docker_zifa| image:: https://quay.io/repository/biocontainers/zifa/status
   :target: https://quay.io/repository/biocontainers/zifa
.. _`zifa/tags`: https://quay.io/repository/biocontainers/zifa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zifa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zifa/README.html