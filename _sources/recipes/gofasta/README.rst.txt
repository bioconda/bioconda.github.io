:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gofasta'
.. highlight: bash

gofasta
=======

.. conda:recipe:: gofasta
   :replaces_section_title:
   :noindex:

   Genomic epidemiology utilities for short genome alignments

   :homepage: https://github.com/virus-evolution/gofasta
   :license: MIT
   :recipe: /`gofasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gofasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gofasta/meta.yaml>`_

   


.. conda:package:: gofasta

   |downloads_gofasta| |docker_gofasta|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.0-0</code>,  <code>0.0.6-1</code>,  <code>0.0.6-0</code>,  <code>0.0.5-0</code>,  <code>0.0.4-0</code>,  <code>0.0.3-1</code>,  </span></summary>
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.0.6-1``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install gofasta

   and update with::

      mamba update gofasta

  To create a new environment, run::

      mamba create --name myenvname gofasta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gofasta:<tag>

   (see `gofasta/tags`_ for valid values for ``<tag>``)


.. |downloads_gofasta| image:: https://img.shields.io/conda/dn/bioconda/gofasta.svg?style=flat
   :target: https://anaconda.org/bioconda/gofasta
   :alt:   (downloads)
.. |docker_gofasta| image:: https://quay.io/repository/biocontainers/gofasta/status
   :target: https://quay.io/repository/biocontainers/gofasta
.. _`gofasta/tags`: https://quay.io/repository/biocontainers/gofasta?tab=tags


.. raw:: html

    <script>
        var package = "gofasta";
        var versions = ["1.2.1","1.2.0","1.1.0","1.0.0","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gofasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gofasta/README.html