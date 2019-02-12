:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biogridpy'
.. highlight: bash

biogridpy
=========

.. conda:recipe:: biogridpy
   :replaces_section_title:

   Python client for the BioGRID REST API webservice

   :homepage: https://github.com/arvkevi/biogridpy
   :license: MIT / MIT
   :recipe: /`biogridpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biogridpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biogridpy/meta.yaml>`_

   


.. conda:package:: biogridpy

   |downloads_biogridpy| |docker_biogridpy|

   :versions: 0.1.1-1, 0.1.1-0
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biogridpy

   and update with::

      conda update biogridpy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/biogridpy:<tag>

   (see `biogridpy/tags`_ for valid values for ``<tag>``)


.. |downloads_biogridpy| image:: https://img.shields.io/conda/dn/bioconda/biogridpy.svg?style=flat
   :alt:   (downloads)
.. |docker_biogridpy| image:: https://quay.io/repository/biocontainers/biogridpy/status
   :target: https://quay.io/repository/biocontainers/biogridpy
.. _`biogridpy/tags`: https://quay.io/repository/biocontainers/biogridpy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biogridpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biogridpy/README.html