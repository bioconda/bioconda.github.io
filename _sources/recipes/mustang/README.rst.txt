:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mustang'
.. highlight: bash

mustang
=======

.. conda:recipe:: mustang
   :replaces_section_title:
   :noindex:

   Mustang is a program that implements an algorithm for structural alignment of multiple protein structures.

   :homepage: http://lcb.infotech.monash.edu.au/mustang/
   :license: file
   :recipe: /`mustang <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mustang>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mustang/meta.yaml>`_
   :links: biotools: :biotools:`mustang`, doi: :doi:`10.1002/prot.20921`

   


.. conda:package:: mustang

   |downloads_mustang| |docker_mustang|

   :versions:
      
      

      ``3.2.3-1``,  ``3.2.3-0``

      

   
   :depends libstdcxx-ng: ``>=4.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mustang

   and update with::

      conda update mustang

   or use the docker container::

      docker pull quay.io/biocontainers/mustang:<tag>

   (see `mustang/tags`_ for valid values for ``<tag>``)


.. |downloads_mustang| image:: https://img.shields.io/conda/dn/bioconda/mustang.svg?style=flat
   :target: https://anaconda.org/bioconda/mustang
   :alt:   (downloads)
.. |docker_mustang| image:: https://quay.io/repository/biocontainers/mustang/status
   :target: https://quay.io/repository/biocontainers/mustang
.. _`mustang/tags`: https://quay.io/repository/biocontainers/mustang?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mustang/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mustang/README.html