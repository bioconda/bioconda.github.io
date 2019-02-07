.. title:: Package Recipe 'pipits'
.. highlight: bash


pipits
======

.. conda:recipe:: pipits
   :replaces_section_title:

   PIPITS\: An automated pipeline for analyses of fungal internal transcribed spacer \(ITS\) sequences from the Illumina sequencing platform

   :homepage: https://github.com/hsgweon/pipits
   :license: GPL3 / GNU General Public License v3.0
   :recipe: /`pipits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pipits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pipits/meta.yaml>`_

   


.. conda:package:: pipits

   |downloads_pipits| |docker_pipits|

   :versions: 2.2, 2.1, 2.0

   :depends: :conda:package:`biom-format`  :conda:package:`fastx_toolkit`  :conda:package:`hmmer`  :conda:package:`itsx`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`pispino` >=1.1 :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`rdptools`  :conda:package:`vsearch`  

   :required~by: |required_by_pipits|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pipits

   and update with::

      conda update pipits

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pipits


.. |required_by_pipits| conda:required_by:: pipits
.. |downloads_pipits| image:: https://img.shields.io/conda/dn/bioconda/pipits.svg?style=flat
   :alt:   (downloads)
.. |docker_pipits| image:: https://quay.io/repository/biocontainers/pipits/status
   :target: https://quay.io/repository/biocontainers/pipits







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pipits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pipits/README.html

