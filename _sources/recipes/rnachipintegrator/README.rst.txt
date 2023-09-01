:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnachipintegrator'
.. highlight: bash

rnachipintegrator
=================

.. conda:recipe:: rnachipintegrator
   :replaces_section_title:
   :noindex:

   Analyse genes against peak data\, and vice versa

   :homepage: https://github.com/fls-bioinformatics-core/RnaChipIntegrator
   :documentation: https://rnachipintegrator.readthedocs.io
   
   :license: OTHER / Artistic License
   :recipe: /`rnachipintegrator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnachipintegrator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnachipintegrator/meta.yaml>`_

   RnaChipIntegrator is a utility that performs integrated analyses of \'gene\' data \(a set of genes or other genomic features\) with \'peak\' data \(a set of regions\, for example ChIP peaks\) to identify the genes nearest to each peak\, and vice versa


.. conda:package:: rnachipintegrator

   |downloads_rnachipintegrator| |docker_rnachipintegrator|

   :versions:
      
      

      ``2.0.0-1``,  ``2.0.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends python: 
   :depends xlsxwriter: ``>=0.8.4``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install rnachipintegrator

   and update with::

      mamba update rnachipintegrator

  To create a new environment, run::

      mamba create --name myenvname rnachipintegrator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rnachipintegrator:<tag>

   (see `rnachipintegrator/tags`_ for valid values for ``<tag>``)


.. |downloads_rnachipintegrator| image:: https://img.shields.io/conda/dn/bioconda/rnachipintegrator.svg?style=flat
   :target: https://anaconda.org/bioconda/rnachipintegrator
   :alt:   (downloads)
.. |docker_rnachipintegrator| image:: https://quay.io/repository/biocontainers/rnachipintegrator/status
   :target: https://quay.io/repository/biocontainers/rnachipintegrator
.. _`rnachipintegrator/tags`: https://quay.io/repository/biocontainers/rnachipintegrator?tab=tags


.. raw:: html

    <script>
        var package = "rnachipintegrator";
        var versions = ["2.0.0","2.0.0","1.2.0","1.1.0","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnachipintegrator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnachipintegrator/README.html