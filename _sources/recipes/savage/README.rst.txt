.. title:: Package Recipe 'savage'
.. highlight: bash


savage
======

.. conda:recipe:: savage
   :replaces_section_title:

   SAVAGE \(Strain Aware VirAl GEnome assembly\) reconstructs individual \(viral\) haplotypes from a mixed sample.

   :homepage: https://bitbucket.org/jbaaijens/savage
   :license: GPL v3
   :recipe: /`savage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savage/meta.yaml>`_

   


.. conda:package:: savage

   |downloads_savage| |docker_savage|

   :versions: 0.4.0, 0.3.0, 0.2.1

   :depends: :conda:package:`boost` 1.61* :conda:package:`bwa`  :conda:package:`kallisto` >=0.43.0 :conda:package:`libgcc`  :conda:package:`python` 2.7* :conda:package:`rust-overlaps`  

   :required~by: |required_by_savage|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install savage

   and update with::

      conda update savage

   or use the docker container::

      docker pull quay.io/repository/biocontainers/savage


.. |required_by_savage| conda:required_by:: savage
.. |downloads_savage| image:: https://img.shields.io/conda/dn/bioconda/savage.svg?style=flat
   :alt:   (downloads)
.. |docker_savage| image:: https://quay.io/repository/biocontainers/savage/status
   :target: https://quay.io/repository/biocontainers/savage







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/savage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/savage/README.html

