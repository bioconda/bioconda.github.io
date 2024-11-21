:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-cobalt'
.. highlight: bash

hmftools-cobalt
===============

.. conda:recipe:: hmftools-cobalt
   :replaces_section_title:
   :noindex:

   Calculate read\-depth counts and GC ratios to use in PURPLE.

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/cobalt/README.md
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hmftools-cobalt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-cobalt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-cobalt/meta.yaml>`_

   


.. conda:package:: hmftools-cobalt

   |downloads_hmftools-cobalt| |docker_hmftools-cobalt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0_beta-1</code>,  <code>2.0_beta-0</code>,  <code>1.16-0</code>,  <code>1.13-1</code>,  <code>1.13-0</code>,  <code>1.11-1</code>,  <code>1.11-0</code>,  <code>1.10-0</code>,  <code>1.9-0</code>,  </span></summary>
      

      ``2.0_beta-1``,  ``2.0_beta-0``,  ``1.16-0``,  ``1.13-1``,  ``1.13-0``,  ``1.11-1``,  ``1.11-0``,  ``1.10-0``,  ``1.9-0``,  ``1.8-1``,  ``1.8-0``,  ``1.7-0``,  ``1.6-0``,  ``1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-copynumber: 
   :depends openjdk: ``>=8,<=21``
   :depends r-dplyr: 
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

      mamba install hmftools-cobalt

   and update with::

      mamba update hmftools-cobalt

  To create a new environment, run::

      mamba create --name myenvname hmftools-cobalt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-cobalt:<tag>

   (see `hmftools-cobalt/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-cobalt| image:: https://img.shields.io/conda/dn/bioconda/hmftools-cobalt.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-cobalt
   :alt:   (downloads)
.. |docker_hmftools-cobalt| image:: https://quay.io/repository/biocontainers/hmftools-cobalt/status
   :target: https://quay.io/repository/biocontainers/hmftools-cobalt
.. _`hmftools-cobalt/tags`: https://quay.io/repository/biocontainers/hmftools-cobalt?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-cobalt";
        var versions = ["2.0_beta","2.0_beta","1.16","1.13","1.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-cobalt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-cobalt/README.html