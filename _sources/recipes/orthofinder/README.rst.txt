.. title:: Package Recipe 'orthofinder'
.. highlight: bash


orthofinder
===========

.. conda:recipe:: orthofinder
   :replaces_section_title:

   Accurate inference of orthogroups\, orthologues\, gene trees and rooted species tree made easy\!

   :homepage: https://github.com/davidemms/OrthoFinder
   :license: GPLv3
   :recipe: /`orthofinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthofinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthofinder/meta.yaml>`_

   


.. conda:package:: orthofinder

   |downloads_orthofinder| |docker_orthofinder|

   :versions: 2.2.7, 2.2.6, 2.2.1, 2.2.0, 2.1.2, 1.1.10, 1.1.8, 1.1.4, 1.1.2

   :depends: :conda:package:`blast`  :conda:package:`bzip2`  :conda:package:`diamond`  :conda:package:`dlcpar`  :conda:package:`fastme`  :conda:package:`fasttree`  :conda:package:`iqtree`  :conda:package:`mafft`  :conda:package:`mcl`  :conda:package:`mmseqs2`  :conda:package:`muscle`  :conda:package:`python` 2.7.* :conda:package:`raxml`  :conda:package:`scipy`  

   :required~by: |required_by_orthofinder|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install orthofinder

   and update with::

      conda update orthofinder

   or use the docker container::

      docker pull quay.io/repository/biocontainers/orthofinder


.. |required_by_orthofinder| conda:required_by:: orthofinder
.. |downloads_orthofinder| image:: https://img.shields.io/conda/dn/bioconda/orthofinder.svg?style=flat
   :alt:   (downloads)
.. |docker_orthofinder| image:: https://quay.io/repository/biocontainers/orthofinder/status
   :target: https://quay.io/repository/biocontainers/orthofinder







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orthofinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orthofinder/README.html

