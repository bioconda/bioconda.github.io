:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hifiadapterfilt'
.. highlight: bash

hifiadapterfilt
===============

.. conda:recipe:: hifiadapterfilt
   :replaces_section_title:
   :noindex:

   Convert .bam to .fastq and remove reads with remnant PacBio HiFi adapter sequences

   :homepage: https://bio.tools/hifiadapterfilt
   :developer docs: https://github.com/sheinasim/HiFiAdapterFilt
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`hifiadapterfilt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifiadapterfilt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifiadapterfilt/meta.yaml>`_
   :links: biotools: :biotools:`hifiadapterfilt`, doi: :doi:`10.1186/s12864-022-08375-1`

   


.. conda:package:: hifiadapterfilt

   |downloads_hifiadapterfilt| |docker_hifiadapterfilt|

   :versions:
      
      

      ``3.0.0-0``

      

   
   :depends bamtools: 
   :depends blast: 
   :depends ncbi-fcs-gx: 
   :depends pigz: 
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

      mamba install hifiadapterfilt

   and update with::

      mamba update hifiadapterfilt

  To create a new environment, run::

      mamba create --name myenvname hifiadapterfilt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hifiadapterfilt:<tag>

   (see `hifiadapterfilt/tags`_ for valid values for ``<tag>``)


.. |downloads_hifiadapterfilt| image:: https://img.shields.io/conda/dn/bioconda/hifiadapterfilt.svg?style=flat
   :target: https://anaconda.org/bioconda/hifiadapterfilt
   :alt:   (downloads)
.. |docker_hifiadapterfilt| image:: https://quay.io/repository/biocontainers/hifiadapterfilt/status
   :target: https://quay.io/repository/biocontainers/hifiadapterfilt
.. _`hifiadapterfilt/tags`: https://quay.io/repository/biocontainers/hifiadapterfilt?tab=tags


.. raw:: html

    <script>
        var package = "hifiadapterfilt";
        var versions = ["3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hifiadapterfilt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hifiadapterfilt/README.html