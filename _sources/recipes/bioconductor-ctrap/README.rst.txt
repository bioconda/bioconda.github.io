.. title:: Package Recipe 'bioconductor-ctrap'
.. highlight: bash


bioconductor-ctrap
==================

.. conda:recipe:: bioconductor-ctrap
   :replaces_section_title:

   Compare differential gene expression results with those from known cellular perturbations \(such as gene knock\-down\, overexpression or small molecules\) derived from the Connectivity Map. Such analyses allow not only to infer the molecular causes of the observed difference in gene expression but also to identify small molecules that could drive or revert specific transcriptomic alterations.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/cTRAP.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ctrap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctrap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctrap/meta.yaml>`_

   


.. conda:package:: bioconductor-ctrap

   |downloads_bioconductor-ctrap| |docker_bioconductor-ctrap|

   :versions: 1.0.3

   :depends: :conda:package:`bioconductor-fgsea` >=1.8.0,<1.9.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-piano` >=1.22.0,<1.23.0 :conda:package:`bioconductor-rhdf5` >=2.26.0,<2.27.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cowplot`  :conda:package:`r-data.table`  :conda:package:`r-ggplot2`  :conda:package:`r-httr`  :conda:package:`r-pbapply`  :conda:package:`r-plyr`  :conda:package:`r-r.utils`  :conda:package:`r-readr`  

   :required~by: |required_by_bioconductor-ctrap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ctrap

   and update with::

      conda update bioconductor-ctrap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ctrap


.. |required_by_bioconductor-ctrap| conda:required_by:: bioconductor-ctrap
.. |downloads_bioconductor-ctrap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ctrap.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ctrap| image:: https://quay.io/repository/biocontainers/bioconductor-ctrap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ctrap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ctrap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ctrap/README.html

