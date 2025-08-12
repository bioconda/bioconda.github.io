:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kraken-ea'
.. highlight: bash

kraken-ea
=========

.. conda:recipe:: kraken-ea
   :replaces_section_title:
   :noindex:

   Kraken is a system for assigning taxonomic labels to short DNA sequences\, usually obtained through metagenomic studies. This is a modified version allowing for splitting of fastq files based on read classifications.

   :homepage: https://github.com/ExpressionAnalysis/kraken/tree/v0.10.5-beta-ea.3
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`kraken-ea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kraken-ea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kraken-ea/meta.yaml>`_

   


.. conda:package:: kraken-ea

   |downloads_kraken-ea| |docker_kraken-ea|

   :versions:
      
      

      ``0.10.5ea.3-5``,  ``0.10.5ea.3-3``,  ``0.10.5ea.3-2``,  ``0.10.5ea.3-1``,  ``0.10.5ea.3-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends kmer-jellyfish: ``1.*``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install kraken-ea

   and update with::

      mamba update kraken-ea

  To create a new environment, run::

      mamba create --name myenvname kraken-ea

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kraken-ea:<tag>

   (see `kraken-ea/tags`_ for valid values for ``<tag>``)


.. |downloads_kraken-ea| image:: https://img.shields.io/conda/dn/bioconda/kraken-ea.svg?style=flat
   :target: https://anaconda.org/bioconda/kraken-ea
   :alt:   (downloads)
.. |docker_kraken-ea| image:: https://quay.io/repository/biocontainers/kraken-ea/status
   :target: https://quay.io/repository/biocontainers/kraken-ea
.. _`kraken-ea/tags`: https://quay.io/repository/biocontainers/kraken-ea?tab=tags


.. raw:: html

    <script>
        var package = "kraken-ea";
        var versions = ["0.10.5ea.3","0.10.5ea.3","0.10.5ea.3","0.10.5ea.3","0.10.5ea.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kraken-ea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kraken-ea/README.html