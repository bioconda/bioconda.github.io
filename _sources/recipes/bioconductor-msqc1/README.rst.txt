.. title:: Package Recipe 'bioconductor-msqc1'
.. highlight: bash


bioconductor-msqc1
==================

.. conda:recipe:: bioconductor-msqc1
   :replaces_section_title:

   The data set contains an eight technical replicate data set and a three replicate dilution series of the MS Qual\/Quant QC Mix standard sample \(Sigma\-Aldrich\, Buchs\, Switzerland\) measured on five different mass spec platforms at the Functional Genomics Center Zurich.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/msqc1.html
   :license: GPL
   :recipe: /`bioconductor-msqc1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msqc1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msqc1/meta.yaml>`_

   


.. conda:package:: bioconductor-msqc1

   |downloads_bioconductor-msqc1| |docker_bioconductor-msqc1|

   :versions: 1.10.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-lattice`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-msqc1|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msqc1

   and update with::

      conda update bioconductor-msqc1

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-msqc1


.. |required_by_bioconductor-msqc1| conda:required_by:: bioconductor-msqc1
.. |downloads_bioconductor-msqc1| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msqc1.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-msqc1| image:: https://quay.io/repository/biocontainers/bioconductor-msqc1/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msqc1







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msqc1/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msqc1/README.html

