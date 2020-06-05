:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wham'
.. highlight: bash

wham
====

.. conda:recipe:: wham
   :replaces_section_title:
   :noindex:

   Structural variant detection and association testing

   :homepage: https://github.com/zeeev/wham
   :license: MIT / MIT
   :recipe: /`wham <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wham>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wham/meta.yaml>`_
   :links: biotools: :biotools:`Wham6216`

   


.. conda:package:: wham

   |downloads_wham| |docker_wham|

   :versions:
      
      

      ``1.8.0.1.2017.05.03-0``,  ``1.8.0-0``,  ``1.7.0.311-1``,  ``1.7.0.311-0``,  ``1.7.0.307-0``,  ``1.7.0.162-0``

      

   
   :depends libgcc-ng: ``>=4.9``
   :depends libstdcxx-ng: ``>=4.9``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wham

   and update with::

      conda update wham

   or use the docker container::

      docker pull quay.io/biocontainers/wham:<tag>

   (see `wham/tags`_ for valid values for ``<tag>``)


.. |downloads_wham| image:: https://img.shields.io/conda/dn/bioconda/wham.svg?style=flat
   :target: https://anaconda.org/bioconda/wham
   :alt:   (downloads)
.. |docker_wham| image:: https://quay.io/repository/biocontainers/wham/status
   :target: https://quay.io/repository/biocontainers/wham
.. _`wham/tags`: https://quay.io/repository/biocontainers/wham?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wham/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wham/README.html