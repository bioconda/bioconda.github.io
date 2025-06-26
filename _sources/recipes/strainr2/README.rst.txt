:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strainr2'
.. highlight: bash

strainr2
========

.. conda:recipe:: strainr2
   :replaces_section_title:
   :noindex:

   StrainR2 accurately deconvolutes strain\-level abundances in synthetic microbial communities using metagenomic sequencing reads

   :homepage: https://github.com/BisanzLab/StrainR2
   :license: MIT / MIT
   :recipe: /`strainr2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainr2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainr2/meta.yaml>`_

   


.. conda:package:: strainr2

   |downloads_strainr2| |docker_strainr2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.0-0</code>,  <code>2.2.1-0</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.0.1-1</code>,  <code>1.0.1-0</code>,  <code>1.0.0-1</code>,  </span></summary>
      

      ``2.3.0-0``,  ``2.2.1-0``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bbmap: 
   :depends bedtools: 
   :depends fastp: 
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-optparse: 
   :depends r-tidyverse: 
   :depends samtools: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install strainr2

   and update with::

      mamba update strainr2

  To create a new environment, run::

      mamba create --name myenvname strainr2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/strainr2:<tag>

   (see `strainr2/tags`_ for valid values for ``<tag>``)


.. |downloads_strainr2| image:: https://img.shields.io/conda/dn/bioconda/strainr2.svg?style=flat
   :target: https://anaconda.org/bioconda/strainr2
   :alt:   (downloads)
.. |docker_strainr2| image:: https://quay.io/repository/biocontainers/strainr2/status
   :target: https://quay.io/repository/biocontainers/strainr2
.. _`strainr2/tags`: https://quay.io/repository/biocontainers/strainr2?tab=tags


.. raw:: html

    <script>
        var package = "strainr2";
        var versions = ["2.3.0","2.2.1","2.1.0","2.1.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strainr2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strainr2/README.html