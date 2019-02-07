.. title:: Package Recipe 'bioconductor-vtpnet'
.. highlight: bash


bioconductor-vtpnet
===================

.. conda:recipe:: bioconductor-vtpnet
   :replaces_section_title:

   variant\-transcription factor\-phenotype networks\, inspired by Maurano et al.\, Science \(2012\)\, PMID 22955828

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/vtpnet.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-vtpnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vtpnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vtpnet/meta.yaml>`_

   


.. conda:package:: bioconductor-vtpnet

   |downloads_bioconductor-vtpnet| |docker_bioconductor-vtpnet|

   :versions: 0.22.0

   :depends: :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-gwascat` >=2.14.0,<2.15.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-doparallel`  :conda:package:`r-foreach`  

   :required~by: |required_by_bioconductor-vtpnet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-vtpnet

   and update with::

      conda update bioconductor-vtpnet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-vtpnet


.. |required_by_bioconductor-vtpnet| conda:required_by:: bioconductor-vtpnet
.. |downloads_bioconductor-vtpnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vtpnet.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-vtpnet| image:: https://quay.io/repository/biocontainers/bioconductor-vtpnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vtpnet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vtpnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vtpnet/README.html

