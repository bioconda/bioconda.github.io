:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hisat2'
.. highlight: bash

hisat2
======

.. conda:recipe:: hisat2
   :replaces_section_title:
   :noindex:

   Graph\-based alignment of next generation sequencing reads to a population of genomes.

   :homepage: http://daehwankimlab.github.io/hisat2
   :documentation: https://daehwankimlab.github.io/hisat2/manual/
   
   :developer docs: https://github.com/DaehwanKimLab/hisat2
   :license: GPL / GPL-3.0
   :recipe: /`hisat2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hisat2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hisat2/meta.yaml>`_
   :links: biotools: :biotools:`HISAT2`, doi: :doi:`10.1038/nmeth.3317`, doi: :doi:`10.1038/s41587-019-0201-4`, usegalaxy-eu: :usegalaxy-eu:`hisat2`

   HISAT2 is a fast and sensitive alignment program for mapping next\-generation sequencing reads \(both DNA and RNA\) to a population of human genomes as well as to a single reference genome.


.. conda:package:: hisat2

   |downloads_hisat2| |docker_hisat2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.1-8</code>,  <code>2.2.1-7</code>,  <code>2.2.1-6</code>,  <code>2.2.1-5</code>,  <code>2.2.1-4</code>,  <code>2.2.1-3</code>,  <code>2.2.1-2</code>,  <code>2.2.1-0</code>,  <code>2.2.0-4</code>,  </span></summary>
      

      ``2.2.1-8``,  ``2.2.1-7``,  ``2.2.1-6``,  ``2.2.1-5``,  ``2.2.1-4``,  ``2.2.1-3``,  ``2.2.1-2``,  ``2.2.1-0``,  ``2.2.0-4``,  ``2.2.0-3``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.0-4``,  ``2.1.0-3``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.5-2``,  ``2.0.5-1``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.3beta-0``,  ``2.0.2beta-0``,  ``2.0.1beta-0``,  ``2.0.0beta-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends perl: 
   :depends python: ``>3.5``
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

      mamba install hisat2

   and update with::

      mamba update hisat2

  To create a new environment, run::

      mamba create --name myenvname hisat2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hisat2:<tag>

   (see `hisat2/tags`_ for valid values for ``<tag>``)


.. |downloads_hisat2| image:: https://img.shields.io/conda/dn/bioconda/hisat2.svg?style=flat
   :target: https://anaconda.org/bioconda/hisat2
   :alt:   (downloads)
.. |docker_hisat2| image:: https://quay.io/repository/biocontainers/hisat2/status
   :target: https://quay.io/repository/biocontainers/hisat2
.. _`hisat2/tags`: https://quay.io/repository/biocontainers/hisat2?tab=tags


.. raw:: html

    <script>
        var package = "hisat2";
        var versions = ["2.2.1","2.2.1","2.2.1","2.2.1","2.2.1"];
    </script>





Notes
-----
Pre\-built indices for HISAT2 can be downloaded from https\:\/\/daehwankimlab.github.io\/hisat2\/download\/.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hisat2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hisat2/README.html