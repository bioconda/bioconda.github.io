:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'disty'
.. highlight: bash

disty
=====

.. conda:recipe:: disty
   :replaces_section_title:
   :noindex:

   Disty McMatrixface \- compute a distance matrix from a core genome alignment file.

   :homepage: https://github.com/c2-d2/disty
   :license: MIT
   :recipe: /`disty <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/disty>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/disty/meta.yaml>`_

   


.. conda:package:: disty

   |downloads_disty| |docker_disty|

   :versions:
      
      

      ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install disty

   and update with::

      conda update disty

   or use the docker container::

      docker pull quay.io/biocontainers/disty:<tag>

   (see `disty/tags`_ for valid values for ``<tag>``)


.. |downloads_disty| image:: https://img.shields.io/conda/dn/bioconda/disty.svg?style=flat
   :target: https://anaconda.org/bioconda/disty
   :alt:   (downloads)
.. |docker_disty| image:: https://quay.io/repository/biocontainers/disty/status
   :target: https://quay.io/repository/biocontainers/disty
.. _`disty/tags`: https://quay.io/repository/biocontainers/disty?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/disty/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/disty/README.html