:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_io'
.. highlight: bash

biobb_io
========

.. conda:recipe:: biobb_io
   :replaces_section_title:

   Biobb\_io is the Biobb module collection to fetch data to be consumed by the rest of the Biobb building blocks.

   :homepage: https://github.com/bioexcel/biobb_io
   :license: APACHE / Apache Software License
   :recipe: /`biobb_io <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_io>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_io/meta.yaml>`_

   \[\!\[\]\(https\:\/\/readthedocs.org\/projects\/biobb\-io\/badge\/\?version\=latest\)\]\(https\:\/\/biobb\-io.readthedocs.io\/en\/latest\/\?badge\=latest\) \[\!\[\]\(https\:\/\/img.shields.io\/badge\/install\%20with\-bioconda\-brightgreen.svg\?style\=flat\)\]\(https\:\/\/anaconda.org\/bioconda\/biobb\_io\) \[\!\[\]\(https\:\/\/quay.io\/repository\/biocontainers\/biobb\_io\/status\)\]\(https\:\/\/quay.io\/repository\/biocontainers\/biobb\_io\) \[\!\[\]\(https\:\/\/www.singularity\-hub.org\/static\/img\/hosted\-singularity\-\-hub\-\%23e32929.svg\)\]\(https\:\/\/singularity\-hub.org\/collections\/2411\) \[\!\[\]\(https\:\/\/img.shields.io\/badge\/License\-Apache\%202.0\-blue.svg\)\]\(https\:\/\/opensource.org\/licenses\/Apache\-2.0\)

   \# biobb\_io

   \#\#\# Introduction
   Biobb\_io is the Biobb module collection to fetch data to be consumed by the
   rest of the Biobb building blocks.
   Biobb \(BioExcel building blocks\) packages are Python building blocks that
   create new layer of compatibility and interoperability over popular
   bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\:
   \[latest API documentation\]\(http\:\/\/biobb\_io.readthedocs.io\/en\/latest\/\).


   \#\#\# Copyright \& Licensing
   This software has been developed in the \[MMB group\]\(http\:\/\/mmb.irbbarcelona.org\) at the \[BSC\]\(http\:\/\/www.bsc.es\/\) \& \[IRB\]\(https\:\/\/www.irbbarcelona.org\/\) for the \[European BioExcel\]\(http\:\/\/bioexcel.eu\/\)\, funded by the European Commission \(EU H2020 \[823830\]\(http\:\/\/cordis.europa.eu\/projects\/823830\)\, EU H2020 \[675728\]\(http\:\/\/cordis.europa.eu\/projects\/675728\)\).

   \* \(c\) 2015\-2019 \[Barcelona Supercomputing Center\]\(https\:\/\/www.bsc.es\/\)
   \* \(c\) 2015\-2019 \[Institute for Research in Biomedicine\]\(https\:\/\/www.irbbarcelona.org\/\)
   Licensed under the
   \[Apache License 2.0\]\(https\:\/\/www.apache.org\/licenses\/LICENSE\-2.0\)\, see the file LICENSE for details.

   \!\[\]\(https\:\/\/bioexcel.eu\/wp\-content\/uploads\/2019\/04\/Bioexcell\_logo\_1080px\_transp.png \"Bioexcel\"\)





.. conda:package:: biobb_io

   |downloads_biobb_io| |docker_biobb_io|

   :versions: 2.0.0-0, 1.1.6-0, 0.1.4-0, 0.1.3-0, 0.1.1-0, 0.1.0-0, 0.0.8-0, 0.0.6-0, 0.0.5-2, 0.0.5-0, 0.0.3-0
   
   :depends biobb_common: 2.0.1
   :depends python: 3.6.*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobb_io

   and update with::

      conda update biobb_io

   or use the docker container::

      docker pull quay.io/biocontainers/biobb_io:<tag>

   (see `biobb_io/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_io| image:: https://img.shields.io/conda/dn/bioconda/biobb_io.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_io
   :alt:   (downloads)
.. |docker_biobb_io| image:: https://quay.io/repository/biocontainers/biobb_io/status
   :target: https://quay.io/repository/biocontainers/biobb_io
.. _`biobb_io/tags`: https://quay.io/repository/biocontainers/biobb_io?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_io/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_io/README.html