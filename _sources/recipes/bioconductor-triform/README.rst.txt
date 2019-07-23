:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-triform'
.. highlight: bash

bioconductor-triform
====================

.. conda:recipe:: bioconductor-triform
   :replaces_section_title:

   The Triform algorithm uses model\-free statistics to identify peak\-like distributions of TF ChIP sequencing reads\, taking advantage of an improved peak definition in combination with known profile characteristics.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/triform.html
   :license: GPL-2
   :recipe: /`bioconductor-triform <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-triform>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-triform/meta.yaml>`_
   :links: biotools: :biotools:`triform`

   


.. conda:package:: bioconductor-triform

   |downloads_bioconductor-triform| |docker_bioconductor-triform|

   :versions: 1.26.0-1, 1.24.0-0, 1.22.0-0, 1.20.0-0, 1.18.0-0
   
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-triform

   and update with::

      conda update bioconductor-triform

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-triform:<tag>

   (see `bioconductor-triform/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-triform| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-triform.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-triform
   :alt:   (downloads)
.. |docker_bioconductor-triform| image:: https://quay.io/repository/biocontainers/bioconductor-triform/status
   :target: https://quay.io/repository/biocontainers/bioconductor-triform
.. _`bioconductor-triform/tags`: https://quay.io/repository/biocontainers/bioconductor-triform?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-triform/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-triform/README.html