:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chromatiblock'
.. highlight: bash

chromatiblock
=============

.. conda:recipe:: chromatiblock
   :replaces_section_title:
   :noindex:

   Scalable\, whole\-genome visualisation of structural changes in prokaryotes.

   :homepage: http://github.com/mjsull/chromatiblock/
   :license: GPL-3.0-only
   :recipe: /`chromatiblock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromatiblock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromatiblock/meta.yaml>`_

   


.. conda:package:: chromatiblock

   |downloads_chromatiblock| |docker_chromatiblock|

   :versions:
      
      

      ``1.0.0-0``,  ``0.5.1-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.1-0``,  ``0.3.0-0``

      

   
   :depends blast: ``>=2.2``
   :depends cairosvg: 
   :depends python: ``>=3.6``
   :depends sibelia: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chromatiblock

   and update with::

      conda update chromatiblock

   or use the docker container::

      docker pull quay.io/biocontainers/chromatiblock:<tag>

   (see `chromatiblock/tags`_ for valid values for ``<tag>``)


.. |downloads_chromatiblock| image:: https://img.shields.io/conda/dn/bioconda/chromatiblock.svg?style=flat
   :target: https://anaconda.org/bioconda/chromatiblock
   :alt:   (downloads)
.. |docker_chromatiblock| image:: https://quay.io/repository/biocontainers/chromatiblock/status
   :target: https://quay.io/repository/biocontainers/chromatiblock
.. _`chromatiblock/tags`: https://quay.io/repository/biocontainers/chromatiblock?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chromatiblock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chromatiblock/README.html