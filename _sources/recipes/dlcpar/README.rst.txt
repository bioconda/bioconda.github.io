.. title:: Package Recipe 'dlcpar'
.. highlight: bash


dlcpar
======

.. conda:recipe:: dlcpar
   :replaces_section_title:

   Accurate inference of orthogroups\, orthologues\, gene trees and rooted species tree made easy\!

   :homepage: https://github.com/davidemms/OrthoFinder
   :license: GPLv3
   :recipe: /`dlcpar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dlcpar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dlcpar/meta.yaml>`_

   


.. conda:package:: dlcpar

   |downloads_dlcpar| |docker_dlcpar|

   :versions: 1.0

   :depends: :conda:package:`numpy`  :conda:package:`python` 2.7* 

   :required~by: |required_by_dlcpar|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dlcpar

   and update with::

      conda update dlcpar

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dlcpar


.. |required_by_dlcpar| conda:required_by:: dlcpar
.. |downloads_dlcpar| image:: https://img.shields.io/conda/dn/bioconda/dlcpar.svg?style=flat
   :alt:   (downloads)
.. |docker_dlcpar| image:: https://quay.io/repository/biocontainers/dlcpar/status
   :target: https://quay.io/repository/biocontainers/dlcpar







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dlcpar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dlcpar/README.html

