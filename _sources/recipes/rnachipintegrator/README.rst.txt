:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnachipintegrator'
.. highlight: bash

rnachipintegrator
=================

.. conda:recipe:: rnachipintegrator
   :replaces_section_title:

   Analyse genes against peak data\, and vice versa

   :homepage: https://github.com/fls-bioinformatics-core/RnaChipIntegrator
   :documentation: https://rnachipintegrator.readthedocs.io
   
   :license: OTHER / Artistic License
   :recipe: /`rnachipintegrator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnachipintegrator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnachipintegrator/meta.yaml>`_

   RnaChipIntegrator is a utility that performs integrated analyses of \'gene\' data \(a set of genes or other genomic features\) with \'peak\' data \(a set of regions\, for example ChIP peaks\) to identify the genes nearest to each peak\, and vice versa


.. conda:package:: rnachipintegrator

   |downloads_rnachipintegrator| |docker_rnachipintegrator|

   :versions: 1.1.0-0, 1.0.3-1, 1.0.3-0
   
   :depends python: >=2.7,<2.8.0a0
   :depends xlsxwriter: >=0.8.4
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnachipintegrator

   and update with::

      conda update rnachipintegrator

   or use the docker container::

      docker pull quay.io/biocontainers/rnachipintegrator:<tag>

   (see `rnachipintegrator/tags`_ for valid values for ``<tag>``)


.. |downloads_rnachipintegrator| image:: https://img.shields.io/conda/dn/bioconda/rnachipintegrator.svg?style=flat
   :alt:   (downloads)
.. |docker_rnachipintegrator| image:: https://quay.io/repository/biocontainers/rnachipintegrator/status
   :target: https://quay.io/repository/biocontainers/rnachipintegrator
.. _`rnachipintegrator/tags`: https://quay.io/repository/biocontainers/rnachipintegrator?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnachipintegrator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnachipintegrator/README.html