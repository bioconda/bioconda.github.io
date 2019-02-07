.. title:: Package Recipe 'nanosim'
.. highlight: bash


nanosim
=======

.. conda:recipe:: nanosim
   :replaces_section_title:

   NanoSim is a fast and scalable read simulator that captures the technology\-specific features of ONT data\, and allows for adjustments upon improvement of nanopore sequencing technology.

   :homepage: https://github.com/bcgsc/NanoSim
   :license: GPL
   :recipe: /`nanosim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosim/meta.yaml>`_

   


.. conda:package:: nanosim

   |downloads_nanosim| |docker_nanosim|

   :versions: 2.2.0, 2.1.0, 2.0.0, v1.3.0, v1.2.0, v1.0.1

   :depends: :conda:package:`htseq` >=0.9.1 :conda:package:`last`  :conda:package:`minimap2`  :conda:package:`numpy` >=1.13.3 :conda:package:`pybedtools` >=0.7.10 :conda:package:`pysam` >=0.13 :conda:package:`python`  :conda:package:`scikit-learn` >=0.20.0 :conda:package:`scipy` >=1.0.0 :conda:package:`six` >=1.10.0 

   :required~by: |required_by_nanosim|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanosim

   and update with::

      conda update nanosim

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nanosim


.. |required_by_nanosim| conda:required_by:: nanosim
.. |downloads_nanosim| image:: https://img.shields.io/conda/dn/bioconda/nanosim.svg?style=flat
   :alt:   (downloads)
.. |docker_nanosim| image:: https://quay.io/repository/biocontainers/nanosim/status
   :target: https://quay.io/repository/biocontainers/nanosim







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanosim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanosim/README.html

