:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rblast'
.. highlight: bash

r-rblast
========

.. conda:recipe:: r-rBLAST
   :replaces_section_title:
   :noindex:

   Seamlessly interfaces the Basic Local Alignment Search Tool \(BLAST\) to search genetic sequence data bases. This work was partially supported by grant no. R21HG005912 from the National Human Genome Research Institute.

   :homepage: https://github.com/mhahsler/rBLAST
   :license: GPL3
   :recipe: /`r-rBLAST <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rBLAST>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rBLAST/meta.yaml>`_

   


.. conda:package:: r-rblast

   |downloads_r-rblast| |docker_r-rblast|

   :versions:
      
      

      ``0.99.1-7``,  ``0.99.1-6``,  ``0.99.1-5``,  ``0.99.1-4``,  ``0.99.1-3``,  ``0.99.1-0``

      

   
   :depends bioconductor-biostrings: 
   :depends blast: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-rblast

   and update with::

      mamba update r-rblast

  To create a new environment, run::

      mamba create --name myenvname r-rblast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-rblast:<tag>

   (see `r-rblast/tags`_ for valid values for ``<tag>``)


.. |downloads_r-rblast| image:: https://img.shields.io/conda/dn/bioconda/r-rblast.svg?style=flat
   :target: https://anaconda.org/bioconda/r-rblast
   :alt:   (downloads)
.. |docker_r-rblast| image:: https://quay.io/repository/biocontainers/r-rblast/status
   :target: https://quay.io/repository/biocontainers/r-rblast
.. _`r-rblast/tags`: https://quay.io/repository/biocontainers/r-rblast?tab=tags


.. raw:: html

    <script>
        var package = "r-rblast";
        var versions = ["0.99.1","0.99.1","0.99.1","0.99.1","0.99.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rblast/README.html