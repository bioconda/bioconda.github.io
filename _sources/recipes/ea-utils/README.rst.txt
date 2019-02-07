.. title:: Package Recipe 'ea-utils'
.. highlight: bash


ea-utils
========

.. conda:recipe:: ea-utils
   :replaces_section_title:

   Command\-line tools for processing biological sequencing data.

   :homepage: https://expressionanalysis.github.io/ea-utils/
   :license: MIT
   :recipe: /`ea-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ea-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ea-utils/meta.yaml>`_
   :links: biotools: :biotools:`ea-utils`, doi: :doi:`10.2174/1875036201307010001`

   


.. conda:package:: ea-utils

   |downloads_ea-utils| |docker_ea-utils|

   :versions: 1.1.2.779, 1.1.2.537

   :depends: :conda:package:`gsl` >=2.2.1,<2.3.0a0 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`openblas` >=0.2.20,<0.2.21.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ea-utils|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ea-utils

   and update with::

      conda update ea-utils

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ea-utils


.. |required_by_ea-utils| conda:required_by:: ea-utils
.. |downloads_ea-utils| image:: https://img.shields.io/conda/dn/bioconda/ea-utils.svg?style=flat
   :alt:   (downloads)
.. |docker_ea-utils| image:: https://quay.io/repository/biocontainers/ea-utils/status
   :target: https://quay.io/repository/biocontainers/ea-utils







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ea-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ea-utils/README.html

