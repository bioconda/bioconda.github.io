.. title:: Package Recipe 'faqcs'
.. highlight: bash


faqcs
=====

.. conda:recipe:: faqcs
   :replaces_section_title:

   Quality Control of Next Generation Sequencing Data.

   :homepage: https://github.com/LANL-Bioinformatics/FaQCs
   :license: BSD 3-Clause
   :recipe: /`faqcs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/faqcs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/faqcs/meta.yaml>`_
   :links: biotools: :biotools:`faqcs`

   


.. conda:package:: faqcs

   |downloads_faqcs| |docker_faqcs|

   :versions: 2.09, 2.08

   :depends: :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_faqcs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install faqcs

   and update with::

      conda update faqcs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/faqcs


.. |required_by_faqcs| conda:required_by:: faqcs
.. |downloads_faqcs| image:: https://img.shields.io/conda/dn/bioconda/faqcs.svg?style=flat
   :alt:   (downloads)
.. |docker_faqcs| image:: https://quay.io/repository/biocontainers/faqcs/status
   :target: https://quay.io/repository/biocontainers/faqcs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/faqcs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/faqcs/README.html

