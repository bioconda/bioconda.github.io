.. title:: Package Recipe 'nanopore_simulation'
.. highlight: bash


nanopore_simulation
===================

.. conda:recipe:: nanopore_simulation
   :replaces_section_title:

   Nanopore SimulatION is a tool for simulating an Oxfornd Nanopore Technologies MinION device for bioinformatic development.

   :homepage: https://github.com/crohrandt/nanopore_simulation
   :license: MPL-2.0
   :recipe: /`nanopore_simulation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopore_simulation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopore_simulation/meta.yaml>`_

   


.. conda:package:: nanopore_simulation

   |downloads_nanopore_simulation| |docker_nanopore_simulation|

   :versions: 0.3

   :depends: :conda:package:`biopython`  :conda:package:`h5py`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` 3.5* :conda:package:`scipy`  

   :required~by: |required_by_nanopore_simulation|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanopore_simulation

   and update with::

      conda update nanopore_simulation

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nanopore_simulation


.. |required_by_nanopore_simulation| conda:required_by:: nanopore_simulation
.. |downloads_nanopore_simulation| image:: https://img.shields.io/conda/dn/bioconda/nanopore_simulation.svg?style=flat
   :alt:   (downloads)
.. |docker_nanopore_simulation| image:: https://quay.io/repository/biocontainers/nanopore_simulation/status
   :target: https://quay.io/repository/biocontainers/nanopore_simulation







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanopore_simulation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanopore_simulation/README.html

