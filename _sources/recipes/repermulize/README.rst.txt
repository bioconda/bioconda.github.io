:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'repermulize'
.. highlight: bash

repermulize
===========

.. conda:recipe:: repermulize
   :replaces_section_title:
   :noindex:

   Repermulize contains functions to perform gene\-to\-phenotype tests with permulation.

   :homepage: https://github.com/pbradleylab/phylogenize
   :license: MIT / MIT
   :recipe: /`repermulize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repermulize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repermulize/meta.yaml>`_

   


.. conda:package:: repermulize

   |downloads_repermulize| |docker_repermulize|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends bioconductor-biomformat: ``1.26.0.*``
   :depends bioconductor-ggtree: ``3.6.0.*``
   :depends bioconductor-qvalue: ``2.30.0.*``
   :depends bioconductor-s4vectors: ``0.36.0.*``
   :depends r-ashr: ``2.2_54.*``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-castor: ``1.7.10.*``
   :depends r-dt: ``0.33.*``
   :depends r-extradistr: ``1.9.1.*``
   :depends r-forcats: ``1.0.0.*``
   :depends r-kableextra: ``1.4.0.*``
   :depends r-matrix: ``1.5_4.1.*``
   :depends r-pbapply: ``1.7_0.*``
   :depends r-phylolm: ``2.6.2.*``
   :depends r-plotly: ``<=4.10.4``
   :depends r-purrr: ``1.0.1.*``
   :depends r-readr: ``2.1.4.*``
   :depends r-seqinr: ``4.2_30.*``
   :depends r-settings: ``0.2.7.*``
   :depends r-stringr: ``1.5.0.*``
   :depends r-tibble: ``3.2.1.*``
   :depends r-tidyr: ``1.3.0.*``
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

      mamba install repermulize

   and update with::

      mamba update repermulize

  To create a new environment, run::

      mamba create --name myenvname repermulize

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/repermulize:<tag>

   (see `repermulize/tags`_ for valid values for ``<tag>``)


.. |downloads_repermulize| image:: https://img.shields.io/conda/dn/bioconda/repermulize.svg?style=flat
   :target: https://anaconda.org/bioconda/repermulize
   :alt:   (downloads)
.. |docker_repermulize| image:: https://quay.io/repository/biocontainers/repermulize/status
   :target: https://quay.io/repository/biocontainers/repermulize
.. _`repermulize/tags`: https://quay.io/repository/biocontainers/repermulize?tab=tags


.. raw:: html

    <script>
        var package = "repermulize";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repermulize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repermulize/README.html