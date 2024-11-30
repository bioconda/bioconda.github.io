:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hg-color'
.. highlight: bash

hg-color
========

.. conda:recipe:: hg-color
   :replaces_section_title:
   :noindex:

   HG\-CoLoR \(Hybrid Graph for the error Correction of Long Reads\) is a hybrid method for the error correction of long reads that follows the main idea from NaS to produce corrected long reads from assemblies of related accurate short reads.

   :homepage: https://github.com/pierre-morisse/HG-CoLoR
   :license: GNU General Public License (GPL)
   :recipe: /`hg-color <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hg-color>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hg-color/meta.yaml>`_

   


.. conda:package:: hg-color

   |downloads_hg-color| |docker_hg-color|

   :versions:
      
      

      ``1.1.1-1``,  ``1.1.1-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends coreutils: 
   :depends emboss: 
   :depends kmc: 
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends parallel: 
   :depends pgsa: 
   :depends python: 
   :depends quorum: 
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

      mamba install hg-color

   and update with::

      mamba update hg-color

  To create a new environment, run::

      mamba create --name myenvname hg-color

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hg-color:<tag>

   (see `hg-color/tags`_ for valid values for ``<tag>``)


.. |downloads_hg-color| image:: https://img.shields.io/conda/dn/bioconda/hg-color.svg?style=flat
   :target: https://anaconda.org/bioconda/hg-color
   :alt:   (downloads)
.. |docker_hg-color| image:: https://quay.io/repository/biocontainers/hg-color/status
   :target: https://quay.io/repository/biocontainers/hg-color
.. _`hg-color/tags`: https://quay.io/repository/biocontainers/hg-color?tab=tags


.. raw:: html

    <script>
        var package = "hg-color";
        var versions = ["1.1.1","1.1.1","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hg-color/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hg-color/README.html