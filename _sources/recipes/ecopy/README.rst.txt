:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ecopy'
.. highlight: bash

ecopy
=====

.. conda:recipe:: ecopy
   :replaces_section_title:

   EcoPy\: Ecological Data Analysis in Python

   :homepage: https://github.com/Auerilas/ecopy
   :license: MIT / MIT License
   :recipe: /`ecopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ecopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ecopy/meta.yaml>`_

   


.. conda:package:: ecopy

   |downloads_ecopy| |docker_ecopy|

   :versions: 0.1.2.2-1, 0.1.2.2-0, 0.1.2-0
   
   :depends cython: 
   :depends libgcc-ng: >=4.9
   :depends matplotlib: >=1.3.1
   :depends numpy: >=1.7
   :depends pandas: >=0.13
   :depends patsy: >=0.3.0
   :depends python: >=2.7,<2.8.0a0
   :depends scipy: >=0.14
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ecopy

   and update with::

      conda update ecopy

   or use the docker container::

      docker pull quay.io/biocontainers/ecopy:<tag>

   (see `ecopy/tags`_ for valid values for ``<tag>``)


.. |downloads_ecopy| image:: https://img.shields.io/conda/dn/bioconda/ecopy.svg?style=flat
   :target: https://anaconda.org/bioconda/ecopy
   :alt:   (downloads)
.. |docker_ecopy| image:: https://quay.io/repository/biocontainers/ecopy/status
   :target: https://quay.io/repository/biocontainers/ecopy
.. _`ecopy/tags`: https://quay.io/repository/biocontainers/ecopy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ecopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ecopy/README.html