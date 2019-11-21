:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biowdl-input-converter'
.. highlight: bash

biowdl-input-converter
======================

.. conda:recipe:: biowdl-input-converter
   :replaces_section_title:

   Converting various input formats into WDL structs for BioWDL pipelines.

   :homepage: https://github.com/biowdl/biowdl-input-converter
   :documentation: https://biowdl-input-converter.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`biowdl-input-converter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biowdl-input-converter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biowdl-input-converter/meta.yaml>`_

   


.. conda:package:: biowdl-input-converter

   |downloads_biowdl-input-converter| |docker_biowdl-input-converter|

   :versions: 0.2.1-0, 0.2.0-0, 0.1.0-0
   
   :depends python: >=3.7
   :depends pyyaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biowdl-input-converter

   and update with::

      conda update biowdl-input-converter

   or use the docker container::

      docker pull quay.io/biocontainers/biowdl-input-converter:<tag>

   (see `biowdl-input-converter/tags`_ for valid values for ``<tag>``)


.. |downloads_biowdl-input-converter| image:: https://img.shields.io/conda/dn/bioconda/biowdl-input-converter.svg?style=flat
   :target: https://anaconda.org/bioconda/biowdl-input-converter
   :alt:   (downloads)
.. |docker_biowdl-input-converter| image:: https://quay.io/repository/biocontainers/biowdl-input-converter/status
   :target: https://quay.io/repository/biocontainers/biowdl-input-converter
.. _`biowdl-input-converter/tags`: https://quay.io/repository/biocontainers/biowdl-input-converter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biowdl-input-converter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biowdl-input-converter/README.html