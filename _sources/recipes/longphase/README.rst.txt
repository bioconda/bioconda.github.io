:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longphase'
.. highlight: bash

longphase
=========

.. conda:recipe:: longphase
   :replaces_section_title:
   :noindex:

   LongPhase is an ultra\-fast program for simultaneously co\-phasing SNPs\, small indels\, large SVs\, and \(5mC\) modifications for Nanopore and PacBio platforms.

   :homepage: https://github.com/twolinin/longphase
   :license: GPL3 / GPL-3.0-only
   :recipe: /`longphase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longphase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longphase/meta.yaml>`_

   


.. conda:package:: longphase

   |downloads_longphase| |docker_longphase|

   :versions:
      
      

      ``1.7.3-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
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

      mamba install longphase

   and update with::

      mamba update longphase

  To create a new environment, run::

      mamba create --name myenvname longphase

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/longphase:<tag>

   (see `longphase/tags`_ for valid values for ``<tag>``)


.. |downloads_longphase| image:: https://img.shields.io/conda/dn/bioconda/longphase.svg?style=flat
   :target: https://anaconda.org/bioconda/longphase
   :alt:   (downloads)
.. |docker_longphase| image:: https://quay.io/repository/biocontainers/longphase/status
   :target: https://quay.io/repository/biocontainers/longphase
.. _`longphase/tags`: https://quay.io/repository/biocontainers/longphase?tab=tags


.. raw:: html

    <script>
        var package = "longphase";
        var versions = ["1.7.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longphase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longphase/README.html