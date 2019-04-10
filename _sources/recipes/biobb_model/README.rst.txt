:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_model'
.. highlight: bash

biobb_model
===========

.. conda:recipe:: biobb_model
   :replaces_section_title:

   Biobb\_model is the Biobb module collection to check and model 3d structures\, create mutations or reconstruct missing atoms.

   :homepage: https://github.com/bioexcel/biobb_model
   :license: APACHE / Apache Software License
   :recipe: /`biobb_model <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_model>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_model/meta.yaml>`_

   \[\!\[Documentation Status\]\(https\:\/\/readthedocs.org\/projects\/biobb\-model\/badge\/\?version\=latest\)\]\(https\:\/\/biobb\-model.readthedocs.io\/en\/latest\/\?badge\=latest\)

   \# biobb\_model

   \#\#\# Introduction
   Biobb\_model is the Biobb module collection to check and model 3d structures\,
   create mutations or reconstruct missing atoms.
   Biobb \(BioExcel building blocks\) packages are Python building blocks that
   create new layer of compatibility and interoperability over popular
   bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\:
   \[latest API documentation\]\(http\:\/\/biobb\_model.readthedocs.io\/en\/latest\/\).

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





.. conda:package:: biobb_model

   |downloads_biobb_model| |docker_biobb_model|

   :versions: 0.1.6-1, 0.1.5-1, 0.1.5-0, 0.1.3-0, 0.1.1-0, 0.1.0-0, 0.0.6-0
   
   :depends biobb_common: >=0.1.2
   :depends python: >=3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobb_model

   and update with::

      conda update biobb_model

   or use the docker container::

      docker pull quay.io/biocontainers/biobb_model:<tag>

   (see `biobb_model/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_model| image:: https://img.shields.io/conda/dn/bioconda/biobb_model.svg?style=flat
   :alt:   (downloads)
.. |docker_biobb_model| image:: https://quay.io/repository/biocontainers/biobb_model/status
   :target: https://quay.io/repository/biocontainers/biobb_model
.. _`biobb_model/tags`: https://quay.io/repository/biocontainers/biobb_model?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_model/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_model/README.html