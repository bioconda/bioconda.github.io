:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidexperiment'
.. highlight: bash

r-acidexperiment
================

.. conda:recipe:: r-acidexperiment
   :replaces_section_title:
   :noindex:

   Toolkit to extend the functionality of SummarizedExperiment.

   :homepage: https://r.acidgenomics.com/packages/acidexperiment/
   :developer docs: https://github.com/acidgenomics/r-acidexperiment
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidexperiment/meta.yaml>`_

   


.. conda:package:: r-acidexperiment

   |downloads_r-acidexperiment| |docker_r-acidexperiment|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.4.7-2</code>,  <code>0.4.7-1</code>,  <code>0.4.7-0</code>,  <code>0.4.5-1</code>,  <code>0.4.5-0</code>,  <code>0.4.4-1</code>,  </span></summary>
      

      ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.4.7-2``,  ``0.4.7-1``,  ``0.4.7-0``,  ``0.4.5-1``,  ``0.4.5-0``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.14-0``,  ``0.1.13-0``,  ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.10-2``,  ``0.1.10-1``,  ``0.1.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0``
   :depends bioconductor-biostrings: ``>=2.68.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0``
   :depends bioconductor-genomicranges: ``>=1.52.0``
   :depends bioconductor-iranges: ``>=2.34.0``
   :depends bioconductor-s4vectors: ``>=0.38.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0``
   :depends r-acidbase: ``>=0.7.0``
   :depends r-acidcli: ``>=0.3.0``
   :depends r-acidgenerics: ``>=0.7.1``
   :depends r-acidgenomes: ``>=0.6.0``
   :depends r-acidplyr: ``>=0.5.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-goalie: ``>=0.7.0``
   :depends r-matrix: ``>=1.6.1``
   :depends r-pipette: ``>=0.14.0``
   :depends r-scales: ``>=1.2.1``
   :depends r-syntactic: ``>=0.7.0``
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

      mamba install r-acidexperiment

   and update with::

      mamba update r-acidexperiment

  To create a new environment, run::

      mamba create --name myenvname r-acidexperiment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-acidexperiment:<tag>

   (see `r-acidexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_r-acidexperiment| image:: https://img.shields.io/conda/dn/bioconda/r-acidexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidexperiment
   :alt:   (downloads)
.. |docker_r-acidexperiment| image:: https://quay.io/repository/biocontainers/r-acidexperiment/status
   :target: https://quay.io/repository/biocontainers/r-acidexperiment
.. _`r-acidexperiment/tags`: https://quay.io/repository/biocontainers/r-acidexperiment?tab=tags


.. raw:: html

    <script>
        var package = "r-acidexperiment";
        var versions = ["0.5.4","0.5.3","0.5.2","0.4.7","0.4.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidexperiment/README.html