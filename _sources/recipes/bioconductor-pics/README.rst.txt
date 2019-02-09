.. title:: Package Recipe 'bioconductor-pics'
.. highlight: bash


bioconductor-pics
=================

.. conda:recipe:: bioconductor-pics
   :replaces_section_title:

   Probabilistic inference of ChIP\-Seq using an empirical Bayes mixture model approach.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PICS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pics/meta.yaml>`_
   :links: biotools: :biotools:`pics`

   


.. conda:package:: bioconductor-pics

   |downloads_bioconductor-pics| |docker_bioconductor-pics|

   :versions: 2.26.0, 2.24.0, 2.22.0, 2.20.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`gsl` >=2.4,<2.5.0a0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-pics|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pics

   and update with::

      conda update bioconductor-pics

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pics


.. |required_by_bioconductor-pics| conda:required_by:: bioconductor-pics
.. |downloads_bioconductor-pics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pics.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pics| image:: https://quay.io/repository/biocontainers/bioconductor-pics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pics







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pics/README.html

