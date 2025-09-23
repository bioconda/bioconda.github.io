:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'physher'
.. highlight: bash

physher
=======

.. conda:recipe:: physher
   :replaces_section_title:
   :noindex:

   A multi\-algorithmic framework for phylogenetic inference.

   :homepage: https://github.com/4ment/physher
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`physher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/physher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/physher/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12862-014-0163-6`, biotools: :biotools:`physher`

   


.. conda:package:: physher

   |downloads_physher| |docker_physher|

   :versions:
      
      

      ``2.0.1-3``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
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

      mamba install physher

   and update with::

      mamba update physher

  To create a new environment, run::

      mamba create --name myenvname physher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/physher:<tag>

   (see `physher/tags`_ for valid values for ``<tag>``)


.. |downloads_physher| image:: https://img.shields.io/conda/dn/bioconda/physher.svg?style=flat
   :target: https://anaconda.org/bioconda/physher
   :alt:   (downloads)
.. |docker_physher| image:: https://quay.io/repository/biocontainers/physher/status
   :target: https://quay.io/repository/biocontainers/physher
.. _`physher/tags`: https://quay.io/repository/biocontainers/physher?tab=tags


.. raw:: html

    <script>
        var package = "physher";
        var versions = ["2.0.1","2.0.1","2.0.1","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/physher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/physher/README.html