.. title:: Package Recipe 'r-nodiv'
.. highlight: bash


r-nodiv
=======

.. conda:recipe:: r-nodiv
   :replaces_section_title:

   An implementation of the nodiv algorithm\, see Borregaard\, M.K.\, Rahbek\, C.\, Fjeldsaa\, J.\, Parra\, J.L.\, Whittaker\, R.J. \& Graham\, C.H. 2014. Node\-based analysis of species distributions. Methods in Ecology and Evolution 5\(11\)\: 1225\-1235. \<DOI\:10.1111\/2041\-210X.12283\>. Package for phylogenetic analysis of species distributions. The main function goes through each node in the phylogeny\, compares the distributions of the two descendant nodes\, and compares the result to a null model. This highlights nodes where major distributional divergence have occurred. The distributional divergence for these nodes is mapped using the SOS statistic.

   :homepage: https://CRAN.R-project.org/package=nodiv
   :license: MIT / MIT
   :recipe: /`r-nodiv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nodiv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nodiv/meta.yaml>`_

   


.. conda:package:: r-nodiv

   |downloads_r-nodiv| |docker_r-nodiv|

   :versions: 1.3.0, 1.2.0

   :depends: :conda:package:`r-ape`  :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-picante`  :conda:package:`r-raster`  :conda:package:`r-sp`  :conda:package:`r-vegan`  

   :required~by: |required_by_r-nodiv|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-nodiv

   and update with::

      conda update r-nodiv

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-nodiv


.. |required_by_r-nodiv| conda:required_by:: r-nodiv
.. |downloads_r-nodiv| image:: https://img.shields.io/conda/dn/bioconda/r-nodiv.svg?style=flat
   :alt:   (downloads)
.. |docker_r-nodiv| image:: https://quay.io/repository/biocontainers/r-nodiv/status
   :target: https://quay.io/repository/biocontainers/r-nodiv







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-nodiv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-nodiv/README.html

