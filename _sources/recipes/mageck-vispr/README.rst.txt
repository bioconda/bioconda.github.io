:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mageck-vispr'
.. highlight: bash

mageck-vispr
============

.. conda:recipe:: mageck-vispr
   :replaces_section_title:
   :noindex:

   MAGeCK\-VISPR is a comprehensive quality control\, analysis and visualization workflow for CRISPR\/Cas9 screens based on MAGeCK\, VISPR\, Snakemake\, FastQC and cutadapt.

   :homepage: https://bitbucket.org/liulab/mageck-vispr
   :license: MIT License
   :recipe: /`mageck-vispr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mageck-vispr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mageck-vispr/meta.yaml>`_

   


.. conda:package:: mageck-vispr

   |downloads_mageck-vispr| |docker_mageck-vispr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.6-0</code>,  <code>0.5.5-0</code>,  <code>0.5.4-3</code>,  <code>0.5.4-2</code>,  <code>0.5.4-1</code>,  <code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.4.7-0</code>,  </span></summary>
      

      ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.4-3``,  ``0.5.4-2``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends cutadapt: 
   :depends fastqc: 
   :depends jinja2: 
   :depends mageck: ``>=0.5.9``
   :depends python: ``>=3``
   :depends snakemake: 
   :depends vispr: 
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

      mamba install mageck-vispr

   and update with::

      mamba update mageck-vispr

  To create a new environment, run::

      mamba create --name myenvname mageck-vispr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mageck-vispr:<tag>

   (see `mageck-vispr/tags`_ for valid values for ``<tag>``)


.. |downloads_mageck-vispr| image:: https://img.shields.io/conda/dn/bioconda/mageck-vispr.svg?style=flat
   :target: https://anaconda.org/bioconda/mageck-vispr
   :alt:   (downloads)
.. |docker_mageck-vispr| image:: https://quay.io/repository/biocontainers/mageck-vispr/status
   :target: https://quay.io/repository/biocontainers/mageck-vispr
.. _`mageck-vispr/tags`: https://quay.io/repository/biocontainers/mageck-vispr?tab=tags


.. raw:: html

    <script>
        var package = "mageck-vispr";
        var versions = ["0.5.6","0.5.5","0.5.4","0.5.4","0.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mageck-vispr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mageck-vispr/README.html