:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'das_tool'
.. highlight: bash

das_tool
========

.. conda:recipe:: das_tool
   :replaces_section_title:
   :noindex:

   Recovery of genomes from metagenomes via a dereplication\,
   aggregation and scoring strategy.


   :homepage: https://github.com/cmks/DAS_Tool
   :license: BSD
   :recipe: /`das_tool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/das_tool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/das_tool/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41564-018-0171-1`

   DAS Tool is an automated method that integrates the results of a
   flexible number of binning algorithms to calculate an optimized\,
   non\-redundant set of bins from a single assembly.



.. conda:package:: das_tool

   |downloads_das_tool| |docker_das_tool|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.7-0</code>,  <code>1.1.6-0</code>,  <code>1.1.5-0</code>,  <code>1.1.4-1</code>,  <code>1.1.4-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-2</code>,  <code>1.1.2-1</code>,  <code>1.1.2-0</code>,  </span></summary>
      

      ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: ``>=2.7.1``
   :depends diamond: ``>=0.9.14``
   :depends gawk: 
   :depends prodigal: ``>=2.6.3``
   :depends pullseq: ``>=1.0.2``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: ``>=1.9.6``
   :depends r-docopt: ``>=0.7.1``
   :depends r-magrittr: ``>=2.0.1``
   :depends ruby: ``>=2.4.4``
   :depends unzip: 
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

      mamba install das_tool

   and update with::

      mamba update das_tool

  To create a new environment, run::

      mamba create --name myenvname das_tool

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/das_tool:<tag>

   (see `das_tool/tags`_ for valid values for ``<tag>``)


.. |downloads_das_tool| image:: https://img.shields.io/conda/dn/bioconda/das_tool.svg?style=flat
   :target: https://anaconda.org/bioconda/das_tool
   :alt:   (downloads)
.. |docker_das_tool| image:: https://quay.io/repository/biocontainers/das_tool/status
   :target: https://quay.io/repository/biocontainers/das_tool
.. _`das_tool/tags`: https://quay.io/repository/biocontainers/das_tool?tab=tags


.. raw:: html

    <script>
        var package = "das_tool";
        var versions = ["1.1.7","1.1.6","1.1.5","1.1.4","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/das_tool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/das_tool/README.html