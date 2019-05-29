:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_md'
.. highlight: bash

biobb_md
========

.. conda:recipe:: biobb_md
   :replaces_section_title:

   Biobb\_md is the Biobb module collection to perform molecular dynamics simulations.

   :homepage: https://github.com/bioexcel/biobb_md
   :license: APACHE / Apache Software License
   :recipe: /`biobb_md <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_md>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_md/meta.yaml>`_

   \[\!\[Documentation Status\]\(https\:\/\/readthedocs.org\/projects\/biobb\-md\/badge\/\?version\=latest\)\]\(https\:\/\/biobb\-md.readthedocs.io\/en\/latest\/\?badge\=latest\)

   \# biobb\_md

   \#\#\# Introduction
   Biobb\_md is the Biobb module collection to perform molecular dynamics simulations.
   Biobb \(BioExcel building blocks\) packages are Python building blocks that
   create new layer of compatibility and interoperability over popular
   bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\:
   \[latest API documentation\]\(http\:\/\/biobb\_md.readthedocs.io\/en\/latest\/\).


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





.. conda:package:: biobb_md

   |downloads_biobb_md| |docker_biobb_md|

   :versions: 1.1.7-0, 1.1.6-0, 0.1.5-0, 0.1.4-0, 0.1.2-0, 0.1.1-0, 0.1.0-0, 0.0.2-0, 0.0.1-0
   
   :depends biobb_common: 1.1.6
   :depends gromacs: 2019.1
   :depends python: 3.6.*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobb_md

   and update with::

      conda update biobb_md

   or use the docker container::

      docker pull quay.io/biocontainers/biobb_md:<tag>

   (see `biobb_md/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_md| image:: https://img.shields.io/conda/dn/bioconda/biobb_md.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_md
   :alt:   (downloads)
.. |docker_biobb_md| image:: https://quay.io/repository/biocontainers/biobb_md/status
   :target: https://quay.io/repository/biocontainers/biobb_md
.. _`biobb_md/tags`: https://quay.io/repository/biocontainers/biobb_md?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_md/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_md/README.html