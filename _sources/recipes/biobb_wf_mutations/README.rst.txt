:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_wf_mutations'
.. highlight: bash

biobb_wf_mutations
==================

.. conda:recipe:: biobb_wf_mutations
   :replaces_section_title:
   :noindex:

   Lysozyme plus Mutations workflow built using BioBB Based on the official Gromacs tutorial\: http\:\/\/www.mdtutorials.com\/gmx\/lysozyme\/01\_pdb2gmx.html

   :homepage: https://github.com/bioexcel/biobb_md
   :license: APACHE / Apache Software License
   :recipe: /`biobb_wf_mutations <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_wf_mutations>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_wf_mutations/meta.yaml>`_

   \[\!\[Documentation Status\]\(https\:\/\/readthedocs.org\/projects\/biobb\-md\/badge\/\?version\=latest\)\]\(https\:\/\/biobb\-md.readthedocs.io\/en\/latest\/\?badge\=latest\)


   \# biobb\_wf\_mutations

   \#\#\# Introduction
   Lysozyme \+ Mutations workflow built using BioBB Based on the official Gromacs tutorial\: http\:\/\/www.mdtutorials.com\/gmx\/lysozyme\/01\_pdb2gmx.html
   Biobb \(BioExcel building blocks\) packages are Python building blocks that
   create new layer of compatibility and interoperability over popular
   bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\:
   \[latest API documentation\]\(http\:\/\/biobb\_md.readthedocs.io\/en\/latest\/\).

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





.. conda:package:: biobb_wf_mutations

   |downloads_biobb_wf_mutations| |docker_biobb_wf_mutations|

   :versions:
      
      

      ``0.0.6-0``,  ``0.0.5-0``

      

   
   :depends biobb_adapters: ``>=0.1.4``
   :depends biobb_common: ``>=0.1.2``
   :depends biobb_io: ``>=0.1.4``
   :depends biobb_md: ``>=0.1.5``
   :depends biobb_model: ``>=0.1.5``
   :depends python: ``>=3``
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

      mamba install biobb_wf_mutations

   and update with::

      mamba update biobb_wf_mutations

  To create a new environment, run::

      mamba create --name myenvname biobb_wf_mutations

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biobb_wf_mutations:<tag>

   (see `biobb_wf_mutations/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_wf_mutations| image:: https://img.shields.io/conda/dn/bioconda/biobb_wf_mutations.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_wf_mutations
   :alt:   (downloads)
.. |docker_biobb_wf_mutations| image:: https://quay.io/repository/biocontainers/biobb_wf_mutations/status
   :target: https://quay.io/repository/biocontainers/biobb_wf_mutations
.. _`biobb_wf_mutations/tags`: https://quay.io/repository/biocontainers/biobb_wf_mutations?tab=tags


.. raw:: html

    <script>
        var package = "biobb_wf_mutations";
        var versions = ["0.0.6","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_wf_mutations/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_wf_mutations/README.html