:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prostatecancergrasso'
.. highlight: bash

bioconductor-prostatecancergrasso
=================================

.. conda:recipe:: bioconductor-prostatecancergrasso
   :replaces_section_title:

   A Bioconductor data package for the Grasso \(2012\) Prostate Cancer dataset.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/prostateCancerGrasso.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-prostatecancergrasso <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prostatecancergrasso>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prostatecancergrasso/meta.yaml>`_

   


.. conda:package:: bioconductor-prostatecancergrasso

   |downloads_bioconductor-prostatecancergrasso| |docker_bioconductor-prostatecancergrasso|

   :versions: 1.12.0-1, 1.10.0-0
   
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-prostatecancergrasso

   and update with::

      conda update bioconductor-prostatecancergrasso

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-prostatecancergrasso:<tag>

   (see `bioconductor-prostatecancergrasso/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-prostatecancergrasso| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prostatecancergrasso.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-prostatecancergrasso
   :alt:   (downloads)
.. |docker_bioconductor-prostatecancergrasso| image:: https://quay.io/repository/biocontainers/bioconductor-prostatecancergrasso/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prostatecancergrasso
.. _`bioconductor-prostatecancergrasso/tags`: https://quay.io/repository/biocontainers/bioconductor-prostatecancergrasso?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prostatecancergrasso/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prostatecancergrasso/README.html