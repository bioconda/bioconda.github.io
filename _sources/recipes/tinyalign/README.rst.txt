:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tinyalign'
.. highlight: bash

tinyalign
=========

.. conda:recipe:: tinyalign
   :replaces_section_title:
   :noindex:

   A small Python module providing edit distance and Hamming distance computation.

   :homepage: https://github.com/marcelm/tinyalign/
   :license: MIT License
   :recipe: /`tinyalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tinyalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tinyalign/meta.yaml>`_

   


.. conda:package:: tinyalign

   |downloads_tinyalign| |docker_tinyalign|

   :versions:
      
      

      ``0.2-1``,  ``0.2-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tinyalign

   and update with::

      conda update tinyalign

   or use the docker container::

      docker pull quay.io/biocontainers/tinyalign:<tag>

   (see `tinyalign/tags`_ for valid values for ``<tag>``)


.. |downloads_tinyalign| image:: https://img.shields.io/conda/dn/bioconda/tinyalign.svg?style=flat
   :target: https://anaconda.org/bioconda/tinyalign
   :alt:   (downloads)
.. |docker_tinyalign| image:: https://quay.io/repository/biocontainers/tinyalign/status
   :target: https://quay.io/repository/biocontainers/tinyalign
.. _`tinyalign/tags`: https://quay.io/repository/biocontainers/tinyalign?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tinyalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tinyalign/README.html