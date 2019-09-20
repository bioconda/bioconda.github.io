:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vpolo'
.. highlight: bash

vpolo
=====

.. conda:recipe:: vpolo
   :replaces_section_title:

   Support package for Alevin tools

   :homepage: https://github.com/k3yavi/vpolo
   :license: GPL3
   :recipe: /`vpolo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vpolo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vpolo/meta.yaml>`_

   


.. conda:package:: vpolo

   |downloads_vpolo| |docker_vpolo|

   :versions: 0.2.0-0, 0.1.0-0
   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vpolo

   and update with::

      conda update vpolo

   or use the docker container::

      docker pull quay.io/biocontainers/vpolo:<tag>

   (see `vpolo/tags`_ for valid values for ``<tag>``)


.. |downloads_vpolo| image:: https://img.shields.io/conda/dn/bioconda/vpolo.svg?style=flat
   :target: https://anaconda.org/bioconda/vpolo
   :alt:   (downloads)
.. |docker_vpolo| image:: https://quay.io/repository/biocontainers/vpolo/status
   :target: https://quay.io/repository/biocontainers/vpolo
.. _`vpolo/tags`: https://quay.io/repository/biocontainers/vpolo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vpolo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vpolo/README.html