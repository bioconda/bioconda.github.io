.. title:: Package Recipe 'bioconductor-procoil'
.. highlight: bash


bioconductor-procoil
====================

.. conda:recipe:: bioconductor-procoil
   :replaces_section_title:

   The package allows for predicting whether a coiled coil sequence \(amino acid sequence plus heptad register\) is more likely to form a dimer or more likely to form a trimer. Additionally to the prediction itself\, a prediction profile is computed which allows for determining the strengths to which the individual residues are indicative for either class. Prediction profiles can also be visualized as curves or heatmaps.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/procoil.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-procoil <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-procoil>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-procoil/meta.yaml>`_
   :links: biotools: :biotools:`procoil`

   


.. conda:package:: bioconductor-procoil

   |downloads_bioconductor-procoil| |docker_bioconductor-procoil|

   :versions: 2.10.0, 2.8.0, 2.6.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-kebabs` >=1.16.0,<1.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-procoil|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-procoil

   and update with::

      conda update bioconductor-procoil

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-procoil


.. |required_by_bioconductor-procoil| conda:required_by:: bioconductor-procoil
.. |downloads_bioconductor-procoil| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-procoil.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-procoil| image:: https://quay.io/repository/biocontainers/bioconductor-procoil/status
   :target: https://quay.io/repository/biocontainers/bioconductor-procoil







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-procoil/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-procoil/README.html

