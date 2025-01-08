:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-basejump'
.. highlight: bash

r-basejump
==========

.. conda:recipe:: r-basejump
   :replaces_section_title:
   :noindex:

   Base functions for bioinformatics and R package development.

   :homepage: https://r.acidgenomics.com/packages/basejump/
   :developer docs: https://github.com/acidgenomics/r-basejump
   :license: GPL / AGPL-3.0
   :recipe: /`r-basejump <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-basejump>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-basejump/meta.yaml>`_

   


.. conda:package:: r-basejump

   |downloads_r-basejump| |docker_r-basejump|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.18.0-2</code>,  <code>0.18.0-1</code>,  <code>0.18.0-0</code>,  <code>0.17.0-1</code>,  <code>0.17.0-0</code>,  <code>0.16.5-1</code>,  <code>0.16.5-0</code>,  <code>0.16.4-1</code>,  <code>0.16.4-0</code>,  </span></summary>
      

      ``0.18.0-2``,  ``0.18.0-1``,  ``0.18.0-0``,  ``0.17.0-1``,  ``0.17.0-0``,  ``0.16.5-1``,  ``0.16.5-0``,  ``0.16.4-1``,  ``0.16.4-0``,  ``0.16.3-0``,  ``0.16.2-0``,  ``0.16.1-1``,  ``0.16.1-0``,  ``0.15.0-0``,  ``0.14.23-0``,  ``0.14.22-0``,  ``0.14.21-0``,  ``0.14.20-0``,  ``0.14.19-0``,  ``0.14.18-0``,  ``0.14.17-2``,  ``0.14.17-1``,  ``0.14.17-0``,  ``0.13.4-0``,  ``0.13.2-0``,  ``0.12.16-0``,  ``0.12.15-0``,  ``0.12.14-0``,  ``0.12.13-0``,  ``0.12.10-0``,  ``0.12.9-0``,  ``0.12.8-1``,  ``0.12.8-0``,  ``0.12.7-0``,  ``0.12.6-1``,  ``0.12.6-0``,  ``0.12.5-1``,  ``0.12.5-0``,  ``0.12.4-0``,  ``0.12.3-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.23-0``,  ``0.11.22-0``,  ``0.11.21-0``,  ``0.11.20-1``,  ``0.11.20-0``,  ``0.11.19-0``,  ``0.11.18-0``,  ``0.11.17-0``,  ``0.11.16-0``,  ``0.11.15-0``,  ``0.11.14-0``,  ``0.11.13-0``,  ``0.11.12-0``,  ``0.11.11-0``,  ``0.11.10-0``,  ``0.11.8-0``,  ``0.11.7-0``,  ``0.11.5-0``,  ``0.10.9-1``,  ``0.10.9-0``,  ``0.9.11-0``,  ``0.9.9-0``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.5.9-0``,  ``0.5.3-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-singlecellexperiment: ``>=1.22.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0``
   :depends r-acidbase: ``>=0.7.0``
   :depends r-acidexperiment: ``>=0.5.0``
   :depends r-acidgenomes: ``>=0.6.0``
   :depends r-acidmarkdown: ``>=0.3.0``
   :depends r-acidplots: ``>=0.7.0``
   :depends r-acidplyr: ``>=0.5.0``
   :depends r-acidsinglecell: ``>=0.4.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-pipette: ``>=0.14.0``
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

      mamba install r-basejump

   and update with::

      mamba update r-basejump

  To create a new environment, run::

      mamba create --name myenvname r-basejump

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-basejump:<tag>

   (see `r-basejump/tags`_ for valid values for ``<tag>``)


.. |downloads_r-basejump| image:: https://img.shields.io/conda/dn/bioconda/r-basejump.svg?style=flat
   :target: https://anaconda.org/bioconda/r-basejump
   :alt:   (downloads)
.. |docker_r-basejump| image:: https://quay.io/repository/biocontainers/r-basejump/status
   :target: https://quay.io/repository/biocontainers/r-basejump
.. _`r-basejump/tags`: https://quay.io/repository/biocontainers/r-basejump?tab=tags


.. raw:: html

    <script>
        var package = "r-basejump";
        var versions = ["0.18.0","0.18.0","0.18.0","0.17.0","0.17.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-basejump/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-basejump/README.html