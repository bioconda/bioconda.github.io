:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tn93'
.. highlight: bash

tn93
====

.. conda:recipe:: tn93
   :replaces_section_title:
   :noindex:

   This is a simple program meant to compute pairwise distances between aligned nucleotide sequences in sequential FASTA format using the Tamura Nei 93 distance.

   :homepage: https://github.com/veg/tn93
   :license: MIT / MIT
   :recipe: /`tn93 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tn93>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tn93/meta.yaml>`_
   :links: biotools: :biotools:`tn93`, doi: :doi:`10.1093/molbev/msy016`

   


.. conda:package:: tn93

   |downloads_tn93| |docker_tn93|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.14-1</code>,  <code>1.0.14-0</code>,  <code>1.0.13-1</code>,  <code>1.0.13-0</code>,  <code>1.0.12-0</code>,  <code>1.0.9-2</code>,  <code>1.0.9-1</code>,  <code>1.0.9-0</code>,  <code>1.0.6-2</code>,  </span></summary>
      

      ``1.0.14-1``,  ``1.0.14-0``,  ``1.0.13-1``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.9-2``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.6-2``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.4-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install tn93

   and update with::

      mamba update tn93

  To create a new environment, run::

      mamba create --name myenvname tn93

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tn93:<tag>

   (see `tn93/tags`_ for valid values for ``<tag>``)


.. |downloads_tn93| image:: https://img.shields.io/conda/dn/bioconda/tn93.svg?style=flat
   :target: https://anaconda.org/bioconda/tn93
   :alt:   (downloads)
.. |docker_tn93| image:: https://quay.io/repository/biocontainers/tn93/status
   :target: https://quay.io/repository/biocontainers/tn93
.. _`tn93/tags`: https://quay.io/repository/biocontainers/tn93?tab=tags


.. raw:: html

    <script>
        var package = "tn93";
        var versions = ["1.0.14","1.0.14","1.0.13","1.0.13","1.0.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tn93/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tn93/README.html