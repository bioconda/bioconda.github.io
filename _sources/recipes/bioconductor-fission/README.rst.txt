.. title:: Package Recipe 'bioconductor-fission'
.. highlight: bash


bioconductor-fission
====================

.. conda:recipe:: bioconductor-fission
   :replaces_section_title:

   This package provides a RangedSummarizedExperiment object of read counts in genes for a time course RNA\-Seq experiment of fission yeast \(Schizosaccharomyces pombe\) in response to oxidative stress \(1M sorbitol treatment\) at 0\, 15\, 30\, 60\, 120 and 180 mins. The samples are further divided between a wild\-type group and a group with deletion of atf21. The read count matrix was prepared and provided by the author of the study\: Leong HS\, Dawson K\, Wirth C\, Li Y\, Connolly Y\, Smith DL\, Wilkinson CR\, Miller CJ. \"A global non\-coding RNA system modulates fission yeast protein levels in response to stress\". Nat Commun 2014 May 23\;5\:3947. PMID\: 24853205. GEO\: GSE56761.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/fission.html
   :license: LGPL
   :recipe: /`bioconductor-fission <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fission>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fission/meta.yaml>`_

   


.. conda:package:: bioconductor-fission

   |downloads_bioconductor-fission| |docker_bioconductor-fission|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-fission|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fission

   and update with::

      conda update bioconductor-fission

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-fission


.. |required_by_bioconductor-fission| conda:required_by:: bioconductor-fission
.. |downloads_bioconductor-fission| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fission.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-fission| image:: https://quay.io/repository/biocontainers/bioconductor-fission/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fission







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fission/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fission/README.html

