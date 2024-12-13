:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'popgen-entropy'
.. highlight: bash

popgen-entropy
==============

.. conda:recipe:: popgen-entropy
   :replaces_section_title:
   :noindex:

   This program is for inferring population structure from autopolyploid and mixed\-ploidy individuals\, similar to structure\, for low\- to medium\-coverage sequencing depth.

   :homepage: https://bitbucket.org/buerklelab/mixedploidy-entropy/src/master/
   :license: GPLv3
   :recipe: /`popgen-entropy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/popgen-entropy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/popgen-entropy/meta.yaml>`_
   :links: biotools: :biotools:`popgen-entropy`, doi: :doi:`10.1101/2020.07.31.231514`

   entropy performs model\-based genotype and ancestry estimation software for detecting hybridization in mixed\-ploidy species using genotype\-likelihood data as input. Information about the  model and testing can be found in the pre\-print at \[bioRxiv\]\(https\:\/\/biorxiv.org\/content\/10.1101\/2020.07.31.231514v1\). The vignette\_entropy.pdf file in the Bitbucket repo contains instructions on how to process and analyze genomic data.


.. conda:package:: popgen-entropy

   |downloads_popgen-entropy| |docker_popgen-entropy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0-10</code>,  <code>2.0-9</code>,  <code>2.0-8</code>,  <code>2.0-7</code>,  <code>2.0-6</code>,  <code>2.0-5</code>,  <code>2.0-4</code>,  <code>2.0-3</code>,  <code>2.0-2</code>,  </span></summary>
      

      ``2.0-10``,  ``2.0-9``,  ``2.0-8``,  ``2.0-7``,  ``2.0-6``,  ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends mkl: 
   :depends zlib: 
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

      mamba install popgen-entropy

   and update with::

      mamba update popgen-entropy

  To create a new environment, run::

      mamba create --name myenvname popgen-entropy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/popgen-entropy:<tag>

   (see `popgen-entropy/tags`_ for valid values for ``<tag>``)


.. |downloads_popgen-entropy| image:: https://img.shields.io/conda/dn/bioconda/popgen-entropy.svg?style=flat
   :target: https://anaconda.org/bioconda/popgen-entropy
   :alt:   (downloads)
.. |docker_popgen-entropy| image:: https://quay.io/repository/biocontainers/popgen-entropy/status
   :target: https://quay.io/repository/biocontainers/popgen-entropy
.. _`popgen-entropy/tags`: https://quay.io/repository/biocontainers/popgen-entropy?tab=tags


.. raw:: html

    <script>
        var package = "popgen-entropy";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/popgen-entropy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/popgen-entropy/README.html