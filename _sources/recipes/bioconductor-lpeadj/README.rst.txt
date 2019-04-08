:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lpeadj'
.. highlight: bash

bioconductor-lpeadj
===================

.. conda:recipe:: bioconductor-lpeadj
   :replaces_section_title:

   Two options are added to the LPE algorithm. The original LPE method sets all variances below the max variance in the ordered distribution of variances to the maximum variance. in LPEadj this option is turned off by default.  The second option is to use a variance adjustment based on sample size rather than pi\/2.  By default the LPEadj uses the sample size based variance adjustment.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/LPEadj.html
   :license: LGPL
   :recipe: /`bioconductor-lpeadj <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpeadj>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpeadj/meta.yaml>`_
   :links: biotools: :biotools:`lpeadj`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-lpeadj

   |downloads_bioconductor-lpeadj| |docker_bioconductor-lpeadj|

   :versions: 1.42.0-0, 1.40.0-0, 1.38.0-0
   
   :depends bioconductor-lpe: >=1.56.0,<1.57.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lpeadj

   and update with::

      conda update bioconductor-lpeadj

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lpeadj:<tag>

   (see `bioconductor-lpeadj/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lpeadj| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lpeadj.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lpeadj| image:: https://quay.io/repository/biocontainers/bioconductor-lpeadj/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lpeadj
.. _`bioconductor-lpeadj/tags`: https://quay.io/repository/biocontainers/bioconductor-lpeadj?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lpeadj/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lpeadj/README.html