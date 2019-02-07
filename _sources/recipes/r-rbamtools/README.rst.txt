.. title:: Package Recipe 'r-rbamtools'
.. highlight: bash


r-rbamtools
===========

.. conda:recipe:: r-rbamtools
   :replaces_section_title:

   Provides an R interface to functions of the \'SAMtools\' C\-Library by Heng Li \<http\:\/\/www.htslib.org\/\>.

   :homepage: https://CRAN.R-project.org/package=rbamtools
   :license: OTHER / Artistic-2.0
   :recipe: /`r-rbamtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rbamtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rbamtools/meta.yaml>`_

   


.. conda:package:: r-rbamtools

   |downloads_r-rbamtools| |docker_r-rbamtools|

   :versions: 2.16.11

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-refgenome` >=1.6.1 

   :required~by: |required_by_r-rbamtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rbamtools

   and update with::

      conda update r-rbamtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-rbamtools


.. |required_by_r-rbamtools| conda:required_by:: r-rbamtools
.. |downloads_r-rbamtools| image:: https://img.shields.io/conda/dn/bioconda/r-rbamtools.svg?style=flat
   :alt:   (downloads)
.. |docker_r-rbamtools| image:: https://quay.io/repository/biocontainers/r-rbamtools/status
   :target: https://quay.io/repository/biocontainers/r-rbamtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rbamtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rbamtools/README.html

