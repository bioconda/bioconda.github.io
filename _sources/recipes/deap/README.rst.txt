.. title:: Package Recipe 'deap'
.. highlight: bash


deap
====

.. conda:recipe:: deap
   :replaces_section_title:

   Distributed Evolutionary Algorithms in Python

   :homepage: https://www.github.com/deap
   :license: GNU Library or Lesser General Public License (LGPL)
   :recipe: /`deap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deap/meta.yaml>`_

   


.. conda:package:: deap

   |downloads_deap| |docker_deap|

   :versions: 1.0.2

   :depends: :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`python` 2.7* :conda:package:`scoop`  

   :required~by: |required_by_deap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deap

   and update with::

      conda update deap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/deap


.. |required_by_deap| conda:required_by:: deap
.. |downloads_deap| image:: https://img.shields.io/conda/dn/bioconda/deap.svg?style=flat
   :alt:   (downloads)
.. |docker_deap| image:: https://quay.io/repository/biocontainers/deap/status
   :target: https://quay.io/repository/biocontainers/deap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deap/README.html

