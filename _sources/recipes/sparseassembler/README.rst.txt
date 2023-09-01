:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sparseassembler'
.. highlight: bash

sparseassembler
===============

.. conda:recipe:: sparseassembler
   :replaces_section_title:
   :noindex:

   A sparse k\-mer graph based\, memory\-efficient genome assembler

   :homepage: https://github.com/yechengxi/SparseAssembler
   :license: GPL / GPL-3.0
   :recipe: /`sparseassembler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparseassembler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparseassembler/meta.yaml>`_

   


.. conda:package:: sparseassembler

   |downloads_sparseassembler| |docker_sparseassembler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>20160205-9</code>,  <code>20160205-8</code>,  <code>20160205-7</code>,  <code>20160205-6</code>,  <code>20160205-5</code>,  <code>20160205-4</code>,  <code>20160205-3</code>,  <code>20160205-2</code>,  <code>20160205-1</code>,  </span></summary>
      

      ``20160205-9``,  ``20160205-8``,  ``20160205-7``,  ``20160205-6``,  ``20160205-5``,  ``20160205-4``,  ``20160205-3``,  ``20160205-2``,  ``20160205-1``,  ``20160205-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install sparseassembler

   and update with::

      mamba update sparseassembler

  To create a new environment, run::

      mamba create --name myenvname sparseassembler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sparseassembler:<tag>

   (see `sparseassembler/tags`_ for valid values for ``<tag>``)


.. |downloads_sparseassembler| image:: https://img.shields.io/conda/dn/bioconda/sparseassembler.svg?style=flat
   :target: https://anaconda.org/bioconda/sparseassembler
   :alt:   (downloads)
.. |docker_sparseassembler| image:: https://quay.io/repository/biocontainers/sparseassembler/status
   :target: https://quay.io/repository/biocontainers/sparseassembler
.. _`sparseassembler/tags`: https://quay.io/repository/biocontainers/sparseassembler?tab=tags


.. raw:: html

    <script>
        var package = "sparseassembler";
        var versions = ["20160205","20160205","20160205","20160205","20160205"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sparseassembler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sparseassembler/README.html