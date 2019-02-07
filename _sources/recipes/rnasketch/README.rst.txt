.. title:: Package Recipe 'rnasketch'
.. highlight: bash


rnasketch
=========

.. conda:recipe:: rnasketch
   :replaces_section_title:

   RNAsketch Library for designing RNA molecules. Glue between RNAblueprint\/RNARedPrint and ViennaRNA\, Nupack\, Hotknots\, pKiss.

   :homepage: https://github.com/ViennaRNA/RNAsketch
   :license: GPL3
   :recipe: /`rnasketch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnasketch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnasketch/meta.yaml>`_

   


.. conda:package:: rnasketch

   |downloads_rnasketch| |docker_rnasketch|

   :versions: 1.5, 1.4

   :depends: :conda:package:`numpy` >=1.15* :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`python-igraph`  :conda:package:`rnablueprint` >=1.2 :conda:package:`scipy` >=1.1* :conda:package:`viennarna` >=2.4* 

   :required~by: |required_by_rnasketch|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnasketch

   and update with::

      conda update rnasketch

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rnasketch


.. |required_by_rnasketch| conda:required_by:: rnasketch
.. |downloads_rnasketch| image:: https://img.shields.io/conda/dn/bioconda/rnasketch.svg?style=flat
   :alt:   (downloads)
.. |docker_rnasketch| image:: https://quay.io/repository/biocontainers/rnasketch/status
   :target: https://quay.io/repository/biocontainers/rnasketch







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnasketch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnasketch/README.html

