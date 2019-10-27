:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'axiome'
.. highlight: bash

axiome
======

.. conda:recipe:: axiome
   :replaces_section_title:

   AXIOME2\: Automation Extension and Integration of Microbial Ecology

   :homepage: https://github.com/neufeld/AXIOME2
   :license: MIT / MIT License
   :recipe: /`axiome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/axiome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/axiome/meta.yaml>`_

   


.. conda:package:: axiome

   |downloads_axiome| |docker_axiome|

   :versions: 2.0.4-3, 2.0.4-2, 2.0.4-0
   
   :depends npyscreen: 
   :depends python: <3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install axiome

   and update with::

      conda update axiome

   or use the docker container::

      docker pull quay.io/biocontainers/axiome:<tag>

   (see `axiome/tags`_ for valid values for ``<tag>``)


.. |downloads_axiome| image:: https://img.shields.io/conda/dn/bioconda/axiome.svg?style=flat
   :target: https://anaconda.org/bioconda/axiome
   :alt:   (downloads)
.. |docker_axiome| image:: https://quay.io/repository/biocontainers/axiome/status
   :target: https://quay.io/repository/biocontainers/axiome
.. _`axiome/tags`: https://quay.io/repository/biocontainers/axiome?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/axiome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/axiome/README.html