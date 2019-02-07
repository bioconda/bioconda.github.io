.. title:: Package Recipe 'find_differential_primers'
.. highlight: bash


find_differential_primers
=========================

.. conda:recipe:: find_differential_primers
   :replaces_section_title:

   Scripts to aid the design of differential primers for diagnostic PCR.

   :homepage: https://github.com/widdowquinn/find_differential_primers
   :license: MIT / MIT
   :recipe: /`find_differential_primers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/find_differential_primers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/find_differential_primers/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.9861`

   


.. conda:package:: find_differential_primers

   |downloads_find_differential_primers| |docker_find_differential_primers|

   :versions: 0.1.3, 0.1.3.p1

   :depends: :conda:package:`biopython`  :conda:package:`blast`  :conda:package:`bx-python`  :conda:package:`emboss`  :conda:package:`primer3`  :conda:package:`prodigal`  :conda:package:`python` 2.7* 

   :required~by: |required_by_find_differential_primers|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install find_differential_primers

   and update with::

      conda update find_differential_primers

   or use the docker container::

      docker pull quay.io/repository/biocontainers/find_differential_primers


.. |required_by_find_differential_primers| conda:required_by:: find_differential_primers
.. |downloads_find_differential_primers| image:: https://img.shields.io/conda/dn/bioconda/find_differential_primers.svg?style=flat
   :alt:   (downloads)
.. |docker_find_differential_primers| image:: https://quay.io/repository/biocontainers/find_differential_primers/status
   :target: https://quay.io/repository/biocontainers/find_differential_primers







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/find_differential_primers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/find_differential_primers/README.html

