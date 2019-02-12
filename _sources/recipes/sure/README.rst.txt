:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sure'
.. highlight: bash

sure
====

.. conda:recipe:: sure
   :replaces_section_title:

   utility belt for automated testing in python for python

   :homepage: http://github.com/gabrielfalcao/sure
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`sure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sure/meta.yaml>`_

   


.. conda:package:: sure

   |downloads_sure| |docker_sure|

   :versions: 1.4.11-0, 1.2.24-0
   
   :depends mock: 
   
   :depends python: 
   
   :depends six: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sure

   and update with::

      conda update sure

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sure:<tag>

   (see `sure/tags`_ for valid values for ``<tag>``)


.. |downloads_sure| image:: https://img.shields.io/conda/dn/bioconda/sure.svg?style=flat
   :alt:   (downloads)
.. |docker_sure| image:: https://quay.io/repository/biocontainers/sure/status
   :target: https://quay.io/repository/biocontainers/sure
.. _`sure/tags`: https://quay.io/repository/biocontainers/sure?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sure/README.html