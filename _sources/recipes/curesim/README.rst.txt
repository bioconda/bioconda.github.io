.. title:: Package Recipe 'curesim'
.. highlight: bash


curesim
=======

.. conda:recipe:: curesim
   :replaces_section_title:

   CuReSim \(Customized Read Simulator\) is a customized tool which generates synthetic New\-Generation Sequencing reads\, supporting read simulation for major letter\-base sequencing platforms..

   :homepage: http://www.pegase-biosciences.com/curesim-a-customized-read-simulator/
   :license: unknown
   :recipe: /`curesim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curesim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curesim/meta.yaml>`_

   


.. conda:package:: curesim

   |downloads_curesim| |docker_curesim|

   :versions: 1.3

   :depends: :conda:package:`coreutils`  :conda:package:`java-jdk` >=8 

   :required~by: |required_by_curesim|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install curesim

   and update with::

      conda update curesim

   or use the docker container::

      docker pull quay.io/repository/biocontainers/curesim


.. |required_by_curesim| conda:required_by:: curesim
.. |downloads_curesim| image:: https://img.shields.io/conda/dn/bioconda/curesim.svg?style=flat
   :alt:   (downloads)
.. |docker_curesim| image:: https://quay.io/repository/biocontainers/curesim/status
   :target: https://quay.io/repository/biocontainers/curesim







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/curesim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/curesim/README.html

