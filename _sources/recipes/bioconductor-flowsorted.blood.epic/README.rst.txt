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

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-experimenthub` >=1.8.0,<1.9.0 :conda:package:`bioconductor-genefilter` >=1.64.0,<1.65.0 :conda:package:`bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19` >=0.6.0,<0.7.0 :conda:package:`bioconductor-minfi` >=1.28.0,<1.29.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-nlme`  :conda:package:`r-quadprog`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-flowsorted.blood.epic|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowsorted.blood.epic

   and update with::

      conda update bioconductor-flowsorted.blood.epic

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-flowsorted.blood.epic


.. |required_by_bioconductor-flowsorted.blood.epic| conda:required_by:: bioconductor-flowsorted.blood.epic
.. |downloads_bioconductor-flowsorted.blood.epic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowsorted.blood.epic.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowsorted.blood.epic| image:: https://quay.io/repository/biocontainers/bioconductor-flowsorted.blood.epic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowsorted.blood.epic







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowsorted.blood.epic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowsorted.blood.epic/README.html

