:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyrle'
.. highlight: bash

pyrle
=====

.. conda:recipe:: pyrle
   :replaces_section_title:

   Genomic Rle\-objects for Python

   :homepage: https://github.com/endrebak/pyrle
   :license: MIT
   :recipe: /`pyrle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrle/meta.yaml>`_

   


.. conda:package:: pyrle

   |downloads_pyrle| |docker_pyrle|

   :versions: 0.0.26-0, 0.0.25-0, 0.0.24-1, 0.0.24-0, 0.0.23-0
   
   :depends libgcc-ng: >=7.3.0
   :depends natsort: 
   :depends numpy: 
   :depends pandas: 
   :depends python: >=3.6,<3.7.0a0
   :depends tabulate: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyrle

   and update with::

      conda update pyrle

   or use the docker container::

      docker pull quay.io/biocontainers/pyrle:<tag>

   (see `pyrle/tags`_ for valid values for ``<tag>``)


.. |downloads_pyrle| image:: https://img.shields.io/conda/dn/bioconda/pyrle.svg?style=flat
   :target: https://anaconda.org/bioconda/pyrle
   :alt:   (downloads)
.. |docker_pyrle| image:: https://quay.io/repository/biocontainers/pyrle/status
   :target: https://quay.io/repository/biocontainers/pyrle
.. _`pyrle/tags`: https://quay.io/repository/biocontainers/pyrle?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyrle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyrle/README.html