.. title:: Package Recipe 'bioconductor-affymoe4302expr'
.. highlight: bash


bioconductor-affymoe4302expr
============================

.. conda:recipe:: bioconductor-affymoe4302expr
   :replaces_section_title:

   Contains pre\-built mouse \(GPL1261\) database of gene expression profiles. The gene expression data was downloaded from NCBI GEO\, preprocessed and normalized consistently. The biological context of each sample was recorded and manually verified based on the sample description in GEO.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/Affymoe4302Expr.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-affymoe4302expr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affymoe4302expr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affymoe4302expr/meta.yaml>`_

   


.. conda:package:: bioconductor-affymoe4302expr

   |downloads_bioconductor-affymoe4302expr| |docker_bioconductor-affymoe4302expr|

   :versions: 1.20.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-affymoe4302expr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affymoe4302expr

   and update with::

      conda update bioconductor-affymoe4302expr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-affymoe4302expr


.. |required_by_bioconductor-affymoe4302expr| conda:required_by:: bioconductor-affymoe4302expr
.. |downloads_bioconductor-affymoe4302expr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affymoe4302expr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-affymoe4302expr| image:: https://quay.io/repository/biocontainers/bioconductor-affymoe4302expr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affymoe4302expr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affymoe4302expr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affymoe4302expr/README.html

