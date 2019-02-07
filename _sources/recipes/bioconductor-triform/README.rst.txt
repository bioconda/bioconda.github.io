.. title:: Package Recipe 'bioconductor-triform'
.. highlight: bash


bioconductor-triform
====================

.. conda:recipe:: bioconductor-triform
   :replaces_section_title:

   The Triform algorithm uses model\-free statistics to identify peak\-like distributions of TF ChIP sequencing reads\, taking advantage of an improved peak definition in combination with known profile characteristics.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/triform.html
   :license: GPL-2
   :recipe: /`bioconductor-triform <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-triform>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-triform/meta.yaml>`_
   :links: biotools: :biotools:`triform`

   


.. conda:package:: bioconductor-triform

   |downloads_bioconductor-triform| |docker_bioconductor-triform|

   :versions: 1.24.0, 1.22.0, 1.20.0, 1.18.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-yaml`  

   :required~by: |required_by_bioconductor-triform|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-triform

   and update with::

      conda update bioconductor-triform

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-triform


.. |required_by_bioconductor-triform| conda:required_by:: bioconductor-triform
.. |downloads_bioconductor-triform| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-triform.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-triform| image:: https://quay.io/repository/biocontainers/bioconductor-triform/status
   :target: https://quay.io/repository/biocontainers/bioconductor-triform







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-triform/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-triform/README.html

