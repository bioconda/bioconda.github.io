.. title:: Package Recipe 'r-shazam'
.. highlight: bash


r-shazam
========

.. conda:recipe:: r-shazam
   :replaces_section_title:

   Provides a computational framework for analyzing mutations in immunoglobulin \(Ig\) sequences. Includes methods for Bayesian estimation of antigen\-driven selection pressure\, mutational load quantification\, building of somatic hypermutation \(SHM\) models\, and model\-dependent distance calculations. Also includes empirically derived models of SHM for both mice and humans. Citations\:  Gupta and Vander Heiden\, et al \(2015\) \<doi\:10.1093\/bioinformatics\/btv359\>\,  Yaari\, et al \(2012\) \<doi\:10.1093\/nar\/gks457\>\,  Yaari\, et al \(2013\) \<doi\:10.3389\/fimmu.2013.00358\>\,  Cui\, et al \(2016\) \<doi\:10.4049\/jimmunol.1502263\>.

   :homepage: http://shazam.readthedocs.io
   :license: CC / CC BY-SA 4.0
   :recipe: /`r-shazam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-shazam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-shazam/meta.yaml>`_

   


.. conda:package:: r-shazam

   |downloads_r-shazam| |docker_r-shazam|

   :versions: 0.1.10, 0.1.9

   :depends: :conda:package:`r-alakazam` >=0.2.11 :conda:package:`r-ape`  :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-diptest`  :conda:package:`r-doparallel`  :conda:package:`r-dplyr` >=0.5.0 :conda:package:`r-foreach`  :conda:package:`r-ggplot2` >=2.0.0 :conda:package:`r-igraph`  :conda:package:`r-iterators`  :conda:package:`r-kedd`  :conda:package:`r-kernsmooth`  :conda:package:`r-lazyeval`  :conda:package:`r-mass`  :conda:package:`r-progress`  :conda:package:`r-scales`  :conda:package:`r-sdmtools`  :conda:package:`r-seqinr`  :conda:package:`r-stringi` >=1.1.3 :conda:package:`r-tidyr`  

   :required~by: |required_by_r-shazam|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-shazam

   and update with::

      conda update r-shazam

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-shazam


.. |required_by_r-shazam| conda:required_by:: r-shazam
.. |downloads_r-shazam| image:: https://img.shields.io/conda/dn/bioconda/r-shazam.svg?style=flat
   :alt:   (downloads)
.. |docker_r-shazam| image:: https://quay.io/repository/biocontainers/r-shazam/status
   :target: https://quay.io/repository/biocontainers/r-shazam







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-shazam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-shazam/README.html

