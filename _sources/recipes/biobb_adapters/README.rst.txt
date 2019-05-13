:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_adapters'
.. highlight: bash

biobb_adapters
==============

.. conda:recipe:: biobb_adapters
   :replaces_section_title:

   Biobb\_adapters is the Biobb module collection to use the building blocks with several workflow managers.

   :homepage: https://github.com/bioexcel/biobb_adapters
   :license: APACHE / Apache Software License
   :recipe: /`biobb_adapters <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_adapters>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_adapters/meta.yaml>`_

   \[\!\[Documentation Status\]\(https\:\/\/readthedocs.org\/projects\/biobb\-model\/badge\/\?version\=latest\)\]\(https\:\/\/biobb\-model.readthedocs.io\/en\/latest\/\?badge\=latest\)


   \# biobb\_adapters

   \#\#\# Introduction
   Biobb\_adapters is the Biobb module collection to use the building blocks with several workflow managers.
   Biobb \(BioExcel building blocks\) packages are Python building blocks that
   create new layer of compatibility and interoperability over popular
   bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\:
   \[latest API documentation\]\(http\:\/\/biobb\_adapters.readthedocs.io\/en\/latest\/\).

   \#\#\# Version
   February 2019 Release

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





.. conda:package:: biobb_adapters

   |downloads_biobb_adapters| |docker_biobb_adapters|

   :versions: 0.1.4-0
   
   :depends cwltool: 
   :depends jupyter: 
   :depends python: >=3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobb_adapters

   and update with::

      conda update biobb_adapters

   or use the docker container::

      docker pull quay.io/biocontainers/biobb_adapters:<tag>

   (see `biobb_adapters/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_adapters| image:: https://img.shields.io/conda/dn/bioconda/biobb_adapters.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_adapters
   :alt:   (downloads)
.. |docker_biobb_adapters| image:: https://quay.io/repository/biocontainers/biobb_adapters/status
   :target: https://quay.io/repository/biocontainers/biobb_adapters
.. _`biobb_adapters/tags`: https://quay.io/repository/biocontainers/biobb_adapters?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_adapters/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_adapters/README.html