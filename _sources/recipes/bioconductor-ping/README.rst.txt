.. title:: Package Recipe 'bioconductor-ping'
.. highlight: bash


bioconductor-ping
=================

.. conda:recipe:: bioconductor-ping
   :replaces_section_title:

   Probabilistic inference of ChIP\-Seq using an empirical Bayes mixture model approach.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PING.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ping/meta.yaml>`_
   :links: biotools: :biotools:`ping`

   


.. conda:package:: bioconductor-ping

   |downloads_bioconductor-ping| |docker_bioconductor-ping|

   :versions: 2.26.0, 2.24.0, 2.22.0, 2.20.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-chipseq` >=1.32.0,<1.33.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-gviz` >=1.26.0,<1.27.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-pics` >=2.26.0,<2.27.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-fda`  

   :required~by: |required_by_bioconductor-ping|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ping

   and update with::

      conda update bioconductor-ping

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ping


.. |required_by_bioconductor-ping| conda:required_by:: bioconductor-ping
.. |downloads_bioconductor-ping| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ping.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ping| image:: https://quay.io/repository/biocontainers/bioconductor-ping/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ping







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ping/README.html

