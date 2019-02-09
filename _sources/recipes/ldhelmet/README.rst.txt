.. title:: Package Recipe 'ldhelmet'
.. highlight: bash


ldhelmet
========

.. conda:recipe:: ldhelmet
   :replaces_section_title:

   Software program for statistical inference of fine\-scale crossover recombination rates from population genetic data.

   :homepage: http://sourceforge.net/projects/ldhelmet/
   :license: GPL3
   :recipe: /`ldhelmet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ldhelmet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ldhelmet/meta.yaml>`_
   :links: biotools: :biotools:`LDhelmet`, doi: :doi:`10.1371/journal.pgen.1003090`

   


.. conda:package:: ldhelmet

   |downloads_ldhelmet| |docker_ldhelmet|

   :versions: 1.10

   :depends: :conda:package:`boost` >=1.66.0,<1.66.1.0a0 :conda:package:`gsl` >=2.2.1,<2.3.0a0 :conda:package:`openblas` >=0.2.20,<0.2.21.0a0 

   :required~by: |required_by_ldhelmet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ldhelmet

   and update with::

      conda update ldhelmet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ldhelmet


.. |required_by_ldhelmet| conda:required_by:: ldhelmet
.. |downloads_ldhelmet| image:: https://img.shields.io/conda/dn/bioconda/ldhelmet.svg?style=flat
   :alt:   (downloads)
.. |docker_ldhelmet| image:: https://quay.io/repository/biocontainers/ldhelmet/status
   :target: https://quay.io/repository/biocontainers/ldhelmet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ldhelmet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ldhelmet/README.html

