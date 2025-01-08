:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cleaver'
.. highlight: bash

bioconductor-cleaver
====================

.. conda:recipe:: bioconductor-cleaver
   :replaces_section_title:
   :noindex:

   Cleavage of Polypeptide Sequences

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cleaver.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-cleaver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cleaver>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cleaver/meta.yaml>`_
   :links: biotools: :biotools:`cleaver`, doi: :doi:`10.1038/nmeth.3252`

   In\-silico cleavage of polypeptide sequences. The cleavage rules are taken from\: http\:\/\/web.expasy.org\/peptide\_cutter\/peptidecutter\_enzymes.html


.. conda:package:: bioconductor-cleaver

   |downloads_bioconductor-cleaver| |docker_bioconductor-cleaver|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
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

      mamba install bioconductor-cleaver

   and update with::

      mamba update bioconductor-cleaver

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cleaver

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cleaver:<tag>

   (see `bioconductor-cleaver/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cleaver| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cleaver.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cleaver
   :alt:   (downloads)
.. |docker_bioconductor-cleaver| image:: https://quay.io/repository/biocontainers/bioconductor-cleaver/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cleaver
.. _`bioconductor-cleaver/tags`: https://quay.io/repository/biocontainers/bioconductor-cleaver?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cleaver";
        var versions = ["1.44.0","1.40.0","1.38.0","1.36.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cleaver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cleaver/README.html