:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'survivor'
.. highlight: bash

survivor
========

.. conda:recipe:: survivor
   :replaces_section_title:

   Toolset for SV simulation\, comparison and filtering

   :homepage: https://github.com/fritzsedlazeck/SURVIVOR
   :license: MIT
   :recipe: /`survivor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/survivor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/survivor/meta.yaml>`_

   


.. conda:package:: survivor

   |downloads_survivor| |docker_survivor|

   :versions: 1.0.5-1, 1.0.3-1, 1.0.3-0, 1.0.0-0
   
   :depends libstdcxx-ng: >=4.9
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install survivor

   and update with::

      conda update survivor

   or use the docker container::

      docker pull quay.io/repository/biocontainers/survivor:<tag>

   (see `survivor/tags`_ for valid values for ``<tag>``)


.. |downloads_survivor| image:: https://img.shields.io/conda/dn/bioconda/survivor.svg?style=flat
   :alt:   (downloads)
.. |docker_survivor| image:: https://quay.io/repository/biocontainers/survivor/status
   :target: https://quay.io/repository/biocontainers/survivor
.. _`survivor/tags`: https://quay.io/repository/biocontainers/survivor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/survivor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/survivor/README.html