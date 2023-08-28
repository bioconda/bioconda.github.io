:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-deconstructsigs'
.. highlight: bash

r-deconstructsigs
=================

.. conda:recipe:: r-deconstructsigs
   :replaces_section_title:
   :noindex:

   Takes sample information in the form of the fraction of mutations in each of 96 trinucleotide contexts and identifies the weighted combination of published signatures that\, when summed\, most closely reconstructs the mutational profile.

   :homepage: https://github.com/raerose01/deconstructSigs
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-deconstructsigs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-deconstructsigs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-deconstructsigs/meta.yaml>`_

   


.. conda:package:: r-deconstructsigs

   |downloads_r-deconstructsigs| |docker_r-deconstructsigs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.0-3</code>,  <code>1.9.0-2</code>,  <code>1.9.0-1</code>,  <code>1.9.0-0</code>,  <code>1.8.0.1-4</code>,  <code>1.8.0.1-3</code>,  <code>1.8.0.1-2</code>,  <code>1.8.0.1-1</code>,  <code>1.8.0.1-0</code>,  </span></summary>
      

      ``1.9.0-3``,  ``1.9.0-2``,  ``1.9.0-1``,  ``1.9.0-0``,  ``1.8.0.1-4``,  ``1.8.0.1-3``,  ``1.8.0.1-2``,  ``1.8.0.1-1``,  ``1.8.0.1-0``,  ``1.8.0-2``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: 
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: 
   :depends bioconductor-genomeinfodb: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-reshape2: 
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

      mamba install r-deconstructsigs

   and update with::

      mamba update r-deconstructsigs

  To create a new environment, run::

      mamba create --name myenvname r-deconstructsigs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-deconstructsigs:<tag>

   (see `r-deconstructsigs/tags`_ for valid values for ``<tag>``)


.. |downloads_r-deconstructsigs| image:: https://img.shields.io/conda/dn/bioconda/r-deconstructsigs.svg?style=flat
   :target: https://anaconda.org/bioconda/r-deconstructsigs
   :alt:   (downloads)
.. |docker_r-deconstructsigs| image:: https://quay.io/repository/biocontainers/r-deconstructsigs/status
   :target: https://quay.io/repository/biocontainers/r-deconstructsigs
.. _`r-deconstructsigs/tags`: https://quay.io/repository/biocontainers/r-deconstructsigs?tab=tags


.. raw:: html

    <script>
        var package = "r-deconstructsigs";
        var versions = ["1.9.0","1.9.0","1.9.0","1.9.0","1.8.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-deconstructsigs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-deconstructsigs/README.html