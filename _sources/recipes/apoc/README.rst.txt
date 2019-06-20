:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'apoc'
.. highlight: bash

apoc
====

.. conda:recipe:: apoc
   :replaces_section_title:

   Large\-scale structural comparison of protein pockets

   :homepage: http://cssb.biology.gatech.edu/APoc
   :license: This software is freely available to ALL users.
   :recipe: /`apoc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apoc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apoc/meta.yaml>`_

   


.. conda:package:: apoc

   |downloads_apoc| |docker_apoc|

   :versions: 1b16-1, 1b16-0
   
   :depends libgfortran: >=3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install apoc

   and update with::

      conda update apoc

   or use the docker container::

      docker pull quay.io/biocontainers/apoc:<tag>

   (see `apoc/tags`_ for valid values for ``<tag>``)


.. |downloads_apoc| image:: https://img.shields.io/conda/dn/bioconda/apoc.svg?style=flat
   :target: https://anaconda.org/bioconda/apoc
   :alt:   (downloads)
.. |docker_apoc| image:: https://quay.io/repository/biocontainers/apoc/status
   :target: https://quay.io/repository/biocontainers/apoc
.. _`apoc/tags`: https://quay.io/repository/biocontainers/apoc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/apoc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/apoc/README.html