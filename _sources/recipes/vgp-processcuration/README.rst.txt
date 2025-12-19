:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vgp-processcuration'
.. highlight: bash

vgp-processcuration
===================

.. conda:recipe:: vgp-processcuration
   :replaces_section_title:
   :noindex:

   ProcessCurated \- Toolkit for processing manually curated genome assemblies

   :homepage: https://github.com/vgl-hub/vgl-curation
   :documentation: https://github.com/vgl-hub/vgl-curation/blob/postcuration_1.0/README.md
   
   :license: MIT / MIT
   :recipe: /`vgp-processcuration <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vgp-processcuration>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vgp-processcuration/meta.yaml>`_

   ProcessCurated is a toolkit for processing manually curated genome assemblies.
   It reconciles AGP files manually curated in PretextView to rename\, reorient\,
   and sort assemblies in preparation for submission. The tool performs three main
   operations\: correcting and splitting AGP files while assigning unlocalized sequences\,
   assigning chromosome names to scaffolds\, and reorienting and renaming sequences
   based on MashMap alignment data.



.. conda:package:: vgp-processcuration

   |downloads_vgp-processcuration| |docker_vgp-processcuration|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends biopython: ``>=1.85``
   :depends natsort: ``>=8.4.0``
   :depends pandas: ``>=2.3``
   :depends python: ``>=3.9``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install vgp-processcuration

   and update with::

      mamba update vgp-processcuration

  To create a new environment, run::

      mamba create --name myenvname vgp-processcuration

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vgp-processcuration:<tag>

   (see `vgp-processcuration/tags`_ for valid values for ``<tag>``)


.. |downloads_vgp-processcuration| image:: https://img.shields.io/conda/dn/bioconda/vgp-processcuration.svg?style=flat
   :target: https://anaconda.org/bioconda/vgp-processcuration
   :alt:   (downloads)
.. |docker_vgp-processcuration| image:: https://quay.io/repository/biocontainers/vgp-processcuration/status
   :target: https://quay.io/repository/biocontainers/vgp-processcuration
.. _`vgp-processcuration/tags`: https://quay.io/repository/biocontainers/vgp-processcuration?tab=tags


.. raw:: html

    <script>
        var package = "vgp-processcuration";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vgp-processcuration/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vgp-processcuration/README.html