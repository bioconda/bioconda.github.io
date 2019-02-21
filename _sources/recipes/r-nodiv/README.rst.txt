:orphan:  .. only available via index, not via toctree

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

   :versions: 1.3.0-1, 1.3.0-0, 1.2.0-2, 1.2.0-1, 1.2.0-0
   
   :depends r-ape: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-picante: 
   
   :depends r-raster: 
   
   :depends r-sp: 
   
   :depends r-vegan: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-nodiv

   and update with::

      conda update r-nodiv

   or use the docker container::

      docker pull quay.io/biocontainers/r-nodiv:<tag>

   (see `r-nodiv/tags`_ for valid values for ``<tag>``)


.. |downloads_r-nodiv| image:: https://img.shields.io/conda/dn/bioconda/r-nodiv.svg?style=flat
   :alt:   (downloads)
.. |docker_r-nodiv| image:: https://quay.io/repository/biocontainers/r-nodiv/status
   :target: https://quay.io/repository/biocontainers/r-nodiv
.. _`r-nodiv/tags`: https://quay.io/repository/biocontainers/r-nodiv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-nodiv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-nodiv/README.html