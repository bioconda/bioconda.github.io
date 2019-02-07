.. title:: Package Recipe 'bioconductor-dama'
.. highlight: bash


bioconductor-dama
=================

.. conda:recipe:: bioconductor-dama
   :replaces_section_title:

   This package contains functions for the efficient design of factorial two\-colour microarray experiments and for the statistical analysis of factorial microarray data. Statistical details are described in Bretz et al. \(2003\, submitted\)

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/daMA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-dama <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dama>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dama/meta.yaml>`_
   :links: biotools: :biotools:`dama`, doi: :doi:`10.1016/j.csda.2004.08.014`

   


.. conda:package:: bioconductor-dama

   |downloads_bioconductor-dama| |docker_bioconductor-dama|

   :versions: 1.54.0, 1.52.0, 1.50.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mass`  

   :required~by: |required_by_bioconductor-dama|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dama

   and update with::

      conda update bioconductor-dama

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-dama


.. |required_by_bioconductor-dama| conda:required_by:: bioconductor-dama
.. |downloads_bioconductor-dama| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dama.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-dama| image:: https://quay.io/repository/biocontainers/bioconductor-dama/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dama







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dama/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dama/README.html

