:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tracy'
.. highlight: bash

tracy
=====

.. conda:recipe:: tracy
   :replaces_section_title:

   Basecalling\, alignment\, assembly and deconvolution of Sanger chromatogram trace files

   :homepage: https://github.com/gear-genomics/tracy
   :license: GPLv3
   :recipe: /`tracy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tracy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tracy/meta.yaml>`_

   


.. conda:package:: tracy

   |downloads_tracy| |docker_tracy|

   :versions: 0.5.3-1, 0.5.3-0, 0.5.2-0, 0.5.1-0, 0.3.10-0, 0.3.8-0, 0.3.7-0, 0.3.6-1, 0.3.6-0
   
   :depends boost: >=1.68.0,<1.68.1.0a0
   :depends bzip2: >=1.0.6,<2.0a0
   :depends htslib: >=1.9,<1.10.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends nlohmann_json: 
   :depends sdsl-lite: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tracy

   and update with::

      conda update tracy

   or use the docker container::

      docker pull quay.io/biocontainers/tracy:<tag>

   (see `tracy/tags`_ for valid values for ``<tag>``)


.. |downloads_tracy| image:: https://img.shields.io/conda/dn/bioconda/tracy.svg?style=flat
   :target: https://anaconda.org/bioconda/tracy
   :alt:   (downloads)
.. |docker_tracy| image:: https://quay.io/repository/biocontainers/tracy/status
   :target: https://quay.io/repository/biocontainers/tracy
.. _`tracy/tags`: https://quay.io/repository/biocontainers/tracy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tracy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tracy/README.html