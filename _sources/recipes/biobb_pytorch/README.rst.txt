:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_pytorch'
.. highlight: bash

biobb_pytorch
=============

.. conda:recipe:: biobb_pytorch
   :replaces_section_title:
   :noindex:

   biobb\_pytorch is the Biobb module collection to create and train ML \& DL models.

   :homepage: https://github.com/bioexcel/biobb_pytorch
   :documentation: http://biobb_pytorch.readthedocs.io/en/latest/
   
   :license: APACHE / Apache Software License
   :recipe: /`biobb_pytorch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_pytorch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_pytorch/meta.yaml>`_

   \# biobb\_pytorch

   \#\#\# Introduction
   Biobb\_Pytorch is the Biobb module collection to create and train ML \& DL models using the popular \[PyTorch\]\(https\:\/\/pytorch.org\/\) Python library. Biobb \(BioExcel building blocks\) packages are Python building blocks that create new layer of compatibility and interoperability over popular bioinformatics tools. The latest documentation of this package can be found in our readthedocs site\: \[latest API documentation\]\(http\:\/\/biobb\-pytorch.readthedocs.io\/en\/latest\/\).


   \#\#\# Copyright \& Licensing
   This software has been developed in the \[MMB group\]\(http\:\/\/mmb.irbbarcelona.org\) at the \[BSC\]\(http\:\/\/www.bsc.es\/\) \& \[IRB\]\(https\:\/\/www.irbbarcelona.org\/\) for the \[European BioExcel\]\(http\:\/\/bioexcel.eu\/\)\, funded by the European Commission \(EU H2020 \[823830\]\(http\:\/\/cordis.europa.eu\/projects\/823830\)\, EU H2020 \[675728\]\(http\:\/\/cordis.europa.eu\/projects\/675728\)\).

   \* \(c\) 2015\-2024 \[Barcelona Supercomputing Center\]\(https\:\/\/www.bsc.es\/\)
   \* \(c\) 2015\-2024 \[Institute for Research in Biomedicine\]\(https\:\/\/www.irbbarcelona.org\/\)
   Licensed under the
   \[Apache License 2.0\]\(https\:\/\/www.apache.org\/licenses\/LICENSE\-2.0\)\, see the file LICENSE for details.

   \!\[\]\(https\:\/\/bioexcel.eu\/wp\-content\/uploads\/2019\/04\/Bioexcell\_logo\_1080px\_transp.png \"Bioexcel\"\)





.. conda:package:: biobb_pytorch

   |downloads_biobb_pytorch| |docker_biobb_pytorch|

   :versions:
      
      

      ``5.0.0-0``,  ``4.2.1-0``,  ``4.2.0-0``,  ``4.1.3-0``,  ``4.1.2-0``,  ``4.1.1-0``,  ``4.1.0-0``

      

   
   :depends biobb_common: ``5.0.0``
   :depends python: ``>=3.9``
   :depends pytorch: 
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

      mamba install biobb_pytorch

   and update with::

      mamba update biobb_pytorch

  To create a new environment, run::

      mamba create --name myenvname biobb_pytorch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biobb_pytorch:<tag>

   (see `biobb_pytorch/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_pytorch| image:: https://img.shields.io/conda/dn/bioconda/biobb_pytorch.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_pytorch
   :alt:   (downloads)
.. |docker_biobb_pytorch| image:: https://quay.io/repository/biocontainers/biobb_pytorch/status
   :target: https://quay.io/repository/biocontainers/biobb_pytorch
.. _`biobb_pytorch/tags`: https://quay.io/repository/biocontainers/biobb_pytorch?tab=tags


.. raw:: html

    <script>
        var package = "biobb_pytorch";
        var versions = ["5.0.0","4.2.1","4.2.0","4.1.3","4.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_pytorch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_pytorch/README.html