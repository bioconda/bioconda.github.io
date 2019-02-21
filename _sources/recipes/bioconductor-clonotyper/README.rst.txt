:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clonotyper'
.. highlight: bash

bioconductor-clonotyper
=======================

.. conda:recipe:: bioconductor-clonotyper
   :replaces_section_title:

   High throughput analysis of T cell antigen receptor sequences The genes encoding T cell receptors are created by somatic recombination\, generating an immense combination of V\, \(D\) and J segments. Additional processes during the recombination create extra sequence diversity between the V an J segments. Collectively\, this hyper\-variable region is called the CDR3 loop. The purpose of this package is to process and quantitatively analyse millions of V\-CDR3\-J combination\, called clonotypes\, from multiple sequence libraries.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/clonotypeR.html
   :license: file LICENSE
   :recipe: /`bioconductor-clonotyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clonotyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clonotyper/meta.yaml>`_
   :links: biotools: :biotools:`clonotyper`

   


.. conda:package:: bioconductor-clonotyper

   |downloads_bioconductor-clonotyper| |docker_bioconductor-clonotyper|

   :versions: 1.20.0-0, 1.18.0-0, 1.16.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clonotyper

   and update with::

      conda update bioconductor-clonotyper

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clonotyper:<tag>

   (see `bioconductor-clonotyper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clonotyper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clonotyper.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-clonotyper| image:: https://quay.io/repository/biocontainers/bioconductor-clonotyper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clonotyper
.. _`bioconductor-clonotyper/tags`: https://quay.io/repository/biocontainers/bioconductor-clonotyper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clonotyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clonotyper/README.html