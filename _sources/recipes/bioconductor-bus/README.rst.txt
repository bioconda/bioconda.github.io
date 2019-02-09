.. title:: Package Recipe 'bioconductor-bus'
.. highlight: bash


bioconductor-bus
================

.. conda:recipe:: bioconductor-bus
   :replaces_section_title:

   This package can be used to compute associations among genes \(gene\-networks\) or between genes and some external traits \(i.e. clinical\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BUS.html
   :license: GPL-3
   :recipe: /`bioconductor-bus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bus/meta.yaml>`_
   :links: biotools: :biotools:`bus`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-bus

   |downloads_bioconductor-bus| |docker_bioconductor-bus|

   :versions: 1.38.0, 1.36.0, 1.34.0

   :depends: :conda:package:`bioconductor-minet` >=3.40.0,<3.41.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-infotheo`  

   :required~by: |required_by_bioconductor-bus|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bus

   and update with::

      conda update bioconductor-bus

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bus


.. |required_by_bioconductor-bus| conda:required_by:: bioconductor-bus
.. |downloads_bioconductor-bus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bus.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bus| image:: https://quay.io/repository/biocontainers/bioconductor-bus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bus







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bus/README.html

