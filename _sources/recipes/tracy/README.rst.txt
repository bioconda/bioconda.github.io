:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tracy'
.. highlight: bash

tracy
=====

.. conda:recipe:: tracy
   :replaces_section_title:

   Basecalling\, alignment\, deconvolution and variant calling for Sanger chromatogram trace files

   :homepage: https://github.com/gear-genomics/tracy
   :license: GPL / GPL-3.0
   :recipe: /`tracy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tracy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tracy/meta.yaml>`_

   


.. conda:package:: tracy

   |downloads_tracy| |docker_tracy|

   :versions: 0.5.2-0, 0.5.1-0, 0.3.10-0, 0.3.8-0, 0.3.7-0, 0.3.6-1, 0.3.6-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tracy

   and update with::

      conda update tracy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/tracy:<tag>

   (see `tracy/tags`_ for valid values for ``<tag>``)


.. |downloads_tracy| image:: https://img.shields.io/conda/dn/bioconda/tracy.svg?style=flat
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