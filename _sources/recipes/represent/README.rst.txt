:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'represent'
.. highlight: bash

represent
=========

.. conda:recipe:: represent
   :replaces_section_title:

   Create \_\_repr\_\_ automatically or declaratively.

   :homepage: https://github.com/RazerM/represent
   :license: MIT / MIT License
   :recipe: /`represent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/represent>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/represent/meta.yaml>`_

   


.. conda:package:: represent

   |downloads_represent| |docker_represent|

   :versions: 1.5.1-2, 1.5.1-1
   
   :depends python: 
   
   :depends six: >=1.8.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install represent

   and update with::

      conda update represent

   or use the docker container::

      docker pull quay.io/repository/biocontainers/represent:<tag>

   (see `represent/tags`_ for valid values for ``<tag>``)


.. |downloads_represent| image:: https://img.shields.io/conda/dn/bioconda/represent.svg?style=flat
   :alt:   (downloads)
.. |docker_represent| image:: https://quay.io/repository/biocontainers/represent/status
   :target: https://quay.io/repository/biocontainers/represent
.. _`represent/tags`: https://quay.io/repository/biocontainers/represent?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/represent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/represent/README.html