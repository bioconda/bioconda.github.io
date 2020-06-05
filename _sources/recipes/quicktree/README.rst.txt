:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quicktree'
.. highlight: bash

quicktree
=========

.. conda:recipe:: quicktree
   :replaces_section_title:
   :noindex:

   Fast implementation of the neighbour\-joining phylogenetic inference method

   :homepage: https://github.com/khowe/quicktree
   :license: Apache-2.0
   :recipe: /`quicktree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quicktree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quicktree/meta.yaml>`_

   


.. conda:package:: quicktree

   |downloads_quicktree| |docker_quicktree|

   :versions:
      
      

      ``2.5-0``,  ``2.4-0``,  ``2.2-1``,  ``2.2-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install quicktree

   and update with::

      conda update quicktree

   or use the docker container::

      docker pull quay.io/biocontainers/quicktree:<tag>

   (see `quicktree/tags`_ for valid values for ``<tag>``)


.. |downloads_quicktree| image:: https://img.shields.io/conda/dn/bioconda/quicktree.svg?style=flat
   :target: https://anaconda.org/bioconda/quicktree
   :alt:   (downloads)
.. |docker_quicktree| image:: https://quay.io/repository/biocontainers/quicktree/status
   :target: https://quay.io/repository/biocontainers/quicktree
.. _`quicktree/tags`: https://quay.io/repository/biocontainers/quicktree?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quicktree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quicktree/README.html