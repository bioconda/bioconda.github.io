.. title:: Package Recipe 'r-smvar'
.. highlight: bash


r-smvar
=======

.. conda:recipe:: r-smvar
   :replaces_section_title:

   Implements the structural model for variances in order to detect differentially expressed genes from gene expression data

   :homepage: https://CRAN.R-project.org/package=SMVar
   :license: GPL / GPL
   :recipe: /`r-smvar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-smvar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-smvar/meta.yaml>`_

   


.. conda:package:: r-smvar

   |downloads_r-smvar| |docker_r-smvar|

   :versions: 1.3.3

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_r-smvar|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-smvar

   and update with::

      conda update r-smvar

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-smvar


.. |required_by_r-smvar| conda:required_by:: r-smvar
.. |downloads_r-smvar| image:: https://img.shields.io/conda/dn/bioconda/r-smvar.svg?style=flat
   :alt:   (downloads)
.. |docker_r-smvar| image:: https://quay.io/repository/biocontainers/r-smvar/status
   :target: https://quay.io/repository/biocontainers/r-smvar







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-smvar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-smvar/README.html

