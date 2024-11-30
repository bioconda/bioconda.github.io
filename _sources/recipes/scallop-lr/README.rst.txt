:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scallop-lr'
.. highlight: bash

scallop-lr
==========

.. conda:recipe:: scallop-lr
   :replaces_section_title:
   :noindex:

   Scallop\-LR is a reference\-based transcriptome assembler for long\-reads RNA\-seq data

   :homepage: https://github.com/Kingsford-Group/lrassemblyanalysis
   :license: BSD 3-Clause License
   :recipe: /`scallop-lr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scallop-lr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scallop-lr/meta.yaml>`_

   


.. conda:package:: scallop-lr

   |downloads_scallop-lr| |docker_scallop-lr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.2-9</code>,  <code>0.9.2-8</code>,  <code>0.9.2-7</code>,  <code>0.9.2-6</code>,  <code>0.9.2-5</code>,  <code>0.9.2-4</code>,  <code>0.9.2-3</code>,  <code>0.9.2-2</code>,  <code>0.9.2-1</code>,  </span></summary>
      

      ``0.9.2-9``,  ``0.9.2-8``,  ``0.9.2-7``,  ``0.9.2-6``,  ``0.9.2-5``,  ``0.9.2-4``,  ``0.9.2-3``,  ``0.9.2-2``,  ``0.9.2-1``,  ``0.9.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends htslib: ``>=1.20,<1.22.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install scallop-lr

   and update with::

      mamba update scallop-lr

  To create a new environment, run::

      mamba create --name myenvname scallop-lr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scallop-lr:<tag>

   (see `scallop-lr/tags`_ for valid values for ``<tag>``)


.. |downloads_scallop-lr| image:: https://img.shields.io/conda/dn/bioconda/scallop-lr.svg?style=flat
   :target: https://anaconda.org/bioconda/scallop-lr
   :alt:   (downloads)
.. |docker_scallop-lr| image:: https://quay.io/repository/biocontainers/scallop-lr/status
   :target: https://quay.io/repository/biocontainers/scallop-lr
.. _`scallop-lr/tags`: https://quay.io/repository/biocontainers/scallop-lr?tab=tags


.. raw:: html

    <script>
        var package = "scallop-lr";
        var versions = ["0.9.2","0.9.2","0.9.2","0.9.2","0.9.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scallop-lr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scallop-lr/README.html