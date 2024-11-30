:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tfarm'
.. highlight: bash

bioconductor-tfarm
==================

.. conda:recipe:: bioconductor-tfarm
   :replaces_section_title:
   :noindex:

   Transcription Factors Association Rules Miner

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TFARM.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tfarm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfarm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfarm/meta.yaml>`_

   It searches for relevant associations of transcription factors with a transcription factor target\, in specific genomic regions. It also allows to evaluate the Importance Index distribution of transcription factors \(and combinations of transcription factors\) in association rules.


.. conda:package:: bioconductor-tfarm

   |downloads_bioconductor-tfarm| |docker_bioconductor-tfarm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends r-arules: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fields: 
   :depends r-gplots: 
   :depends r-stringr: 
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

      mamba install bioconductor-tfarm

   and update with::

      mamba update bioconductor-tfarm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tfarm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tfarm:<tag>

   (see `bioconductor-tfarm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tfarm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tfarm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tfarm
   :alt:   (downloads)
.. |docker_bioconductor-tfarm| image:: https://quay.io/repository/biocontainers/bioconductor-tfarm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tfarm
.. _`bioconductor-tfarm/tags`: https://quay.io/repository/biocontainers/bioconductor-tfarm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tfarm";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tfarm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tfarm/README.html