:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kronik'
.. highlight: bash

kronik
======

.. conda:recipe:: kronik
   :replaces_section_title:
   :noindex:

   Utility for processing Hardklor features to find candidate peptides by chromatographic profiling

   :homepage: https://github.com/mhoopmann/kronik
   :license: Apache License, Version 2.0
   :recipe: /`kronik <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kronik>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kronik/meta.yaml>`_
   :links: doi: :doi:`10.1002/0471250953.bi1318s37`

   


.. conda:package:: kronik

   |downloads_kronik| |docker_kronik|

   :versions:
      
      

      ``2.20-1``,  ``2.20-0``

      

   
   :depends libstdcxx-ng: ``>=4.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kronik

   and update with::

      conda update kronik

   or use the docker container::

      docker pull quay.io/biocontainers/kronik:<tag>

   (see `kronik/tags`_ for valid values for ``<tag>``)


.. |downloads_kronik| image:: https://img.shields.io/conda/dn/bioconda/kronik.svg?style=flat
   :target: https://anaconda.org/bioconda/kronik
   :alt:   (downloads)
.. |docker_kronik| image:: https://quay.io/repository/biocontainers/kronik/status
   :target: https://quay.io/repository/biocontainers/kronik
.. _`kronik/tags`: https://quay.io/repository/biocontainers/kronik?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kronik/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kronik/README.html