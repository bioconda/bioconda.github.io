:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_analysis'
.. highlight: bash

biobb_analysis
==============

.. conda:recipe:: biobb_analysis
   :replaces_section_title:

   Biobb\_analysis is the Biobb module collection to perform analysis of molecular dynamics simulations.

   :homepage: https://github.com/bioexcel/biobb_analysis
   :license: APACHE / Apache Software License
   :recipe: /`biobb_analysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_analysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_analysis/meta.yaml>`_

   \[\!\[Documentation Status\]\(https\:\/\/readthedocs.org\/projects\/biobb\-analysis\/badge\/\?version\=latest\)\]\(https\:\/\/biobb\-analysis.readthedocs.io\/en\/latest\/\?badge\=latest\)

   \# biobb\_analysis

   \#\#\# Introduction
   Biobb\_analysis is the Biobb module collection to perform analysis of molecular dynamics simulations.
   Biobb \(BioExcel building blocks\) packages are Python building blocks that
   create new layer of compatibility and interoperability over popular
   bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\:
   \[latest API documentation\]\(http\:\/\/biobb\_analysis.readthedocs.io\/en\/latest\/\).


   \#\#\# Copyright \& Licensing
   This software has been developed in the MMB group \(http\:\/\/mmb.irbbarcelona.org\) at the
   BSC \(http\:\/\/www.bsc.es\/\) \& IRB \(https\:\/\/www.irbbarcelona.org\/\) for the European BioExcel \(http\:\/\/bioexcel.eu\/\)\, funded by the European Commission
   \(EU H2020 \[675728\]\(http\:\/\/cordis.europa.eu\/projects\/675728\)\).

   \* \(c\) 2015\-2019 \[Barcelona Supercomputing Center\]\(https\:\/\/www.bsc.es\/\)
   \* \(c\) 2015\-2019 \[Institute for Research in Biomedicine\]\(https\:\/\/www.irbbarcelona.org\/\)

   Licensed under the
   \[Apache License 2.0\]\(https\:\/\/www.apache.org\/licenses\/LICENSE\-2.0\)\, see the file
   \[LICENSE\]\(LICENSE\) for details.

   \!\[\]\(https\:\/\/bioexcel.eu\/wp\-content\/uploads\/2015\/12\/Bioexcell\_logo\_1080px\_transp.png \"Bioexcel\"\)





.. conda:package:: biobb_analysis

   |downloads_biobb_analysis| |docker_biobb_analysis|

   :versions: 0.1.6-0, 0.1.4-0, 0.1.3-0, 0.1.2-0, 0.1.1-0, 0.1.0-0, 0.0.9-0, 0.0.8-0, 0.0.4-0
   
   :depends biobb_common: >=0.1.2
   
   :depends biopython: 1.72
   
   :depends gromacs: >=2018.4
   
   :depends python: >=3
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobb_analysis

   and update with::

      conda update biobb_analysis

   or use the docker container::

      docker pull quay.io/biocontainers/biobb_analysis:<tag>

   (see `biobb_analysis/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_analysis| image:: https://img.shields.io/conda/dn/bioconda/biobb_analysis.svg?style=flat
   :alt:   (downloads)
.. |docker_biobb_analysis| image:: https://quay.io/repository/biocontainers/biobb_analysis/status
   :target: https://quay.io/repository/biocontainers/biobb_analysis
.. _`biobb_analysis/tags`: https://quay.io/repository/biocontainers/biobb_analysis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_analysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_analysis/README.html