:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pairadise'
.. highlight: bash

r-pairadise
===========

.. conda:recipe:: r-pairadise
   :replaces_section_title:
   :noindex:

   PAIRADISE \- Paired Replicate Analysis of Differential Splicing Events

   :homepage: https://github.com/Xinglab/PAIRADISE
   :license: MIT
   :recipe: /`r-pairadise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pairadise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pairadise/meta.yaml>`_

   This package implements the PAIRADISE procedure for detecting differential isoform expression between matched replicates in paired RNA\-Seq data.


.. conda:package:: r-pairadise

   |downloads_r-pairadise| |docker_r-pairadise|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-doparallel: ``>=1.0.14``
   :depends r-foreach: ``>=1.4.4``
   :depends r-iterators: ``>=1.0.10``
   :depends r-nloptr: ``>=1.2.1``
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

      mamba install r-pairadise

   and update with::

      mamba update r-pairadise

  To create a new environment, run::

      mamba create --name myenvname r-pairadise

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-pairadise:<tag>

   (see `r-pairadise/tags`_ for valid values for ``<tag>``)


.. |downloads_r-pairadise| image:: https://img.shields.io/conda/dn/bioconda/r-pairadise.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pairadise
   :alt:   (downloads)
.. |docker_r-pairadise| image:: https://quay.io/repository/biocontainers/r-pairadise/status
   :target: https://quay.io/repository/biocontainers/r-pairadise
.. _`r-pairadise/tags`: https://quay.io/repository/biocontainers/r-pairadise?tab=tags


.. raw:: html

    <script>
        var package = "r-pairadise";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pairadise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pairadise/README.html