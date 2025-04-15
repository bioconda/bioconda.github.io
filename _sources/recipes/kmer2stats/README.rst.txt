:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmer2stats'
.. highlight: bash

kmer2stats
==========

.. conda:recipe:: kmer2stats
   :replaces_section_title:
   :noindex:

   A tool for creating data files for statistic based on kmers.

   :homepage: https://github.com/SantaMcCloud/kmer2stats
   :license: GPL3 / GPL-3.0-only
   :recipe: /`kmer2stats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmer2stats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmer2stats/meta.yaml>`_

   


.. conda:package:: kmer2stats

   |downloads_kmer2stats| |docker_kmer2stats|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3``
   :depends scikit-bio: 
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

      mamba install kmer2stats

   and update with::

      mamba update kmer2stats

  To create a new environment, run::

      mamba create --name myenvname kmer2stats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kmer2stats:<tag>

   (see `kmer2stats/tags`_ for valid values for ``<tag>``)


.. |downloads_kmer2stats| image:: https://img.shields.io/conda/dn/bioconda/kmer2stats.svg?style=flat
   :target: https://anaconda.org/bioconda/kmer2stats
   :alt:   (downloads)
.. |docker_kmer2stats| image:: https://quay.io/repository/biocontainers/kmer2stats/status
   :target: https://quay.io/repository/biocontainers/kmer2stats
.. _`kmer2stats/tags`: https://quay.io/repository/biocontainers/kmer2stats?tab=tags


.. raw:: html

    <script>
        var package = "kmer2stats";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmer2stats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmer2stats/README.html