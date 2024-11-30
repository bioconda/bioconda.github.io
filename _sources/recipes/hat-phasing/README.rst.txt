:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hat-phasing'
.. highlight: bash

hat-phasing
===========

.. conda:recipe:: hat-phasing
   :replaces_section_title:
   :noindex:

   HAT\:‌  Haplotype assembly tool that use both long and short reads to reconstruct haplotypes

   :homepage: https://github.com/AbeelLab/hat/
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hat-phasing <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hat-phasing>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hat-phasing/meta.yaml>`_

   


.. conda:package:: hat-phasing

   |downloads_hat-phasing| |docker_hat-phasing|

   :versions:
      
      

      ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.1-0``

      

   
   :depends biopython: 
   :depends matplotlib-base: 
   :depends numpy: ``>=1.22.3``
   :depends pysam: ``>=0.19.0``
   :depends python: 
   :depends seaborn: 
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

      mamba install hat-phasing

   and update with::

      mamba update hat-phasing

  To create a new environment, run::

      mamba create --name myenvname hat-phasing

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hat-phasing:<tag>

   (see `hat-phasing/tags`_ for valid values for ``<tag>``)


.. |downloads_hat-phasing| image:: https://img.shields.io/conda/dn/bioconda/hat-phasing.svg?style=flat
   :target: https://anaconda.org/bioconda/hat-phasing
   :alt:   (downloads)
.. |docker_hat-phasing| image:: https://quay.io/repository/biocontainers/hat-phasing/status
   :target: https://quay.io/repository/biocontainers/hat-phasing
.. _`hat-phasing/tags`: https://quay.io/repository/biocontainers/hat-phasing?tab=tags


.. raw:: html

    <script>
        var package = "hat-phasing";
        var versions = ["0.1.8","0.1.7","0.1.6","0.1.5","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hat-phasing/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hat-phasing/README.html