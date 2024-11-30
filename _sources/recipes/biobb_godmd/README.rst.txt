:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_godmd'
.. highlight: bash

biobb_godmd
===========

.. conda:recipe:: biobb_godmd
   :replaces_section_title:
   :noindex:

   Biobb\_godmd is a BioBB category for GOdMD tool \(protein conformational transitions\).

   :homepage: https://github.com/bioexcel/biobb_godmd
   :license: APACHE / Apache Software License
   :recipe: /`biobb_godmd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_godmd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_godmd/meta.yaml>`_

   \# biobb\_godmd

   \#\#\# Introduction
   Biobb\_godmd allows the calculation of protein conformational transitions using the GOdMD package. 
   Biobb \(BioExcel building blocks\) packages are Python building blocks that
   create   new layer of compatibility and interoperability over popular
   bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\:
   \[latest API documentation\]\(http\:\/\/biobb\_ml.readthedocs.io\/en\/latest\/\).


   \#\#\# Copyright \& Licensing
   This software has been developed in the \[MMB group\]\(https\:\/\/mmb.irbbarcelona.org\) at the \[BSC\]\(https\:\/\/www.bsc.es\/\) \& \[IRB\]\(https\:\/\/www.irbbarcelona.org\/\) for the \[European BioExcel\]\(http\:\/\/bioexcel.eu\/\)\, funded by the European Commission \(EU H2020 \[823830\]\(http\:\/\/cordis.europa.eu\/projects\/823830\)\, EU H2020 \[675728\]\(http\:\/\/cordis.europa.eu\/projects\/675728\)\).

   \* \(c\) 2015\-2024 \[Barcelona Supercomputing Center\]\(https\:\/\/www.bsc.es\/\)
   \* \(c\) 2015\-2024 \[Institute for Research in Biomedicine\]\(https\:\/\/www.irbbarcelona.org\/\)
   Licensed under the
   \[Apache License 2.0\]\(https\:\/\/www.apache.org\/licenses\/LICENSE\-2.0\)\, see the file LICENSE for details.

   \!\[\]\(https\:\/\/bioexcel.eu\/wp\-content\/uploads\/2019\/04\/Bioexcell\_logo\_1080px\_transp.png \"Bioexcel\"\)





.. conda:package:: biobb_godmd

   |downloads_biobb_godmd| |docker_biobb_godmd|

   :versions:
      
      

      ``5.0.0-0``,  ``4.2.0-0``,  ``4.1.0-0``,  ``4.0.2-0``,  ``4.0.1-0``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.8.1-0``,  ``3.8.0-0``

      

   
   :depends biobb_common: ``5.0.0``
   :depends emboss: 
   :depends godmd: ``1.0.0``
   :depends python: ``>=3.9``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install biobb_godmd

   and update with::

      mamba update biobb_godmd

  To create a new environment, run::

      mamba create --name myenvname biobb_godmd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biobb_godmd:<tag>

   (see `biobb_godmd/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_godmd| image:: https://img.shields.io/conda/dn/bioconda/biobb_godmd.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_godmd
   :alt:   (downloads)
.. |docker_biobb_godmd| image:: https://quay.io/repository/biocontainers/biobb_godmd/status
   :target: https://quay.io/repository/biocontainers/biobb_godmd
.. _`biobb_godmd/tags`: https://quay.io/repository/biocontainers/biobb_godmd?tab=tags


.. raw:: html

    <script>
        var package = "biobb_godmd";
        var versions = ["5.0.0","4.2.0","4.1.0","4.0.2","4.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_godmd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_godmd/README.html