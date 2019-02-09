.. title:: Package Recipe 'bioconductor-expressionview'
.. highlight: bash


bioconductor-expressionview
===========================

.. conda:recipe:: bioconductor-expressionview
   :replaces_section_title:

   ExpressionView visualizes possibly overlapping biclusters in a gene expression matrix. It can use the result of the ISA method \(eisa package\) or the algorithms in the biclust package or others. The viewer itself was developed using Adobe Flex and runs in a flash\-enabled web browser.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ExpressionView.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-expressionview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-expressionview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-expressionview/meta.yaml>`_

   


.. conda:package:: bioconductor-expressionview

   |downloads_bioconductor-expressionview| |docker_bioconductor-expressionview|

   :versions: 1.34.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-eisa` >=1.34.0,<1.35.0 :conda:package:`bioconductor-go.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-kegg.db` >=3.2.0,<3.3.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bitops`  :conda:package:`r-catools`  :conda:package:`r-isa2`  

   :required~by: |required_by_bioconductor-expressionview|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-expressionview

   and update with::

      conda update bioconductor-expressionview

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-expressionview


.. |required_by_bioconductor-expressionview| conda:required_by:: bioconductor-expressionview
.. |downloads_bioconductor-expressionview| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-expressionview.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-expressionview| image:: https://quay.io/repository/biocontainers/bioconductor-expressionview/status
   :target: https://quay.io/repository/biocontainers/bioconductor-expressionview







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-expressionview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-expressionview/README.html

