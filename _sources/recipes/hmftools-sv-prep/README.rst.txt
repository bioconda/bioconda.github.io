:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-sv-prep'
.. highlight: bash

hmftools-sv-prep
================

.. conda:recipe:: hmftools-sv-prep
   :replaces_section_title:
   :noindex:

   SV Prep generates a maximally filtered SV BAM file by identifying candidate SV junctions and extracting all reads that may provide support to that junction.

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/sv-prep
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-sv-prep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-sv-prep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-sv-prep/meta.yaml>`_

   


.. conda:package:: hmftools-sv-prep

   |downloads_hmftools-sv-prep| |docker_hmftools-sv-prep|

   :versions:
      
      

      ``1.2.3-1``,  ``1.2.3-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0.1-0``

      

   
   :depends gridss: ``2.13.2 h50ea8bc_3``
   :depends openjdk: ``>=8``
   :depends zlib: 
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

      mamba install hmftools-sv-prep

   and update with::

      mamba update hmftools-sv-prep

  To create a new environment, run::

      mamba create --name myenvname hmftools-sv-prep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-sv-prep:<tag>

   (see `hmftools-sv-prep/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-sv-prep| image:: https://img.shields.io/conda/dn/bioconda/hmftools-sv-prep.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-sv-prep
   :alt:   (downloads)
.. |docker_hmftools-sv-prep| image:: https://quay.io/repository/biocontainers/hmftools-sv-prep/status
   :target: https://quay.io/repository/biocontainers/hmftools-sv-prep
.. _`hmftools-sv-prep/tags`: https://quay.io/repository/biocontainers/hmftools-sv-prep?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-sv-prep";
        var versions = ["1.2.3","1.2.3","1.1","1.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-sv-prep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-sv-prep/README.html