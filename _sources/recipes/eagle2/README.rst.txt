:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eagle2'
.. highlight: bash

eagle2
======

.. conda:recipe:: eagle2
   :replaces_section_title:
   :noindex:

   The Eagle software estimates haplotype phase either within a genotyped cohort or using a phased reference panel.

   :homepage: https://github.com/poruloh/Eagle
   :license: GPL-3.0-or-later
   :recipe: /`eagle2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eagle2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eagle2/meta.yaml>`_

   Eagle2 is now the default phasing method used by the Sanger and Michigan imputation servers and uses a new very fast HMM\-based algorithm that improves speed and accuracy over existing methods via two key ideas\; a new data structure based on the positional Burrows\-Wheeler transform and a rapid search algorithm that explores only the most relevant paths through the HMM. Compared to the Eagle1 algorithm\, Eagle2 has similar speed but much greater accuracy at sample sizes \<50\,000\; as such\, we have made the Eagle2 algorithm the default option. \(The Eagle1 algorithm can be accessed via the \-\-v1 flag.\) Eagle v2.3\+ supports phasing sequence data with or without a reference and also supports phasing chrX.


.. conda:package:: eagle2

   |downloads_eagle2| |docker_eagle2|

   :versions:
      
      

      ``2.4.1-0``

      

   
   :depends boost-cpp: ``>=1.85.0,<2.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.21,<1.23.0a0``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends openblas: ``>=0.3.28,<1.0a0``
   :depends zlib: ``>=1.2.13,<2.0a0``
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

      mamba install eagle2

   and update with::

      mamba update eagle2

  To create a new environment, run::

      mamba create --name myenvname eagle2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/eagle2:<tag>

   (see `eagle2/tags`_ for valid values for ``<tag>``)


.. |downloads_eagle2| image:: https://img.shields.io/conda/dn/bioconda/eagle2.svg?style=flat
   :target: https://anaconda.org/bioconda/eagle2
   :alt:   (downloads)
.. |docker_eagle2| image:: https://quay.io/repository/biocontainers/eagle2/status
   :target: https://quay.io/repository/biocontainers/eagle2
.. _`eagle2/tags`: https://quay.io/repository/biocontainers/eagle2?tab=tags


.. raw:: html

    <script>
        var package = "eagle2";
        var versions = ["2.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eagle2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eagle2/README.html