.. title:: Package Recipe 'bioconductor-foldgo'
.. highlight: bash


bioconductor-foldgo
===================

.. conda:recipe:: bioconductor-foldgo
   :replaces_section_title:

   FoldGO is a package designed to annotate gene sets derived from expression experiments and identify fold\-change\-specific GO terms.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/FoldGO.html
   :license: GPL-3
   :recipe: /`bioconductor-foldgo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-foldgo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-foldgo/meta.yaml>`_

   


.. conda:package:: bioconductor-foldgo

   |downloads_bioconductor-foldgo| |docker_bioconductor-foldgo|

   :versions: 1.0.1

   :depends: :conda:package:`bioconductor-topgo` >=2.34.0,<2.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2` >=2.2.1 :conda:package:`r-tidyr` >=0.8.0 

   :required~by: |required_by_bioconductor-foldgo|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-foldgo

   and update with::

      conda update bioconductor-foldgo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-foldgo


.. |required_by_bioconductor-foldgo| conda:required_by:: bioconductor-foldgo
.. |downloads_bioconductor-foldgo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-foldgo.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-foldgo| image:: https://quay.io/repository/biocontainers/bioconductor-foldgo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-foldgo







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-foldgo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-foldgo/README.html

