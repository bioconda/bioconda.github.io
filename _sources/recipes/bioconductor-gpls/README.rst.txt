:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gpls'
.. highlight: bash

bioconductor-gpls
=================

.. conda:recipe:: bioconductor-gpls
   :replaces_section_title:

   Classification using generalized partial least squares for two\-group and multi\-group \(more than 2 group\) classification.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/gpls.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gpls <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpls>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpls/meta.yaml>`_
   :links: biotools: :biotools:`gpls`, doi: :doi:`10.1198/106186005X47697`

   


.. conda:package:: bioconductor-gpls

   |downloads_bioconductor-gpls| |docker_bioconductor-gpls|

   :versions: 1.56.0-0, 1.54.0-0, 1.52.0-0, 1.50.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gpls

   and update with::

      conda update bioconductor-gpls

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gpls:<tag>

   (see `bioconductor-gpls/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gpls| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gpls.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gpls
   :alt:   (downloads)
.. |docker_bioconductor-gpls| image:: https://quay.io/repository/biocontainers/bioconductor-gpls/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gpls
.. _`bioconductor-gpls/tags`: https://quay.io/repository/biocontainers/bioconductor-gpls?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gpls/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gpls/README.html