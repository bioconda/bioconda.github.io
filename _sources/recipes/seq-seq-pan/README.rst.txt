:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seq-seq-pan'
.. highlight: bash

seq-seq-pan
===========

.. conda:recipe:: seq-seq-pan
   :replaces_section_title:
   :noindex:

   seq\-seq\-pan

   :homepage: https://gitlab.com/chrjan/seq-seq-pan
   :license: FreeBSD
   :recipe: /`seq-seq-pan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq-seq-pan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq-seq-pan/meta.yaml>`_

   seq\-seq\-pan is a workflow for the SEQuential alignment of SEQuences to build a PAN\-genome data structure and a whole\-genome\-alignment.


.. conda:package:: seq-seq-pan

   |downloads_seq-seq-pan| |docker_seq-seq-pan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.1-4</code>,  <code>1.0.1-3</code>,  <code>1.0.1-1</code>,  <code>1.0.1-0</code>,  <code>1.0.0-4</code>,  <code>1.0.0-3</code>,  <code>1.0.0-1</code>,  </span></summary>
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``1.69``
   :depends blat: ``35``
   :depends libgenome: ``1.3.1 hc9558a2_2``
   :depends mauvealigner: ``1.2.0``
   :depends openjdk: 
   :depends python: ``>=3``
   :depends snakemake: 
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

      mamba install seq-seq-pan

   and update with::

      mamba update seq-seq-pan

  To create a new environment, run::

      mamba create --name myenvname seq-seq-pan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seq-seq-pan:<tag>

   (see `seq-seq-pan/tags`_ for valid values for ``<tag>``)


.. |downloads_seq-seq-pan| image:: https://img.shields.io/conda/dn/bioconda/seq-seq-pan.svg?style=flat
   :target: https://anaconda.org/bioconda/seq-seq-pan
   :alt:   (downloads)
.. |docker_seq-seq-pan| image:: https://quay.io/repository/biocontainers/seq-seq-pan/status
   :target: https://quay.io/repository/biocontainers/seq-seq-pan
.. _`seq-seq-pan/tags`: https://quay.io/repository/biocontainers/seq-seq-pan?tab=tags


.. raw:: html

    <script>
        var package = "seq-seq-pan";
        var versions = ["1.1.0","1.1.0","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seq-seq-pan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seq-seq-pan/README.html