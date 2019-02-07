.. title:: Package Recipe 'bis-snp-utils'
.. highlight: bash


bis-snp-utils
=============

.. conda:recipe:: bis-snp-utils
   :replaces_section_title:

   bis\-snp\-utils are support tools for Bis\-SNP

   :homepage: http://people.csail.mit.edu/dnaase/bissnp2011/
   :license: MIT
   :recipe: /`bis-snp-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bis-snp-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bis-snp-utils/meta.yaml>`_

   


.. conda:package:: bis-snp-utils

   |downloads_bis-snp-utils| |docker_bis-snp-utils|

   :versions: 0.0.1

   :depends: :conda:package:`perl`  :conda:package:`perl-getopt-long`  

   :required~by: |required_by_bis-snp-utils|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bis-snp-utils

   and update with::

      conda update bis-snp-utils

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bis-snp-utils


.. |required_by_bis-snp-utils| conda:required_by:: bis-snp-utils
.. |downloads_bis-snp-utils| image:: https://img.shields.io/conda/dn/bioconda/bis-snp-utils.svg?style=flat
   :alt:   (downloads)
.. |docker_bis-snp-utils| image:: https://quay.io/repository/biocontainers/bis-snp-utils/status
   :target: https://quay.io/repository/biocontainers/bis-snp-utils







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bis-snp-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bis-snp-utils/README.html

