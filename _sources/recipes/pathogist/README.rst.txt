.. title:: Package Recipe 'pathogist'
.. highlight: bash


pathogist
=========

.. conda:recipe:: pathogist
   :replaces_section_title:

   Calibrated multi\-criterion genomic analysis for public health microbiology

   :homepage: https://github.com/WGS-TB/PathOGiST
   :license: GPL-3.0
   :recipe: /`pathogist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathogist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathogist/meta.yaml>`_

   


.. conda:package:: pathogist

   |downloads_pathogist| |docker_pathogist|

   :versions: 0.2.3

   :depends: :conda:package:`coincbc` >=2.9.9 :conda:package:`matplotlib`  :conda:package:`mentalist`  :conda:package:`networkx`  :conda:package:`numpy` >=1.15.1 :conda:package:`pandas` >=0.23.4 :conda:package:`prince`  :conda:package:`pulp` >=1.6.8 :conda:package:`python` 3.5.* :conda:package:`pyyaml` >=3.13 :conda:package:`scikit-learn` >=0.19.1 :conda:package:`scipy` >=1.1.0 :conda:package:`snippy` 3.2 

   :required~by: |required_by_pathogist|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pathogist

   and update with::

      conda update pathogist

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pathogist


.. |required_by_pathogist| conda:required_by:: pathogist
.. |downloads_pathogist| image:: https://img.shields.io/conda/dn/bioconda/pathogist.svg?style=flat
   :alt:   (downloads)
.. |docker_pathogist| image:: https://quay.io/repository/biocontainers/pathogist/status
   :target: https://quay.io/repository/biocontainers/pathogist







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathogist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathogist/README.html

