.. title:: Package Recipe 'bioconductor-ppinfer'
.. highlight: bash


bioconductor-ppinfer
====================

.. conda:recipe:: bioconductor-ppinfer
   :replaces_section_title:

   Interactions between proteins occur in many\, if not most\, biological processes. Most proteins perform their functions in networks associated with other proteins and other biomolecules. This fact has motivated the development of a variety of experimental methods for the identification of protein interactions. This variety has in turn ushered in the development of numerous different computational approaches for modeling and predicting protein interactions. Sometimes an experiment is aimed at identifying proteins closely related to some interesting proteins. A network based statistical learning method is used to infer the putative functions of proteins from the known functions of its neighboring proteins on a PPI network. This package identifies such proteins often involved in the same or similar biological functions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PPInfer.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ppinfer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ppinfer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ppinfer/meta.yaml>`_

   


.. conda:package:: bioconductor-ppinfer

   |downloads_bioconductor-ppinfer| |docker_bioconductor-ppinfer|

   :versions: 1.8.1, 1.6.0, 1.4.0, 1.2.4

   :depends: :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-fgsea` >=1.8.0,<1.9.0 :conda:package:`bioconductor-stringdb` >=1.22.0,<1.23.0 :conda:package:`bioconductor-yeastexpdata` >=0.28.0,<0.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-igraph`  :conda:package:`r-kernlab`  

   :required~by: |required_by_bioconductor-ppinfer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ppinfer

   and update with::

      conda update bioconductor-ppinfer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ppinfer


.. |required_by_bioconductor-ppinfer| conda:required_by:: bioconductor-ppinfer
.. |downloads_bioconductor-ppinfer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ppinfer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ppinfer| image:: https://quay.io/repository/biocontainers/bioconductor-ppinfer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ppinfer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ppinfer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ppinfer/README.html

