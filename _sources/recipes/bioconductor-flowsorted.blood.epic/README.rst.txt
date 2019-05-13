:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowsorted.blood.epic'
.. highlight: bash

bioconductor-flowsorted.blood.epic
==================================

.. conda:recipe:: bioconductor-flowsorted.blood.epic
   :replaces_section_title:

   Raw data objects to be used for blood cell proportion estimation in minfi and similar packages. The FlowSorted.Blood.EPIC object is based in samples assayed by Brock Christensen and colleagues\; for details see Salas et al. 2018. https\:\/\/www.ncbi.nlm.nih.gov\/geo\/query\/acc.cgi\?acc\=GSE110554.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/FlowSorted.Blood.EPIC.html
   :license: GPL-3
   :recipe: /`bioconductor-flowsorted.blood.epic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowsorted.blood.epic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowsorted.blood.epic/meta.yaml>`_

   


.. conda:package:: bioconductor-flowsorted.blood.epic

   |downloads_bioconductor-flowsorted.blood.epic| |docker_bioconductor-flowsorted.blood.epic|

   :versions: 1.0.0-0
   
   :depends bioconductor-experimenthub: >=1.8.0,<1.9.0
   :depends bioconductor-genefilter: >=1.64.0,<1.65.0
   :depends bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19: >=0.6.0,<0.7.0
   :depends bioconductor-minfi: >=1.28.0,<1.29.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-nlme: 
   :depends r-quadprog: 
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowsorted.blood.epic

   and update with::

      conda update bioconductor-flowsorted.blood.epic

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowsorted.blood.epic:<tag>

   (see `bioconductor-flowsorted.blood.epic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowsorted.blood.epic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowsorted.blood.epic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowsorted.blood.epic
   :alt:   (downloads)
.. |docker_bioconductor-flowsorted.blood.epic| image:: https://quay.io/repository/biocontainers/bioconductor-flowsorted.blood.epic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowsorted.blood.epic
.. _`bioconductor-flowsorted.blood.epic/tags`: https://quay.io/repository/biocontainers/bioconductor-flowsorted.blood.epic?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowsorted.blood.epic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowsorted.blood.epic/README.html