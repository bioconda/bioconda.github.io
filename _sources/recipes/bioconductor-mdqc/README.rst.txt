.. title:: Package Recipe 'bioconductor-mdqc'
.. highlight: bash


bioconductor-mdqc
=================

.. conda:recipe:: bioconductor-mdqc
   :replaces_section_title:

   MDQC is a multivariate quality assessment method for microarrays based on quality control \(QC\) reports. The Mahalanobis distance of an array\'s quality attributes is used to measure the similarity of the quality of that array against the quality of the other arrays. Then\, arrays with unusually high distances can be flagged as potentially low\-quality.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/mdqc.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-mdqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdqc/meta.yaml>`_
   :links: biotools: :biotools:`mdqc`, doi: :doi:`10.1093/bioinformatics/btm487`

   


.. conda:package:: bioconductor-mdqc

   |downloads_bioconductor-mdqc| |docker_bioconductor-mdqc|

   :versions: 1.44.0, 1.42.0, 1.40.0, 1.38.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-mass`  

   :required~by: |required_by_bioconductor-mdqc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mdqc

   and update with::

      conda update bioconductor-mdqc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mdqc


.. |required_by_bioconductor-mdqc| conda:required_by:: bioconductor-mdqc
.. |downloads_bioconductor-mdqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mdqc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mdqc| image:: https://quay.io/repository/biocontainers/bioconductor-mdqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mdqc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mdqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mdqc/README.html

