:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_gromacs'
.. highlight: bash

biobb_gromacs
=============

.. conda:recipe:: biobb_gromacs
   :replaces_section_title:
   :noindex:

   biobb\_gromacs is the Biobb module collection to perform molecular dynamics simulations using the GROMACS MD suite.

   :homepage: https://github.com/bioexcel/biobb_gromacs
   :documentation: http://biobb_gromacs.readthedocs.io/en/latest/
   
   :license: APACHE / Apache Software License
   :recipe: /`biobb_gromacs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_gromacs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_gromacs/meta.yaml>`_

   \# biobb\_gromacs

   \#\#\# Introduction
   Biobb\_gromacs is the Biobb module collection to perform molecular dynamics simulationsusing the GROMACS MD suite.
   Biobb \(BioExcel building blocks\) packages are Python building blocks that
   create new layer of compatibility and interoperability over popular
   bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\:
   \[latest API documentation\]\(http\:\/\/biobb\-gromacs.readthedocs.io\/en\/latest\/\).


   \#\#\# Copyright \& Licensing
   This software has been developed in the \[MMB group\]\(http\:\/\/mmb.irbbarcelona.org\) at the \[BSC\]\(http\:\/\/www.bsc.es\/\) \& \[IRB\]\(https\:\/\/www.irbbarcelona.org\/\) for the \[European BioExcel\]\(http\:\/\/bioexcel.eu\/\)\, funded by the European Commission \(EU H2020 \[823830\]\(http\:\/\/cordis.europa.eu\/projects\/823830\)\, EU H2020 \[675728\]\(http\:\/\/cordis.europa.eu\/projects\/675728\)\).

   \* \(c\) 2015\-2023 \[Barcelona Supercomputing Center\]\(https\:\/\/www.bsc.es\/\)
   \* \(c\) 2015\-2022 \[Institute for Research in Biomedicine\]\(https\:\/\/www.irbbarcelona.org\/\)
   Licensed under the
   \[Apache License 2.0\]\(https\:\/\/www.apache.org\/licenses\/LICENSE\-2.0\)\, see the file LICENSE for details.

   \!\[\]\(https\:\/\/bioexcel.eu\/wp\-content\/uploads\/2019\/04\/Bioexcell\_logo\_1080px\_transp.png \"Bioexcel\"\)





.. conda:package:: biobb_gromacs

   |downloads_biobb_gromacs| |docker_biobb_gromacs|

   :versions:
      
      

      ``4.1.0-0``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.9.0-0``,  ``3.8.1-0``,  ``3.8.0-0``

      

   
   :depends biobb_common: ``4.1.0``
   :depends gromacs: ``2022.2``
   :depends python: ``>=3.8``
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

      mamba install biobb_gromacs

   and update with::

      mamba update biobb_gromacs

  To create a new environment, run::

      mamba create --name myenvname biobb_gromacs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biobb_gromacs:<tag>

   (see `biobb_gromacs/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_gromacs| image:: https://img.shields.io/conda/dn/bioconda/biobb_gromacs.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_gromacs
   :alt:   (downloads)
.. |docker_biobb_gromacs| image:: https://quay.io/repository/biocontainers/biobb_gromacs/status
   :target: https://quay.io/repository/biocontainers/biobb_gromacs
.. _`biobb_gromacs/tags`: https://quay.io/repository/biocontainers/biobb_gromacs?tab=tags


.. raw:: html

    <script>
        var package = "biobb_gromacs";
        var versions = ["4.1.0","4.0.0","4.0.0","3.9.0","3.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_gromacs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_gromacs/README.html