.. title:: Package Recipe 'bioconductor-meigor'
.. highlight: bash


bioconductor-meigor
===================

.. conda:recipe:: bioconductor-meigor
   :replaces_section_title:

   Global Optimization

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MEIGOR.html
   :license: GPL-3
   :recipe: /`bioconductor-meigor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meigor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meigor/meta.yaml>`_
   :links: biotools: :biotools:`meigor`, doi: :doi:`10.1186/1471-2105-15-136`

   


.. conda:package:: bioconductor-meigor

   |downloads_bioconductor-meigor| |docker_bioconductor-meigor|

   :versions: 1.16.0, 1.14.0, 1.12.0

   :depends: :conda:package:`bioconductor-cnorode` >=1.24.0,<1.25.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-desolve`  :conda:package:`r-rsolnp`  :conda:package:`r-snowfall`  

   :required~by: |required_by_bioconductor-meigor|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-meigor

   and update with::

      conda update bioconductor-meigor

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-meigor


.. |required_by_bioconductor-meigor| conda:required_by:: bioconductor-meigor
.. |downloads_bioconductor-meigor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meigor.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-meigor| image:: https://quay.io/repository/biocontainers/bioconductor-meigor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meigor







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meigor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meigor/README.html

