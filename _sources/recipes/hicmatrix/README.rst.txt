.. title:: Package Recipe 'hicmatrix'
.. highlight: bash


hicmatrix
=========

.. conda:recipe:: hicmatrix
   :replaces_section_title:

   Library to manage Hi\-C matrices for HiCExplorer and pyGenomeTracks

   :homepage: https://github.com/deeptools/HiCMatrix
   :license: GPL3
   :recipe: /`hicmatrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicmatrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicmatrix/meta.yaml>`_

   


.. conda:package:: hicmatrix

   |downloads_hicmatrix| |docker_hicmatrix|

   :versions: 7, 6, 5, 4, 3, 2.2

   :depends: :conda:package:`cooler` 0.8.2.* :conda:package:`future`  :conda:package:`intervaltree`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`pytables`  :conda:package:`python`  :conda:package:`scipy`  

   :required~by: |required_by_hicmatrix|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hicmatrix

   and update with::

      conda update hicmatrix

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hicmatrix


.. |required_by_hicmatrix| conda:required_by:: hicmatrix
.. |downloads_hicmatrix| image:: https://img.shields.io/conda/dn/bioconda/hicmatrix.svg?style=flat
   :alt:   (downloads)
.. |docker_hicmatrix| image:: https://quay.io/repository/biocontainers/hicmatrix/status
   :target: https://quay.io/repository/biocontainers/hicmatrix







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hicmatrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hicmatrix/README.html

