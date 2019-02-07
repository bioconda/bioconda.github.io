.. title:: Package Recipe 'bioconductor-tweedeseqcountdata'
.. highlight: bash


bioconductor-tweedeseqcountdata
===============================

.. conda:recipe:: bioconductor-tweedeseqcountdata
   :replaces_section_title:

   RNA\-seq count data from Pickrell et al. \(2010\) employed to illustrate the use of the Poisson\-Tweedie family of distributions with the tweeDEseq package.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/tweeDEseqCountData.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-tweedeseqcountdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tweedeseqcountdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tweedeseqcountdata/meta.yaml>`_

   


.. conda:package:: bioconductor-tweedeseqcountdata

   |downloads_bioconductor-tweedeseqcountdata| |docker_bioconductor-tweedeseqcountdata|

   :versions: 1.20.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-tweedeseqcountdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tweedeseqcountdata

   and update with::

      conda update bioconductor-tweedeseqcountdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tweedeseqcountdata


.. |required_by_bioconductor-tweedeseqcountdata| conda:required_by:: bioconductor-tweedeseqcountdata
.. |downloads_bioconductor-tweedeseqcountdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tweedeseqcountdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tweedeseqcountdata| image:: https://quay.io/repository/biocontainers/bioconductor-tweedeseqcountdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tweedeseqcountdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tweedeseqcountdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tweedeseqcountdata/README.html

