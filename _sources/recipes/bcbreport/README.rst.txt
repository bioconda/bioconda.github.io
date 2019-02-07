.. title:: Package Recipe 'bcbreport'
.. highlight: bash


bcbreport
=========

.. conda:recipe:: bcbreport
   :replaces_section_title:

   Rmd templates for bcbio\-nextgen analysis

   :homepage: https://github.com/lpantano/bcbio.coverage
   :license: MIT License
   :recipe: /`bcbreport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbreport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbreport/meta.yaml>`_

   


.. conda:package:: bcbreport

   |downloads_bcbreport| |docker_bcbreport|

   :versions: 0.99.29, 0.99.28, 0.99.27, 0.99.26, 0.99.25, 0.99.24, 0.99.23, 0.99.22, 0.99.21, 0.99.20

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_bcbreport|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bcbreport

   and update with::

      conda update bcbreport

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bcbreport


.. |required_by_bcbreport| conda:required_by:: bcbreport
.. |downloads_bcbreport| image:: https://img.shields.io/conda/dn/bioconda/bcbreport.svg?style=flat
   :alt:   (downloads)
.. |docker_bcbreport| image:: https://quay.io/repository/biocontainers/bcbreport/status
   :target: https://quay.io/repository/biocontainers/bcbreport







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbreport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbreport/README.html

