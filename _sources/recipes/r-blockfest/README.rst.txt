:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-blockfest'
.. highlight: bash

r-blockfest
===========

.. conda:recipe:: r-blockfest
   :replaces_section_title:

   An R implementation of an extension of the \'BayeScan\' software \(Foll\, 2008\) \<DOI\:10.1534\/genetics.108.092221\> for codominant markers\, adding the option to group individual SNPs into pre\-defined blocks. A typical application of this new approach is the identification of genomic regions\, genes\, or gene sets containing one or more SNPs that evolved under directional selection.

   :homepage: https://CRAN.R-project.org/package=BlockFeST
   :license: GPL2 / GPL-2
   :recipe: /`r-blockfest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-blockfest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-blockfest/meta.yaml>`_
   :links: doi: :doi:`10.1534/genetics.108.092221`

   


.. conda:package:: r-blockfest

   |downloads_r-blockfest| |docker_r-blockfest|

   :versions: 1.6-2, 1.6-1, 1.6-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-basix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-blockfest

   and update with::

      conda update r-blockfest

   or use the docker container::

      docker pull quay.io/biocontainers/r-blockfest:<tag>

   (see `r-blockfest/tags`_ for valid values for ``<tag>``)


.. |downloads_r-blockfest| image:: https://img.shields.io/conda/dn/bioconda/r-blockfest.svg?style=flat
   :alt:   (downloads)
.. |docker_r-blockfest| image:: https://quay.io/repository/biocontainers/r-blockfest/status
   :target: https://quay.io/repository/biocontainers/r-blockfest
.. _`r-blockfest/tags`: https://quay.io/repository/biocontainers/r-blockfest?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-blockfest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-blockfest/README.html