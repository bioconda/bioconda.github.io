:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prestor'
.. highlight: bash

prestor
=======

.. conda:recipe:: r-prestor
   :replaces_section_title:

   A prototype package for generating quality control plots from pRESTO output.

   :homepage: https://bitbucket.org/javh/prototype-prestor
   :license: `OTHER / Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) <https://creativecommons.org/licenses/by-sa/4.0/legalcode>`_
   :recipe: /`r-prestor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-prestor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-prestor/meta.yaml>`_

   


.. conda:package:: prestor

   |downloads_prestor| |docker_prestor|

   :versions: 07f9c7caeb60-1, 07f9c7caeb60-0
   
   :depends pandoc: <2.0
   :depends r-alakazam: 
   :depends r-base: >=3.4.1
   :depends r-bibtex: 
   :depends r-captioner: 
   :depends r-devtools: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-hexbin: 
   :depends r-knitr: 
   :depends r-optparse: 
   :depends r-rcpp: >=0.12.11
   :depends r-rmarkdown: 
   :depends r-roxygen2: 
   :depends r-testthat: 
   :depends r-tidyr: 
   :depends texlive-core: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prestor

   and update with::

      conda update prestor

   or use the docker container::

      docker pull quay.io/biocontainers/prestor:<tag>

   (see `prestor/tags`_ for valid values for ``<tag>``)


.. |downloads_prestor| image:: https://img.shields.io/conda/dn/bioconda/prestor.svg?style=flat
   :target: https://anaconda.org/bioconda/prestor
   :alt:   (downloads)
.. |docker_prestor| image:: https://quay.io/repository/biocontainers/prestor/status
   :target: https://quay.io/repository/biocontainers/prestor
.. _`prestor/tags`: https://quay.io/repository/biocontainers/prestor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prestor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prestor/README.html