:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'postmaster'
.. highlight: bash

postmaster
==========

.. conda:recipe:: postmaster
   :replaces_section_title:
   :noindex:

   Postmaster is a tool for annotating transcriptome alignments with posterior alignment probabilities derived from salmon quantifications.

   :homepage: https://github.com/COMBINE-lab/postmaster
   :license: BSD / BSD-3-Clause
   :recipe: /`postmaster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/postmaster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/postmaster/meta.yaml>`_

   


.. conda:package:: postmaster

   |downloads_postmaster| |docker_postmaster|

   :versions:
      
      

      ``0.1.0-1``,  ``0.1.0-0``

      

   
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

      mamba install postmaster

   and update with::

      mamba update postmaster

  To create a new environment, run::

      mamba create --name myenvname postmaster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/postmaster:<tag>

   (see `postmaster/tags`_ for valid values for ``<tag>``)


.. |downloads_postmaster| image:: https://img.shields.io/conda/dn/bioconda/postmaster.svg?style=flat
   :target: https://anaconda.org/bioconda/postmaster
   :alt:   (downloads)
.. |docker_postmaster| image:: https://quay.io/repository/biocontainers/postmaster/status
   :target: https://quay.io/repository/biocontainers/postmaster
.. _`postmaster/tags`: https://quay.io/repository/biocontainers/postmaster?tab=tags


.. raw:: html

    <script>
        var package = "postmaster";
        var versions = ["0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/postmaster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/postmaster/README.html