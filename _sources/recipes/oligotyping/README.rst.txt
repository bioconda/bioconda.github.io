.. title:: Package Recipe 'oligotyping'
.. highlight: bash


oligotyping
===========

.. conda:recipe:: oligotyping
   :replaces_section_title:

   The oligotyping and minimum entropy decomposition \(MED\) pipeline for the analysis of marker gene amplicons

   :homepage: http://oligotyping.org
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`oligotyping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oligotyping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oligotyping/meta.yaml>`_

   


.. conda:package:: oligotyping

   |downloads_oligotyping| |docker_oligotyping|

   :versions: 2.1, 2.0

   :depends: :conda:package:`biopython`  :conda:package:`blast`  :conda:package:`django`  :conda:package:`matplotlib`  :conda:package:`python` 2.7* :conda:package:`r-compute.es`  :conda:package:`r-ggplot2`  :conda:package:`r-gplots`  :conda:package:`r-gtools`  :conda:package:`r-optparse`  :conda:package:`r-pheatmap`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape`  :conda:package:`r-vegan`  :conda:package:`scipy`  

   :required~by: |required_by_oligotyping|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install oligotyping

   and update with::

      conda update oligotyping

   or use the docker container::

      docker pull quay.io/repository/biocontainers/oligotyping


.. |required_by_oligotyping| conda:required_by:: oligotyping
.. |downloads_oligotyping| image:: https://img.shields.io/conda/dn/bioconda/oligotyping.svg?style=flat
   :alt:   (downloads)
.. |docker_oligotyping| image:: https://quay.io/repository/biocontainers/oligotyping/status
   :target: https://quay.io/repository/biocontainers/oligotyping







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oligotyping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oligotyping/README.html

