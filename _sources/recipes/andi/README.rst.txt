.. title:: Package Recipe 'andi'
.. highlight: bash


andi
====

.. conda:recipe:: andi
   :replaces_section_title:

   Efficient Estimation of Evolutionary Distances

   :homepage: https://github.com/evolbioinf/andi/
   :license: GPL / GPL-3.0-or-later
   :recipe: /`andi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/andi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/andi/meta.yaml>`_
   :links: biotools: :biotools:`andi`, doi: :doi:`10.1093/bioinformatics/btu815`

   


.. conda:package:: andi

   |downloads_andi| |docker_andi|

   :versions: 0.12, 0.11, 0.10

   :depends: :conda:package:`gsl` 2.2* :conda:package:`libdivsufsort`  :conda:package:`libgcc`  :conda:package:`openblas`  

   :required~by: |required_by_andi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install andi

   and update with::

      conda update andi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/andi


.. |required_by_andi| conda:required_by:: andi
.. |downloads_andi| image:: https://img.shields.io/conda/dn/bioconda/andi.svg?style=flat
   :alt:   (downloads)
.. |docker_andi| image:: https://quay.io/repository/biocontainers/andi/status
   :target: https://quay.io/repository/biocontainers/andi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/andi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/andi/README.html

