.. title:: Package Recipe 'r-ichorcna'
.. highlight: bash


r-ichorcna
==========

.. conda:recipe:: r-ichorcna
   :replaces_section_title:

   Estimating tumor fraction in cell\-free DNA from ultra\-low\-pass whole genome sequencing.

   :homepage: https://github.com/broadinstitute/ichorCNA
   :license: GPL-3
   :recipe: /`r-ichorcna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ichorcna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ichorcna/meta.yaml>`_

   


.. conda:package:: r-ichorcna

   |downloads_r-ichorcna| |docker_r-ichorcna|

   :versions: 0.1.0.20180710

   :depends: :conda:package:`bioconductor-genomeinfodb` >=1.8.7 :conda:package:`bioconductor-hmmcopy` >=1.14.0 :conda:package:`libgfortran-ng`  :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-optparse`  :conda:package:`r-plyr`  

   :required~by: |required_by_r-ichorcna|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ichorcna

   and update with::

      conda update r-ichorcna

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-ichorcna


.. |required_by_r-ichorcna| conda:required_by:: r-ichorcna
.. |downloads_r-ichorcna| image:: https://img.shields.io/conda/dn/bioconda/r-ichorcna.svg?style=flat
   :alt:   (downloads)
.. |docker_r-ichorcna| image:: https://quay.io/repository/biocontainers/r-ichorcna/status
   :target: https://quay.io/repository/biocontainers/r-ichorcna







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ichorcna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ichorcna/README.html

