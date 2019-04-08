:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-breakaway'
.. highlight: bash

r-breakaway
===========

.. conda:recipe:: r-breakaway
   :replaces_section_title:

   Species richness estimation is an important problem in biodiversity analysis. This package provides methods for total species richness estimation \(observed plus unobserved\) and a method for modelling total diversity with covariates. breakaway\(\) estimates total \(observed plus unobserved\) species richness. Microbial diversity datasets are characterized by a large number of rare species and a small number of highly abundant species. The class of models implemented by breakaway\(\) is flexible enough to model both these features. breakaway\_nof1\(\) implements a similar procedure however does not require a singleton count. betta\(\) provides a method for modelling total diversity with covariates in a way that accounts for its estimated nature and thus accounts for unobserved taxa\, and betta\_random\(\) permits random effects modelling.

   :homepage: https://CRAN.R-project.org/package=breakaway
   :license: GPL2 / GPL-2
   :recipe: /`r-breakaway <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-breakaway>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-breakaway/meta.yaml>`_

   


.. conda:package:: r-breakaway

   |downloads_r-breakaway| |docker_r-breakaway|

   :versions: 3.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-breakaway

   and update with::

      conda update r-breakaway

   or use the docker container::

      docker pull quay.io/biocontainers/r-breakaway:<tag>

   (see `r-breakaway/tags`_ for valid values for ``<tag>``)


.. |downloads_r-breakaway| image:: https://img.shields.io/conda/dn/bioconda/r-breakaway.svg?style=flat
   :alt:   (downloads)
.. |docker_r-breakaway| image:: https://quay.io/repository/biocontainers/r-breakaway/status
   :target: https://quay.io/repository/biocontainers/r-breakaway
.. _`r-breakaway/tags`: https://quay.io/repository/biocontainers/r-breakaway?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-breakaway/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-breakaway/README.html