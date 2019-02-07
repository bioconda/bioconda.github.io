.. title:: Package Recipe 'bioconductor-chemminedrugs'
.. highlight: bash


bioconductor-chemminedrugs
==========================

.. conda:recipe:: bioconductor-chemminedrugs
   :replaces_section_title:

   An annotation package for use with ChemmineR. This package includes data from DrugBank. DUD data can be downloaded using the \"DUD\(\)\" function in ChemmineR.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/ChemmineDrugs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chemminedrugs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chemminedrugs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chemminedrugs/meta.yaml>`_

   


.. conda:package:: bioconductor-chemminedrugs

   |downloads_bioconductor-chemminedrugs| |docker_bioconductor-chemminedrugs|

   :versions: 1.0.2

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-chemminer` >=3.34.0,<3.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rsqlite`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-chemminedrugs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chemminedrugs

   and update with::

      conda update bioconductor-chemminedrugs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-chemminedrugs


.. |required_by_bioconductor-chemminedrugs| conda:required_by:: bioconductor-chemminedrugs
.. |downloads_bioconductor-chemminedrugs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chemminedrugs.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-chemminedrugs| image:: https://quay.io/repository/biocontainers/bioconductor-chemminedrugs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chemminedrugs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chemminedrugs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chemminedrugs/README.html

