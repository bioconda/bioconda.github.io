:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ls-gkm'
.. highlight: bash

ls-gkm
======

.. conda:recipe:: ls-gkm
   :replaces_section_title:
   :noindex:

   gkm\-SVM\, a sequence\-based method for predicting regulatory DNA elements.

   :homepage: https://github.com/Dongwon-Lee/lsgkm
   :documentation: https://github.com/Dongwon-Lee/lsgkm/blob/v0.1.1/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ls-gkm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ls-gkm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ls-gkm/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1003711`, doi: :doi:`10.1093/bioinformatics/btw142`

   


.. conda:package:: ls-gkm

   |downloads_ls-gkm| |docker_ls-gkm|

   :versions:
      
      

      ``0.1.1-0``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ls-gkm

   and update with::

      mamba update ls-gkm

  To create a new environment, run::

      mamba create --name myenvname ls-gkm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ls-gkm:<tag>

   (see `ls-gkm/tags`_ for valid values for ``<tag>``)


.. |downloads_ls-gkm| image:: https://img.shields.io/conda/dn/bioconda/ls-gkm.svg?style=flat
   :target: https://anaconda.org/bioconda/ls-gkm
   :alt:   (downloads)
.. |docker_ls-gkm| image:: https://quay.io/repository/biocontainers/ls-gkm/status
   :target: https://quay.io/repository/biocontainers/ls-gkm
.. _`ls-gkm/tags`: https://quay.io/repository/biocontainers/ls-gkm?tab=tags


.. raw:: html

    <script>
        var package = "ls-gkm";
        var versions = ["0.1.1","0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ls-gkm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ls-gkm/README.html