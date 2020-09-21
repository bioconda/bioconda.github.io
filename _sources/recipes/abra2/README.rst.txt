:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abra2'
.. highlight: bash

abra2
=====

.. conda:recipe:: abra2
   :replaces_section_title:
   :noindex:

   ABRA2 is an updated implementation of ABRA

   :homepage: https://github.com/mozack/abra2
   :license: MIT
   :recipe: /`abra2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abra2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abra2/meta.yaml>`_

   


.. conda:package:: abra2

   |downloads_abra2| |docker_abra2|

   :versions:
      
      

      ``2.23-0``,  ``2.22-0``,  ``2.20-0``

      

   
   :depends coreutils: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends openjdk: ``>=8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install abra2

   and update with::

      conda update abra2

   or use the docker container::

      docker pull quay.io/biocontainers/abra2:<tag>

   (see `abra2/tags`_ for valid values for ``<tag>``)


.. |downloads_abra2| image:: https://img.shields.io/conda/dn/bioconda/abra2.svg?style=flat
   :target: https://anaconda.org/bioconda/abra2
   :alt:   (downloads)
.. |docker_abra2| image:: https://quay.io/repository/biocontainers/abra2/status
   :target: https://quay.io/repository/biocontainers/abra2
.. _`abra2/tags`: https://quay.io/repository/biocontainers/abra2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abra2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abra2/README.html