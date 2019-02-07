.. title:: Package Recipe 'bioconductor-minet'
.. highlight: bash


bioconductor-minet
==================

.. conda:recipe:: bioconductor-minet
   :replaces_section_title:

   This package implements various algorithms for inferring mutual information networks from data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/minet.html
   :license: file LICENSE
   :recipe: /`bioconductor-minet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minet/meta.yaml>`_
   :links: biotools: :biotools:`minet`, doi: :doi:`10.1186/1471-2105-9-461`

   


.. conda:package:: bioconductor-minet

   |downloads_bioconductor-minet| |docker_bioconductor-minet|

   :versions: 3.40.0, 3.38.0, 3.36.0

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-infotheo`  

   :required~by: |required_by_bioconductor-minet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-minet

   and update with::

      conda update bioconductor-minet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-minet


.. |required_by_bioconductor-minet| conda:required_by:: bioconductor-minet
.. |downloads_bioconductor-minet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-minet.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-minet| image:: https://quay.io/repository/biocontainers/bioconductor-minet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-minet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-minet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-minet/README.html

