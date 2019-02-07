.. title:: Package Recipe 'bioconductor-paircompviz'
.. highlight: bash


bioconductor-paircompviz
========================

.. conda:recipe:: bioconductor-paircompviz
   :replaces_section_title:

   This package provides visualization of the results from the multiple \(i.e. pairwise\) comparison tests such as pairwise.t.test\, pairwise.prop.test or pairwise.wilcox.test. The groups being compared are visualized as nodes in Hasse diagram. Such approach enables very clear and vivid depiction of which group is significantly greater than which others\, especially if comparing a large number of groups.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/paircompviz.html
   :license: GPL (>=3.0)
   :recipe: /`bioconductor-paircompviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-paircompviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-paircompviz/meta.yaml>`_
   :links: biotools: :biotools:`paircompviz`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-paircompviz

   |downloads_bioconductor-paircompviz| |docker_bioconductor-paircompviz|

   :versions: 1.20.0, 1.18.0, 1.16.0, 1.14.0

   :depends: :conda:package:`bioconductor-rgraphviz` >=2.26.0,<2.27.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-paircompviz|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-paircompviz

   and update with::

      conda update bioconductor-paircompviz

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-paircompviz


.. |required_by_bioconductor-paircompviz| conda:required_by:: bioconductor-paircompviz
.. |downloads_bioconductor-paircompviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-paircompviz.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-paircompviz| image:: https://quay.io/repository/biocontainers/bioconductor-paircompviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-paircompviz







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-paircompviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-paircompviz/README.html

