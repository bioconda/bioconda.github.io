.. title:: Package Recipe 'panx'
.. highlight: bash


panx
====

.. conda:recipe:: panX/1.5.0
   :replaces_section_title:

   Microbial pan\-genome analysis and exploration tool

   :homepage: http://pangenome.de
   :license: GNU General Public License v3.0
   :recipe: /`panX <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panX>`_/`1.5.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panX/1.5.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panX/1.5.0/meta.yaml>`_

   


.. conda:package:: panx

   |downloads_panx| |docker_panx|

   :versions: 1.6.0, 1.5.0

   :depends: :conda:package:`biopython`  :conda:package:`diamond`  :conda:package:`ete2`  :conda:package:`fasttree`  :conda:package:`mafft`  :conda:package:`mcl`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` 2.7* :conda:package:`raxml`  :conda:package:`scipy`  :conda:package:`treetime`  

   :required~by: |required_by_panx|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install panx

   and update with::

      conda update panx

   or use the docker container::

      docker pull quay.io/repository/biocontainers/panx


.. |required_by_panx| conda:required_by:: panx
.. |downloads_panx| image:: https://img.shields.io/conda/dn/bioconda/panx.svg?style=flat
   :alt:   (downloads)
.. |docker_panx| image:: https://quay.io/repository/biocontainers/panx/status
   :target: https://quay.io/repository/biocontainers/panx







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panx/README.html

