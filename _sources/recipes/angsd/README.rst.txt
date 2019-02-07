.. title:: Package Recipe 'angsd'
.. highlight: bash


angsd
=====

.. conda:recipe:: angsd
   :replaces_section_title:

   ANGSD\: Analysis of next generation Sequencing Data

   :homepage: http://www.popgen.dk/angsd/index.php/ANGSD
   :license: GPLv3, MIT
   :recipe: /`angsd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/angsd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/angsd/meta.yaml>`_
   :links: biotools: :biotools:`angsd`, doi: :doi:`10.1186/s12859-014-0356-4`

   


.. conda:package:: angsd

   |downloads_angsd| |docker_angsd|

   :versions: 0.923, 0.921, 0.910

   :depends: :conda:package:`htslib` >=1.9,<1.10.0a0 :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 

   :required~by: |required_by_angsd|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install angsd

   and update with::

      conda update angsd

   or use the docker container::

      docker pull quay.io/repository/biocontainers/angsd


.. |required_by_angsd| conda:required_by:: angsd
.. |downloads_angsd| image:: https://img.shields.io/conda/dn/bioconda/angsd.svg?style=flat
   :alt:   (downloads)
.. |docker_angsd| image:: https://quay.io/repository/biocontainers/angsd/status
   :target: https://quay.io/repository/biocontainers/angsd







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/angsd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/angsd/README.html

