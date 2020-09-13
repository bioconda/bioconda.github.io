:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dammet'
.. highlight: bash

dammet
======

.. conda:recipe:: dammet
   :replaces_section_title:
   :noindex:

   Software to reconstruct methylomes from HTS data underlying and ancient specimen

   :homepage: https://gitlab.com/KHanghoj/DamMet
   :license: MIT license
   :recipe: /`dammet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dammet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dammet/meta.yaml>`_

   


.. conda:package:: dammet

   |downloads_dammet| |docker_dammet|

   :versions:
      
      

      ``1.0.1a-3``,  ``1.0.1a-2``,  ``1.0.1a-1``,  ``1.0.1a-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends libdeflate: ``>=1.6,<1.7.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends ncurses: ``>=6.2,<6.3.0a0``
   :depends nlopt: ``>=2.6.2,<2.6.3.0a0``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dammet

   and update with::

      conda update dammet

   or use the docker container::

      docker pull quay.io/biocontainers/dammet:<tag>

   (see `dammet/tags`_ for valid values for ``<tag>``)


.. |downloads_dammet| image:: https://img.shields.io/conda/dn/bioconda/dammet.svg?style=flat
   :target: https://anaconda.org/bioconda/dammet
   :alt:   (downloads)
.. |docker_dammet| image:: https://quay.io/repository/biocontainers/dammet/status
   :target: https://quay.io/repository/biocontainers/dammet
.. _`dammet/tags`: https://quay.io/repository/biocontainers/dammet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dammet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dammet/README.html