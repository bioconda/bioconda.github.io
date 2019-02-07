.. title:: Package Recipe 'bioconductor-graphalignment'
.. highlight: bash


bioconductor-graphalignment
===========================

.. conda:recipe:: bioconductor-graphalignment
   :replaces_section_title:

   Graph alignment is an extension package for the R programming environment which provides functions for finding an alignment between two networks based on link and node similarity scores. \(J. Berg and M. Laessig\, \"Cross\-species analysis of biological networks by Bayesian alignment\"\, PNAS 103 \(29\)\, 10967\-10972 \(2006\)\)

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GraphAlignment.html
   :license: file LICENSE
   :recipe: /`bioconductor-graphalignment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graphalignment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graphalignment/meta.yaml>`_

   


.. conda:package:: bioconductor-graphalignment

   |downloads_bioconductor-graphalignment| |docker_bioconductor-graphalignment|

   :versions: 1.46.0

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-graphalignment|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-graphalignment

   and update with::

      conda update bioconductor-graphalignment

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-graphalignment


.. |required_by_bioconductor-graphalignment| conda:required_by:: bioconductor-graphalignment
.. |downloads_bioconductor-graphalignment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-graphalignment.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-graphalignment| image:: https://quay.io/repository/biocontainers/bioconductor-graphalignment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-graphalignment







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-graphalignment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-graphalignment/README.html

