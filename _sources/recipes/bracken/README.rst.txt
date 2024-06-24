:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bracken'
.. highlight: bash

bracken
=======

.. conda:recipe:: bracken
   :replaces_section_title:
   :noindex:

   Bracken \(Bayesian Reestimation of Abundance with KrakEN\) is a highly accurate statistical method that computes the abundance of species in DNA sequences from a metagenomics sample.

   :homepage: https://github.com/jenniferlu717/Bracken
   :license: GPL-3.0
   :recipe: /`bracken <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bracken>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bracken/meta.yaml>`_
   :links: biotools: :biotools:`Bracken`, doi: :doi:`10.7717/peerj-cs.104`

   


.. conda:package:: bracken

   |downloads_bracken| |docker_bracken|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.9-1</code>,  <code>2.9-0</code>,  <code>2.8-1</code>,  <code>2.8-0</code>,  <code>2.7-0</code>,  <code>2.6.2-0</code>,  <code>2.6.1-3</code>,  <code>2.6.1-2</code>,  <code>2.6.1-1</code>,  </span></summary>
      

      ``2.9-1``,  ``2.9-0``,  ``2.8-1``,  ``2.8-0``,  ``2.7-0``,  ``2.6.2-0``,  ``2.6.1-3``,  ``2.6.1-2``,  ``2.6.1-1``,  ``2.6.1-0``,  ``2.6.0-2``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.5.3-0``,  ``2.5.2-0``,  ``2.5-2``,  ``2.5-1``,  ``2.5-0``,  ``2.2-1``,  ``2.2-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends kraken2: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bracken

   and update with::

      mamba update bracken

  To create a new environment, run::

      mamba create --name myenvname bracken

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bracken:<tag>

   (see `bracken/tags`_ for valid values for ``<tag>``)


.. |downloads_bracken| image:: https://img.shields.io/conda/dn/bioconda/bracken.svg?style=flat
   :target: https://anaconda.org/bioconda/bracken
   :alt:   (downloads)
.. |docker_bracken| image:: https://quay.io/repository/biocontainers/bracken/status
   :target: https://quay.io/repository/biocontainers/bracken
.. _`bracken/tags`: https://quay.io/repository/biocontainers/bracken?tab=tags


.. raw:: html

    <script>
        var package = "bracken";
        var versions = ["2.9","2.9","2.8","2.8","2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bracken/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bracken/README.html