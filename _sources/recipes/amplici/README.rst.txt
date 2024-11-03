:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amplici'
.. highlight: bash

amplici
=======

.. conda:recipe:: amplici
   :replaces_section_title:
   :noindex:

   AmpliCI\: Cluster amplicon sequences in a fastq file with or without UMIs.

   :homepage: https://github.com/DormanLab/AmpliCI
   :license: BSD / BSD 3-Clause
   :recipe: /`amplici <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplici>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplici/meta.yaml>`_
   :links: biotools: :biotools:`amplici`, doi: :doi:`10.1093/bioinformatics/btaa648`

   


.. conda:package:: amplici

   |downloads_amplici| |docker_amplici|

   :versions:
      
      

      ``2.2-0``

      

   
   :depends libgcc: ``>=12``
   :depends libgfortran: 
   :depends libgfortran5: ``>=12.4.0``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install amplici

   and update with::

      mamba update amplici

  To create a new environment, run::

      mamba create --name myenvname amplici

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/amplici:<tag>

   (see `amplici/tags`_ for valid values for ``<tag>``)


.. |downloads_amplici| image:: https://img.shields.io/conda/dn/bioconda/amplici.svg?style=flat
   :target: https://anaconda.org/bioconda/amplici
   :alt:   (downloads)
.. |docker_amplici| image:: https://quay.io/repository/biocontainers/amplici/status
   :target: https://quay.io/repository/biocontainers/amplici
.. _`amplici/tags`: https://quay.io/repository/biocontainers/amplici?tab=tags


.. raw:: html

    <script>
        var package = "amplici";
        var versions = ["2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amplici/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amplici/README.html