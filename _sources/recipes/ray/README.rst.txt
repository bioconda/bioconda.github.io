:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ray'
.. highlight: bash

ray
===

.. conda:recipe:: ray
   :replaces_section_title:

   Parallel genome assemblies for parallel DNA sequencing

   :homepage: http://denovoassembler.sourceforge.net/index.html
   :license: GPL3
   :recipe: /`ray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ray/meta.yaml>`_
   :links: biotools: :biotools:`ray`, doi: :doi:`10.1186/gb-2012-13-12-r122`

   


.. conda:package:: ray

   |downloads_ray| |docker_ray|

   :versions: 2.3.1-2, 2.3.1-1, 2.3.1-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends openmpi: >=4.0.2,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ray

   and update with::

      conda update ray

   or use the docker container::

      docker pull quay.io/biocontainers/ray:<tag>

   (see `ray/tags`_ for valid values for ``<tag>``)


.. |downloads_ray| image:: https://img.shields.io/conda/dn/bioconda/ray.svg?style=flat
   :target: https://anaconda.org/bioconda/ray
   :alt:   (downloads)
.. |docker_ray| image:: https://quay.io/repository/biocontainers/ray/status
   :target: https://quay.io/repository/biocontainers/ray
.. _`ray/tags`: https://quay.io/repository/biocontainers/ray?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ray/README.html