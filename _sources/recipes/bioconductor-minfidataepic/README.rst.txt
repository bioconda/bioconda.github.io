.. title:: Package Recipe 'bioconductor-minfidataepic'
.. highlight: bash


bioconductor-minfidataepic
==========================

.. conda:recipe:: bioconductor-minfidataepic
   :replaces_section_title:

   Data from 3 technical replicates of the cell line GM12878 from the EPIC methylation array.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/minfiDataEPIC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-minfidataepic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minfidataepic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minfidataepic/meta.yaml>`_

   


.. conda:package:: bioconductor-minfidataepic

   |downloads_bioconductor-minfidataepic| |docker_bioconductor-minfidataepic|

   :versions: 1.8.0

   :depends: :conda:package:`bioconductor-illuminahumanmethylationepicanno.ilm10b2.hg19` >=0.6.0,<0.7.0 :conda:package:`bioconductor-illuminahumanmethylationepicmanifest` >=0.3.0,<0.4.0 :conda:package:`bioconductor-minfi` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-minfidataepic|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-minfidataepic

   and update with::

      conda update bioconductor-minfidataepic

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-minfidataepic


.. |required_by_bioconductor-minfidataepic| conda:required_by:: bioconductor-minfidataepic
.. |downloads_bioconductor-minfidataepic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-minfidataepic.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-minfidataepic| image:: https://quay.io/repository/biocontainers/bioconductor-minfidataepic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-minfidataepic







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-minfidataepic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-minfidataepic/README.html

