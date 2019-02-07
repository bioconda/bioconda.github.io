.. title:: Package Recipe 'bioconductor-logicfs'
.. highlight: bash


bioconductor-logicfs
====================

.. conda:recipe:: bioconductor-logicfs
   :replaces_section_title:

   Identification of interactions between binary variables using Logic Regression. Can\, e.g.\, be used to find interesting SNP interactions. Contains also a bagging version of logic regression for classification.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/logicFS.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-logicfs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-logicfs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-logicfs/meta.yaml>`_

   


.. conda:package:: bioconductor-logicfs

   |downloads_bioconductor-logicfs| |docker_bioconductor-logicfs|

   :versions: 2.2.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-logicreg`  :conda:package:`r-mcbiopi`  :conda:package:`r-survival`  

   :required~by: |required_by_bioconductor-logicfs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-logicfs

   and update with::

      conda update bioconductor-logicfs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-logicfs


.. |required_by_bioconductor-logicfs| conda:required_by:: bioconductor-logicfs
.. |downloads_bioconductor-logicfs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-logicfs.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-logicfs| image:: https://quay.io/repository/biocontainers/bioconductor-logicfs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-logicfs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-logicfs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-logicfs/README.html

