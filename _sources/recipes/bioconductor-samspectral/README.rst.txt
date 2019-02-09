.. title:: Package Recipe 'bioconductor-samspectral'
.. highlight: bash


bioconductor-samspectral
========================

.. conda:recipe:: bioconductor-samspectral
   :replaces_section_title:

   Samples large data such that spectral clustering is possible while preserving density information in edge weights. More specifically\, given a matrix of coordinates as input\, SamSPECTRAL first builds the communities to sample the data points. Then\, it builds a graph and after weighting the edges by conductance computation\, the graph is passed to a classic spectral clustering algorithm to find the spectral clusters. The last stage of SamSPECTRAL is to combine the spectral clusters. The resulting \"connected components\" estimate biological cell populations in the data. See the vignette for more details on how to use this package\, some illustrations\, and simple examples.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SamSPECTRAL.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-samspectral <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-samspectral>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-samspectral/meta.yaml>`_

   


.. conda:package:: bioconductor-samspectral

   |downloads_bioconductor-samspectral| |docker_bioconductor-samspectral|

   :versions: 1.36.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-samspectral|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-samspectral

   and update with::

      conda update bioconductor-samspectral

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-samspectral


.. |required_by_bioconductor-samspectral| conda:required_by:: bioconductor-samspectral
.. |downloads_bioconductor-samspectral| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-samspectral.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-samspectral| image:: https://quay.io/repository/biocontainers/bioconductor-samspectral/status
   :target: https://quay.io/repository/biocontainers/bioconductor-samspectral







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-samspectral/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-samspectral/README.html

