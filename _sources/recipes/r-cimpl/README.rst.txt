:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cimpl'
.. highlight: bash

r-cimpl
=======

.. conda:recipe:: r-cimpl
   :replaces_section_title:
   :noindex:

   An analysis package for multi sample insertional mutagenesis data \(including viral\- and transposon\-based systems\) using Gaussian kernel convolution to identify common insertion sites.

   :homepage: http://ccb.nki.nl/software/
   :license: GPL-3
   :recipe: /`r-cimpl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cimpl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cimpl/meta.yaml>`_

   


.. conda:package:: r-cimpl

   |downloads_r-cimpl| |docker_r-cimpl|

   :versions:
      
      

      ``1.1-6``,  ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-0``

      

   
   :depends bioconductor-biomart: 
   :depends bioconductor-biostrings: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-kernsmooth: 
   :depends r-mass: 
   :depends r-xtable: 
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

      mamba install r-cimpl

   and update with::

      mamba update r-cimpl

  To create a new environment, run::

      mamba create --name myenvname r-cimpl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-cimpl:<tag>

   (see `r-cimpl/tags`_ for valid values for ``<tag>``)


.. |downloads_r-cimpl| image:: https://img.shields.io/conda/dn/bioconda/r-cimpl.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cimpl
   :alt:   (downloads)
.. |docker_r-cimpl| image:: https://quay.io/repository/biocontainers/r-cimpl/status
   :target: https://quay.io/repository/biocontainers/r-cimpl
.. _`r-cimpl/tags`: https://quay.io/repository/biocontainers/r-cimpl?tab=tags


.. raw:: html

    <script>
        var package = "r-cimpl";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cimpl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cimpl/README.html