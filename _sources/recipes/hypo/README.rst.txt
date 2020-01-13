:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hypo'
.. highlight: bash

hypo
====

.. conda:recipe:: hypo
   :replaces_section_title:

   Super Fast and Accurate Polisher for Long Read Genome Assemblies .

   :homepage: https://github.com/kensung-lab/hypo
   :license: GPL-3.0
   :recipe: /`hypo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hypo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hypo/meta.yaml>`_

   


.. conda:package:: hypo

   |downloads_hypo| |docker_hypo|

   :versions: 1.0.0-2, 1.0.0-1, 1.0.0-0
   
   :depends htslib: >=1.10.2,<1.11.0a0
   :depends kmc: >=3.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends openmp: 
   :depends sdsl-lite: >=2.1.1
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hypo

   and update with::

      conda update hypo

   or use the docker container::

      docker pull quay.io/biocontainers/hypo:<tag>

   (see `hypo/tags`_ for valid values for ``<tag>``)


.. |downloads_hypo| image:: https://img.shields.io/conda/dn/bioconda/hypo.svg?style=flat
   :target: https://anaconda.org/bioconda/hypo
   :alt:   (downloads)
.. |docker_hypo| image:: https://quay.io/repository/biocontainers/hypo/status
   :target: https://quay.io/repository/biocontainers/hypo
.. _`hypo/tags`: https://quay.io/repository/biocontainers/hypo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hypo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hypo/README.html