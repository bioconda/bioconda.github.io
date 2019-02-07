.. title:: Package Recipe 'bioconductor-minfidata'
.. highlight: bash


bioconductor-minfidata
======================

.. conda:recipe:: bioconductor-minfidata
   :replaces_section_title:

   Data from 6 samples across 2 groups from 450k methylation arrays.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/minfiData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-minfidata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minfidata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minfidata/meta.yaml>`_

   


.. conda:package:: bioconductor-minfidata

   |downloads_bioconductor-minfidata| |docker_bioconductor-minfidata|

   :versions: 0.28.0

   :depends: :conda:package:`bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19` >=0.6.0,<0.7.0 :conda:package:`bioconductor-illuminahumanmethylation450kmanifest` >=0.4.0,<0.5.0 :conda:package:`bioconductor-minfi` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-minfidata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-minfidata

   and update with::

      conda update bioconductor-minfidata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-minfidata


.. |required_by_bioconductor-minfidata| conda:required_by:: bioconductor-minfidata
.. |downloads_bioconductor-minfidata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-minfidata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-minfidata| image:: https://quay.io/repository/biocontainers/bioconductor-minfidata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-minfidata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-minfidata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-minfidata/README.html

