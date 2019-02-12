:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'showit'
.. highlight: bash

showit
======

.. conda:recipe:: showit
   :replaces_section_title:

   simple and sensible display of images in python

   :homepage: https://github.com/freeman-lab/showit
   :license: MIT
   :recipe: /`showit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/showit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/showit/meta.yaml>`_

   


.. conda:package:: showit

   |downloads_showit| |docker_showit|

   :versions: 1.1.4-0
   
   :depends matplotlib: 
   
   :depends numpy: !=1.13.0
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install showit

   and update with::

      conda update showit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/showit:<tag>

   (see `showit/tags`_ for valid values for ``<tag>``)


.. |downloads_showit| image:: https://img.shields.io/conda/dn/bioconda/showit.svg?style=flat
   :alt:   (downloads)
.. |docker_showit| image:: https://quay.io/repository/biocontainers/showit/status
   :target: https://quay.io/repository/biocontainers/showit
.. _`showit/tags`: https://quay.io/repository/biocontainers/showit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/showit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/showit/README.html