:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_haddock'
.. highlight: bash

biobb_haddock
=============

.. conda:recipe:: biobb_haddock
   :replaces_section_title:
   :noindex:

   biobb\_haddock is the Biobb module collection to compute information\-driven flexible protein\-protein docking.

   :homepage: https://github.com/bioexcel/biobb_haddock
   :documentation: http://biobb_haddock.readthedocs.io/en/latest/
   
   :license: APACHE / Apache Software License
   :recipe: /`biobb_haddock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_haddock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_haddock/meta.yaml>`_

   \# biobb\_haddock

   \#\#\# Introduction
   Biobb\_haddock is the Biobb module collection to compute information\-driven flexible protein\-protein docking.
   Biobb \(BioExcel building blocks\) packages are Python building blocks that
   create new layer of compatibility and interoperability over popular
   bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\:
   \[latest API documentation\]\(http\:\/\/biobb\-haddock.readthedocs.io\/en\/latest\/\).


   \#\#\# Copyright \& Licensing
   This software has been developed in the \[MMB group\]\(http\:\/\/mmb.irbbarcelona.org\) at the \[BSC\]\(http\:\/\/www.bsc.es\/\) \& \[IRB\]\(https\:\/\/www.irbbarcelona.org\/\) for the \[European BioExcel\]\(http\:\/\/bioexcel.eu\/\)\, funded by the European Commission \(EU H2020 \[823830\]\(http\:\/\/cordis.europa.eu\/projects\/823830\)\, EU H2020 \[675728\]\(http\:\/\/cordis.europa.eu\/projects\/675728\)\).

   \* \(c\) 2015\-2024 \[Barcelona Supercomputing Center\]\(https\:\/\/www.bsc.es\/\)
   \* \(c\) 2015\-2024 \[Institute for Research in Biomedicine\]\(https\:\/\/www.irbbarcelona.org\/\)
   Licensed under the
   \[Apache License 2.0\]\(https\:\/\/www.apache.org\/licenses\/LICENSE\-2.0\)\, see the file LICENSE for details.

   \!\[\]\(https\:\/\/bioexcel.eu\/wp\-content\/uploads\/2019\/04\/Bioexcell\_logo\_1080px\_transp.png \"Bioexcel\"\)





.. conda:package:: biobb_haddock

   |downloads_biobb_haddock| |docker_biobb_haddock|

   :versions:
      
      

      ``4.2.1-0``

      

   
   :depends biobb_common: ``4.2.0``
   :depends python: ``>=3.9``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install biobb_haddock

   and update with::

      mamba update biobb_haddock

  To create a new environment, run::

      mamba create --name myenvname biobb_haddock

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biobb_haddock:<tag>

   (see `biobb_haddock/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_haddock| image:: https://img.shields.io/conda/dn/bioconda/biobb_haddock.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_haddock
   :alt:   (downloads)
.. |docker_biobb_haddock| image:: https://quay.io/repository/biocontainers/biobb_haddock/status
   :target: https://quay.io/repository/biocontainers/biobb_haddock
.. _`biobb_haddock/tags`: https://quay.io/repository/biocontainers/biobb_haddock?tab=tags


.. raw:: html

    <script>
        var package = "biobb_haddock";
        var versions = ["4.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_haddock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_haddock/README.html