:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'medpy'
.. highlight: bash

medpy
=====

.. conda:recipe:: medpy
   :replaces_section_title:

   Medical image processing in Python

   :homepage: https://github.com/loli/medpy
   :license: LGPL / GNU General Public (GPL)
   :recipe: /`medpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medpy/meta.yaml>`_

   


.. conda:package:: medpy

   |downloads_medpy| |docker_medpy|

   :versions: 0.4.0-1, 0.4.0-0, 0.3.0-0
   
   :depends boost: >=1.70.0,<1.70.1.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends numpy: >=1.11.0
   :depends python: >=3.6,<3.7.0a0
   :depends python_abi: 3.6.* *_cp36m
   :depends scipy: >=1.1.0
   :depends simpleitk: >=1.1.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install medpy

   and update with::

      conda update medpy

   or use the docker container::

      docker pull quay.io/biocontainers/medpy:<tag>

   (see `medpy/tags`_ for valid values for ``<tag>``)


.. |downloads_medpy| image:: https://img.shields.io/conda/dn/bioconda/medpy.svg?style=flat
   :target: https://anaconda.org/bioconda/medpy
   :alt:   (downloads)
.. |docker_medpy| image:: https://quay.io/repository/biocontainers/medpy/status
   :target: https://quay.io/repository/biocontainers/medpy
.. _`medpy/tags`: https://quay.io/repository/biocontainers/medpy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/medpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/medpy/README.html