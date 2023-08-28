:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_structure_manager'
.. highlight: bash

biobb_structure_manager
=======================

.. conda:recipe:: biobb_structure_manager
   :replaces_section_title:
   :noindex:

   BioBB\_structure\_manager is a library to efficiently load and process biomolecular 3D structures.

   :homepage: https://github.com/bioexcel/BioBB_structure_manager
   :license: APACHE / Apache Software License
   :recipe: /`biobb_structure_manager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_structure_manager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_structure_manager/meta.yaml>`_

   \[\!\[Codacy Badge\]\(https\:\/\/api.codacy.com\/project\/badge\/Grade\/3dbc32af83244f1fba8961cfe059ae37\)\]\(https\:\/\/www.codacy.com\/app\/jlgelpi\/structure\_manager\?utm\_source\=mmb.irbbarcelona.org\&amp\;utm\_medium\=referral\&amp\;utm\_content\=gitlab\/BioExcel\/structure\_manager\&amp\;utm\_campaign\=Badge\_Grade\)

   \#\#\# Structure Manager package
   Python package to manage 3D structures. Wraps Bio.PDB with additional features.



.. conda:package:: biobb_structure_manager

   |downloads_biobb_structure_manager| |docker_biobb_structure_manager|

   :versions:
      
      

      ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``1.0.0-0``,  ``0.0.6-0``,  ``0.0.5-0``

      

   
   :depends biopython: ``1.76``
   :depends python: ``3.7.*``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install biobb_structure_manager

   and update with::

      mamba update biobb_structure_manager

  To create a new environment, run::

      mamba create --name myenvname biobb_structure_manager

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biobb_structure_manager:<tag>

   (see `biobb_structure_manager/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_structure_manager| image:: https://img.shields.io/conda/dn/bioconda/biobb_structure_manager.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_structure_manager
   :alt:   (downloads)
.. |docker_biobb_structure_manager| image:: https://quay.io/repository/biocontainers/biobb_structure_manager/status
   :target: https://quay.io/repository/biocontainers/biobb_structure_manager
.. _`biobb_structure_manager/tags`: https://quay.io/repository/biocontainers/biobb_structure_manager?tab=tags


.. raw:: html

    <script>
        var package = "biobb_structure_manager";
        var versions = ["3.0.2","3.0.1","3.0.0","1.0.0","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_structure_manager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_structure_manager/README.html