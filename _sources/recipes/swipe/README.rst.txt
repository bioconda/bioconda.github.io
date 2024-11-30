:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'swipe'
.. highlight: bash

swipe
=====

.. conda:recipe:: swipe
   :replaces_section_title:
   :noindex:

   Tool for performing rapid local alignment searches in amino acid or nucleotide sequence databases. It is a highly optimized implementation of the Smith\-Waterman algoritm using SIMD parallel computing technology available on common CPUs.

   :homepage: http://dna.uio.no/swipe
   :developer docs: https://github.com/torognes/swipe
   :license: GPL / AGPL-3.0
   :recipe: /`swipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swipe/meta.yaml>`_
   :links: biotools: :biotools:`swipe`, doi: :doi:`10.1186/1471-2105-12-221`

   


.. conda:package:: swipe

   |downloads_swipe| |docker_swipe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.1-4</code>,  <code>2.1.1-3</code>,  <code>2.1.1-2</code>,  <code>2.1.1-1</code>,  <code>2.1.1-0</code>,  <code>2.1.0-2</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>2.0.12-1</code>,  </span></summary>
      

      ``2.1.1-4``,  ``2.1.1-3``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.12-1``,  ``2.0.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends openmpi: ``>=4.1.5,<5.0a0``
   :depends tbb: ``>=2021.9.0``
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

      mamba install swipe

   and update with::

      mamba update swipe

  To create a new environment, run::

      mamba create --name myenvname swipe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/swipe:<tag>

   (see `swipe/tags`_ for valid values for ``<tag>``)


.. |downloads_swipe| image:: https://img.shields.io/conda/dn/bioconda/swipe.svg?style=flat
   :target: https://anaconda.org/bioconda/swipe
   :alt:   (downloads)
.. |docker_swipe| image:: https://quay.io/repository/biocontainers/swipe/status
   :target: https://quay.io/repository/biocontainers/swipe
.. _`swipe/tags`: https://quay.io/repository/biocontainers/swipe?tab=tags


.. raw:: html

    <script>
        var package = "swipe";
        var versions = ["2.1.1","2.1.1","2.1.1","2.1.1","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/swipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/swipe/README.html