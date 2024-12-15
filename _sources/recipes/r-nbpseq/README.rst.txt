:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-nbpseq'
.. highlight: bash

r-nbpseq
========

.. conda:recipe:: r-nbpseq
   :replaces_section_title:
   :noindex:

   Negative Binomial \(NB\) models for two\-group comparisons and regression inferences from RNA\-Sequencing Data.

   :homepage: https://CRAN.R-project.org/package=NBPSeq
   :license: GPL2 / GPL-2.0-only
   :recipe: /`r-nbpseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nbpseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nbpseq/meta.yaml>`_

   


.. conda:package:: r-nbpseq

   |downloads_r-nbpseq| |docker_r-nbpseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.1-4</code>,  <code>0.3.1-3</code>,  <code>0.3.1-2</code>,  <code>0.3.1-1</code>,  <code>0.3.1-0</code>,  <code>0.3.0-6</code>,  <code>0.3.0-5</code>,  <code>0.3.0-4</code>,  <code>0.3.0-3</code>,  </span></summary>
      

      ``0.3.1-4``,  ``0.3.1-3``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-6``,  ``0.3.0-5``,  ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-qvalue: ``>=2.38.0,<2.39.0a0``
   :depends libgcc: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install r-nbpseq

   and update with::

      mamba update r-nbpseq

  To create a new environment, run::

      mamba create --name myenvname r-nbpseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-nbpseq:<tag>

   (see `r-nbpseq/tags`_ for valid values for ``<tag>``)


.. |downloads_r-nbpseq| image:: https://img.shields.io/conda/dn/bioconda/r-nbpseq.svg?style=flat
   :target: https://anaconda.org/bioconda/r-nbpseq
   :alt:   (downloads)
.. |docker_r-nbpseq| image:: https://quay.io/repository/biocontainers/r-nbpseq/status
   :target: https://quay.io/repository/biocontainers/r-nbpseq
.. _`r-nbpseq/tags`: https://quay.io/repository/biocontainers/r-nbpseq?tab=tags


.. raw:: html

    <script>
        var package = "r-nbpseq";
        var versions = ["0.3.1","0.3.1","0.3.1","0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-nbpseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-nbpseq/README.html