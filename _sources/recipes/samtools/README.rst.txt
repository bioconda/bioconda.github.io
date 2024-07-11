:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samtools'
.. highlight: bash

samtools
========

.. conda:recipe:: samtools
   :replaces_section_title:
   :noindex:

   Tools for dealing with SAM\, BAM and CRAM files

   :homepage: https://github.com/samtools/samtools
   :license: MIT
   :recipe: /`samtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samtools/meta.yaml>`_
   :links: biotools: :biotools:`samtools`, usegalaxy-eu: :usegalaxy-eu:`samtools_flagstat`

   


.. conda:package:: samtools

   |downloads_samtools| |docker_samtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20-1</code>,  <code>1.20-0</code>,  <code>1.19.2-1</code>,  <code>1.19.2-0</code>,  <code>1.19.1-0</code>,  <code>1.19-0</code>,  <code>1.18-1</code>,  <code>1.18-0</code>,  <code>1.17-2</code>,  </span></summary>
      

      ``1.20-1``,  ``1.20-0``,  ``1.19.2-1``,  ``1.19.2-0``,  ``1.19.1-0``,  ``1.19-0``,  ``1.18-1``,  ``1.18-0``,  ``1.17-2``,  ``1.17-1``,  ``1.17-0``,  ``1.16.1-2``,  ``1.16.1-1``,  ``1.16.1-0``,  ``1.15.1-1``,  ``1.15.1-0``,  ``1.15-1``,  ``1.15-0``,  ``1.14-0``,  ``1.13-0``,  ``1.12-1``,  ``1.12-0``,  ``1.11-0``,  ``1.10-3``,  ``1.10-2``,  ``1.10-1``,  ``1.10-0``,  ``1.9-12``,  ``1.9-11``,  ``1.9-10``,  ``1.9-9``,  ``1.9-8``,  ``1.9-7``,  ``1.9-6``,  ``1.9-5``,  ``1.9-4``,  ``1.9-3``,  ``1.9-2``,  ``1.9-1``,  ``1.9-0``,  ``1.8-5``,  ``1.8-4``,  ``1.8-3``,  ``1.8-2``,  ``1.7-2``,  ``1.7-1``,  ``1.7-0``,  ``1.6-10``,  ``1.6-9``,  ``1.6-8``,  ``1.6-7``,  ``1.6-6``,  ``1.6-5``,  ``1.6-4``,  ``1.6-3``,  ``1.6-2``,  ``1.6-1``,  ``1.6-0``,  ``1.5-2``,  ``1.5-1``,  ``1.5-0``,  ``1.4.1-0``,  ``1.4-0``,  ``1.3.1-11``,  ``1.3.1-10``,  ``1.3.1-9``,  ``1.3.1-8``,  ``1.3.1-7``,  ``1.3.1-6``,  ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3-8``,  ``1.3-7``,  ``1.3-6``,  ``1.3-5``,  ``1.3-4``,  ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``,  ``1.2.rglab-1``,  ``1.2.rglab-0``,  ``1.1-8``,  ``1.1-7``,  ``1.1-6``,  ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-1``,  ``1.1-0``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``,  ``0.1.19-11``,  ``0.1.19-10``,  ``0.1.19-9``,  ``0.1.19-8``,  ``0.1.19-7``,  ``0.1.19-6``,  ``0.1.19-5``,  ``0.1.19-4``,  ``0.1.19-3``,  ``0.1.19-2``,  ``0.1.19-1``,  ``0.1.19-0``,  ``0.1.18-13``,  ``0.1.18-12``,  ``0.1.18-11``,  ``0.1.18-10``,  ``0.1.18-0``,  ``0.1.17-0``,  ``0.1.16-0``,  ``0.1.15-1``,  ``0.1.15-0``,  ``0.1.14-2``,  ``0.1.14-1``,  ``0.1.14-0``,  ``0.1.13-2``,  ``0.1.13-1``,  ``0.1.13-0``,  ``0.1.12-3``,  ``0.1.12-2``,  ``0.1.12-1``,  ``0.1.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.20,<1.21.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends ncurses: ``>=6.5,<7.0a0``
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

      mamba install samtools

   and update with::

      mamba update samtools

  To create a new environment, run::

      mamba create --name myenvname samtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/samtools:<tag>

   (see `samtools/tags`_ for valid values for ``<tag>``)


.. |downloads_samtools| image:: https://img.shields.io/conda/dn/bioconda/samtools.svg?style=flat
   :target: https://anaconda.org/bioconda/samtools
   :alt:   (downloads)
.. |docker_samtools| image:: https://quay.io/repository/biocontainers/samtools/status
   :target: https://quay.io/repository/biocontainers/samtools
.. _`samtools/tags`: https://quay.io/repository/biocontainers/samtools?tab=tags


.. raw:: html

    <script>
        var package = "samtools";
        var versions = ["1.20","1.20","1.19.2","1.19.2","1.19.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samtools/README.html