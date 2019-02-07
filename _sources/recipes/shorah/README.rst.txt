.. title:: Package Recipe 'shorah'
.. highlight: bash


shorah
======

.. conda:recipe:: shorah/1.1.0
   :replaces_section_title:

   The Short Reads Assembly into Haplotypes \(ShoRAH\) program for inferring viral haplotypes from NGS data

   :homepage: https://github.com/cbg-ethz/shorah
   :license: GPLv3
   :recipe: /`shorah <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shorah>`_/`1.1.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shorah/1.1.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shorah/1.1.0/meta.yaml>`_
   :links: biotools: :biotools:`shorah`

   


.. conda:package:: shorah

   |downloads_shorah| |docker_shorah|

   :versions: 1.1.3, 1.1.2, 1.1.1, 1.1.0, 1.0.0

   :depends: :conda:package:`biopython`  :conda:package:`blas` 1.1 openblas :conda:package:`gsl` >=2.2.1,<2.3.0a0 :conda:package:`libgcc-ng` >=4.9 :conda:package:`numpy`  :conda:package:`perl`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`samtools`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_shorah|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shorah

   and update with::

      conda update shorah

   or use the docker container::

      docker pull quay.io/repository/biocontainers/shorah


.. |required_by_shorah| conda:required_by:: shorah
.. |downloads_shorah| image:: https://img.shields.io/conda/dn/bioconda/shorah.svg?style=flat
   :alt:   (downloads)
.. |docker_shorah| image:: https://quay.io/repository/biocontainers/shorah/status
   :target: https://quay.io/repository/biocontainers/shorah







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shorah/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shorah/README.html

