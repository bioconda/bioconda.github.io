:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trf'
.. highlight: bash

trf
===

.. conda:recipe:: trf
   :replaces_section_title:
   :noindex:

   Tandem Repeats Finder is a program to locate and display tandem repeats in DNA sequences.

   :homepage: https://tandem.bu.edu/trf/trf.html
   :license: AGPL-3.0
   :recipe: /`trf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trf/meta.yaml>`_
   :links: biotools: :biotools:`Trf`

   


.. conda:package:: trf

   |downloads_trf| |docker_trf|

   :versions:
      
      

      ``4.09.1-0``,  ``4.09-2``,  ``4.09-1``,  ``4.09-0``,  ``4.07b-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trf

   and update with::

      conda update trf

   or use the docker container::

      docker pull quay.io/biocontainers/trf:<tag>

   (see `trf/tags`_ for valid values for ``<tag>``)


.. |downloads_trf| image:: https://img.shields.io/conda/dn/bioconda/trf.svg?style=flat
   :target: https://anaconda.org/bioconda/trf
   :alt:   (downloads)
.. |docker_trf| image:: https://quay.io/repository/biocontainers/trf/status
   :target: https://quay.io/repository/biocontainers/trf
.. _`trf/tags`: https://quay.io/repository/biocontainers/trf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trf/README.html