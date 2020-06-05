:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trackhub'
.. highlight: bash

trackhub
========

.. conda:recipe:: trackhub
   :replaces_section_title:
   :noindex:

   Create and manage UCSC track hubs from Python

   :homepage: http://github.com/daler/trackhub
   :license: MIT
   :recipe: /`trackhub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trackhub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trackhub/meta.yaml>`_

   


.. conda:package:: trackhub

   |downloads_trackhub| |docker_trackhub|

   :versions:
      
      

      ``0.2.4-1``,  ``0.2.4-0``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends docutils: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trackhub

   and update with::

      conda update trackhub

   or use the docker container::

      docker pull quay.io/biocontainers/trackhub:<tag>

   (see `trackhub/tags`_ for valid values for ``<tag>``)


.. |downloads_trackhub| image:: https://img.shields.io/conda/dn/bioconda/trackhub.svg?style=flat
   :target: https://anaconda.org/bioconda/trackhub
   :alt:   (downloads)
.. |docker_trackhub| image:: https://quay.io/repository/biocontainers/trackhub/status
   :target: https://quay.io/repository/biocontainers/trackhub
.. _`trackhub/tags`: https://quay.io/repository/biocontainers/trackhub?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trackhub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trackhub/README.html