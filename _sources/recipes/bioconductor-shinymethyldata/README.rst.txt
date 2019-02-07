.. title:: Package Recipe 'bioconductor-shinymethyldata'
.. highlight: bash


bioconductor-shinymethyldata
============================

.. conda:recipe:: bioconductor-shinymethyldata
   :replaces_section_title:

   Extracted data from 369 TCGA Head and Neck Cancer DNA methylation samples. The extracted data serve as an example dataset for the package shinyMethyl. Original samples are from 450k methylation arrays\, and were obtained from The Cancer Genome Atlas \(TCGA\). 310 samples are from tumor\, 50 are matched normals and 9 are technical replicates of a control cell line.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/shinyMethylData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-shinymethyldata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shinymethyldata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shinymethyldata/meta.yaml>`_

   


.. conda:package:: bioconductor-shinymethyldata

   |downloads_bioconductor-shinymethyldata| |docker_bioconductor-shinymethyldata|

   :versions: 1.2.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-shinymethyldata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-shinymethyldata

   and update with::

      conda update bioconductor-shinymethyldata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-shinymethyldata


.. |required_by_bioconductor-shinymethyldata| conda:required_by:: bioconductor-shinymethyldata
.. |downloads_bioconductor-shinymethyldata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-shinymethyldata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-shinymethyldata| image:: https://quay.io/repository/biocontainers/bioconductor-shinymethyldata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-shinymethyldata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-shinymethyldata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-shinymethyldata/README.html

