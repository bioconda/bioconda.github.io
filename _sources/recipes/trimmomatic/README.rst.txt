:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trimmomatic'
.. highlight: bash

trimmomatic
===========

.. conda:recipe:: trimmomatic
   :replaces_section_title:
   :noindex:

   A flexible read trimming tool for Illumina NGS data

   :homepage: http://www.usadellab.org/cms/?page=trimmomatic
   :license: GPLv3
   :recipe: /`trimmomatic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimmomatic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimmomatic/meta.yaml>`_
   :links: biotools: :biotools:`trimmomatic`, usegalaxy-eu: :usegalaxy-eu:`trimmomatic`, doi: :doi:`10.1093/bioinformatics/btu170`

   


.. conda:package:: trimmomatic

   |downloads_trimmomatic| |docker_trimmomatic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.39-2</code>,  <code>0.39-1</code>,  <code>0.39-0</code>,  <code>0.38-1</code>,  <code>0.36-6</code>,  <code>0.36-5</code>,  <code>0.36-4</code>,  <code>0.36-3</code>,  <code>0.36-1</code>,  </span></summary>
      

      ``0.39-2``,  ``0.39-1``,  ``0.39-0``,  ``0.38-1``,  ``0.36-6``,  ``0.36-5``,  ``0.36-4``,  ``0.36-3``,  ``0.36-1``,  ``0.35-7``,  ``0.35-6``,  ``0.35-4``,  ``0.35-3``,  ``0.35-2``,  ``0.35-1``,  ``0.33-3``,  ``0.33-2``,  ``0.33-1``,  ``0.33-0``,  ``0.32-4``,  ``0.32-3``,  ``0.32-2``,  ``0.32-1``,  ``0.32-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: 
   :depends python: 
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

      mamba install trimmomatic

   and update with::

      mamba update trimmomatic

  To create a new environment, run::

      mamba create --name myenvname trimmomatic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/trimmomatic:<tag>

   (see `trimmomatic/tags`_ for valid values for ``<tag>``)


.. |downloads_trimmomatic| image:: https://img.shields.io/conda/dn/bioconda/trimmomatic.svg?style=flat
   :target: https://anaconda.org/bioconda/trimmomatic
   :alt:   (downloads)
.. |docker_trimmomatic| image:: https://quay.io/repository/biocontainers/trimmomatic/status
   :target: https://quay.io/repository/biocontainers/trimmomatic
.. _`trimmomatic/tags`: https://quay.io/repository/biocontainers/trimmomatic?tab=tags


.. raw:: html

    <script>
        var package = "trimmomatic";
        var versions = ["0.39","0.39","0.39","0.38","0.36"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trimmomatic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trimmomatic/README.html