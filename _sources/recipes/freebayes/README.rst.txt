.. title:: Package Recipe 'freebayes'
.. highlight: bash


freebayes
=========

.. conda:recipe:: freebayes
   :replaces_section_title:

   Bayesian haplotype\-based polymorphism discovery and genotyping

   :homepage: https://github.com/ekg/freebayes
   :license: MIT / MIT
   :recipe: /`freebayes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/freebayes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/freebayes/meta.yaml>`_
   :links: biotools: :biotools:`freebayes`

   


.. conda:package:: freebayes

   |downloads_freebayes| |docker_freebayes|

   :versions: 1.2.0, 1.1.0.46, 1.1.0, 1.0.2.29, 1.0.2, 1.0.1, 0.9.21.26, 0.9.21.7

   :depends: :conda:package:`bzip2` 1.0* :conda:package:`htslib` 1.7* :conda:package:`libgcc`  :conda:package:`parallel`  :conda:package:`python` 2.7* :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_freebayes|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install freebayes

   and update with::

      conda update freebayes

   or use the docker container::

      docker pull quay.io/repository/biocontainers/freebayes


.. |required_by_freebayes| conda:required_by:: freebayes
.. |downloads_freebayes| image:: https://img.shields.io/conda/dn/bioconda/freebayes.svg?style=flat
   :alt:   (downloads)
.. |docker_freebayes| image:: https://quay.io/repository/biocontainers/freebayes/status
   :target: https://quay.io/repository/biocontainers/freebayes







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/freebayes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/freebayes/README.html

