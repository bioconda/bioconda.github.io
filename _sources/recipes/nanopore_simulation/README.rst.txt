:orphan:  .. only available via index, not via toctree

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

   :versions: 0.3-1, 0.3-0
   
   :depends biopython: 
   :depends h5py: 
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends python: >=3.5,<3.6.0a0
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanopore_simulation

   and update with::

      conda update nanopore_simulation

   or use the docker container::

      docker pull quay.io/biocontainers/nanopore_simulation:<tag>

   (see `nanopore_simulation/tags`_ for valid values for ``<tag>``)


.. |downloads_nanopore_simulation| image:: https://img.shields.io/conda/dn/bioconda/nanopore_simulation.svg?style=flat
   :alt:   (downloads)
.. |docker_nanopore_simulation| image:: https://quay.io/repository/biocontainers/nanopore_simulation/status
   :target: https://quay.io/repository/biocontainers/nanopore_simulation
.. _`nanopore_simulation/tags`: https://quay.io/repository/biocontainers/nanopore_simulation?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanopore_simulation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanopore_simulation/README.html