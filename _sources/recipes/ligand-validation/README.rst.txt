:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ligand-validation'
.. highlight: bash

ligand-validation
=================

.. conda:recipe:: ligand-validation
   :replaces_section_title:
   :noindex:

   Extract ligand and binding site information from PDB X\-ray validation reports

   :homepage: https://git.scicore.unibas.ch/schwede/ligand-validation
   :documentation: https://git.scicore.unibas.ch/schwede/ligand-validation/-/blob/master/README.md
   
   :license: Apache-2.0
   :recipe: /`ligand-validation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ligand-validation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ligand-validation/meta.yaml>`_

   This project contains script for the validation of the quality of a PDB entry\, ligand and binding site
   based on the PDB Validation pipeline.



.. conda:package:: ligand-validation

   |downloads_ligand-validation| |docker_ligand-validation|

   :versions:
      
      

      ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends lxml: 
   :depends mmcif: 
   :depends openstructure: 
   :depends pandas: 
   :depends python: 
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

      mamba install ligand-validation

   and update with::

      mamba update ligand-validation

  To create a new environment, run::

      mamba create --name myenvname ligand-validation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ligand-validation:<tag>

   (see `ligand-validation/tags`_ for valid values for ``<tag>``)


.. |downloads_ligand-validation| image:: https://img.shields.io/conda/dn/bioconda/ligand-validation.svg?style=flat
   :target: https://anaconda.org/bioconda/ligand-validation
   :alt:   (downloads)
.. |docker_ligand-validation| image:: https://quay.io/repository/biocontainers/ligand-validation/status
   :target: https://quay.io/repository/biocontainers/ligand-validation
.. _`ligand-validation/tags`: https://quay.io/repository/biocontainers/ligand-validation?tab=tags


.. raw:: html

    <script>
        var package = "ligand-validation";
        var versions = ["0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ligand-validation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ligand-validation/README.html