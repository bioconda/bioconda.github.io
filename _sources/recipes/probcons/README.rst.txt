:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'probcons'
.. highlight: bash

probcons
========

.. conda:recipe:: probcons
   :replaces_section_title:
   :noindex:

   PROBCONS is a probabilistic consistency\-based multiple sequence alignment

   :homepage: http://probcons.stanford.edu/
   :license: Public Domain Software
   :recipe: /`probcons <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probcons>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probcons/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.2821705`

   


.. conda:package:: probcons

   |downloads_probcons| |docker_probcons|

   :versions:
      
      

      ``1.12-3``,  ``1.12-1``,  ``1.12-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install probcons

   and update with::

      mamba update probcons

  To create a new environment, run::

      mamba create --name myenvname probcons

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/probcons:<tag>

   (see `probcons/tags`_ for valid values for ``<tag>``)


.. |downloads_probcons| image:: https://img.shields.io/conda/dn/bioconda/probcons.svg?style=flat
   :target: https://anaconda.org/bioconda/probcons
   :alt:   (downloads)
.. |docker_probcons| image:: https://quay.io/repository/biocontainers/probcons/status
   :target: https://quay.io/repository/biocontainers/probcons
.. _`probcons/tags`: https://quay.io/repository/biocontainers/probcons?tab=tags


.. raw:: html

    <script>
        var package = "probcons";
        var versions = ["1.12","1.12","1.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/probcons/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/probcons/README.html