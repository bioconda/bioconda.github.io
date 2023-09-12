:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scallop'
.. highlight: bash

scallop
=======

.. conda:recipe:: scallop
   :replaces_section_title:
   :noindex:

   Scallop is a reference\-based transcriptome assembler for RNA\-seq

   :homepage: https://github.com/Kingsford-Group/scallop
   :license: BSD 3-Clause License
   :recipe: /`scallop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scallop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scallop/meta.yaml>`_

   


.. conda:package:: scallop

   |downloads_scallop| |docker_scallop|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.5-6</code>,  <code>0.10.5-5</code>,  <code>0.10.5-4</code>,  <code>0.10.5-3</code>,  <code>0.10.5-2</code>,  <code>0.10.5-1</code>,  <code>0.10.5-0</code>,  <code>0.10.4-2</code>,  <code>0.10.4-1</code>,  </span></summary>
      

      ``0.10.5-6``,  ``0.10.5-5``,  ``0.10.5-4``,  ``0.10.5-3``,  ``0.10.5-2``,  ``0.10.5-1``,  ``0.10.5-0``,  ``0.10.4-2``,  ``0.10.4-1``,  ``0.10.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends htslib: ``>=1.17,<1.19.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install scallop

   and update with::

      mamba update scallop

  To create a new environment, run::

      mamba create --name myenvname scallop

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scallop:<tag>

   (see `scallop/tags`_ for valid values for ``<tag>``)


.. |downloads_scallop| image:: https://img.shields.io/conda/dn/bioconda/scallop.svg?style=flat
   :target: https://anaconda.org/bioconda/scallop
   :alt:   (downloads)
.. |docker_scallop| image:: https://quay.io/repository/biocontainers/scallop/status
   :target: https://quay.io/repository/biocontainers/scallop
.. _`scallop/tags`: https://quay.io/repository/biocontainers/scallop?tab=tags


.. raw:: html

    <script>
        var package = "scallop";
        var versions = ["0.10.5","0.10.5","0.10.5","0.10.5","0.10.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scallop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scallop/README.html