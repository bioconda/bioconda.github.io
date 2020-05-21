:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_structure_manager'
.. highlight: bash

biobb_structure_manager
=======================

.. conda:recipe:: biobb_structure_manager
   :replaces_section_title:

   BioBB\_structure\_manager is a library to efficiently load and process biomolecular 3D structures.

   :homepage: https://github.com/bioexcel/BioBB_structure_manager
   :license: APACHE / Apache Software License
   :recipe: /`biobb_structure_manager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_structure_manager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_structure_manager/meta.yaml>`_

   \[\!\[Codacy Badge\]\(https\:\/\/api.codacy.com\/project\/badge\/Grade\/3dbc32af83244f1fba8961cfe059ae37\)\]\(https\:\/\/www.codacy.com\/app\/jlgelpi\/structure\_manager\?utm\_source\=mmb.irbbarcelona.org\&amp\;utm\_medium\=referral\&amp\;utm\_content\=gitlab\/BioExcel\/structure\_manager\&amp\;utm\_campaign\=Badge\_Grade\)

   \#\#\# Structure Manager package
   Python package to manage 3D structures. Wraps Bio.PDB with additional features.



.. conda:package:: biobb_structure_manager

   |downloads_biobb_structure_manager| |docker_biobb_structure_manager|

   :versions: 3.0.1-0, 3.0.0-0, 1.0.0-0, 0.0.6-0, 0.0.5-0
   
   :depends biopython: 1.76
   :depends python: 3.7.*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobb_structure_manager

   and update with::

      conda update biobb_structure_manager

   or use the docker container::

      docker pull quay.io/biocontainers/biobb_structure_manager:<tag>

   (see `biobb_structure_manager/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_structure_manager| image:: https://img.shields.io/conda/dn/bioconda/biobb_structure_manager.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_structure_manager
   :alt:   (downloads)
.. |docker_biobb_structure_manager| image:: https://quay.io/repository/biocontainers/biobb_structure_manager/status
   :target: https://quay.io/repository/biocontainers/biobb_structure_manager
.. _`biobb_structure_manager/tags`: https://quay.io/repository/biocontainers/biobb_structure_manager?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_structure_manager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_structure_manager/README.html