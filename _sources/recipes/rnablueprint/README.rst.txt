.. title:: Package Recipe 'rnablueprint'
.. highlight: bash


rnablueprint
============

.. conda:recipe:: rnablueprint
   :replaces_section_title:

   The RNAblueprint library solves the problem of uniformly sampling RNA\/DNA sequences compatible to multiple structural constraints and sequence constraints.

   :homepage: https://github.com/ViennaRNA/RNAblueprint
   :license: GPL3
   :recipe: /`rnablueprint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnablueprint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnablueprint/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btx263`

   


.. conda:package:: rnablueprint

   |downloads_rnablueprint| |docker_rnablueprint|

   :versions: 1.2.2, 1.2

   :depends: :conda:package:`boost` >=1.67.0,<1.67.1.0a0 :conda:package:`python` >=2.7,<2.8.0a0 

   :required~by: |required_by_rnablueprint|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnablueprint

   and update with::

      conda update rnablueprint

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rnablueprint


.. |required_by_rnablueprint| conda:required_by:: rnablueprint
.. |downloads_rnablueprint| image:: https://img.shields.io/conda/dn/bioconda/rnablueprint.svg?style=flat
   :alt:   (downloads)
.. |docker_rnablueprint| image:: https://quay.io/repository/biocontainers/rnablueprint/status
   :target: https://quay.io/repository/biocontainers/rnablueprint







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnablueprint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnablueprint/README.html

