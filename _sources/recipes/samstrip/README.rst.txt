:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samstrip'
.. highlight: bash

samstrip
========

.. conda:recipe:: samstrip
   :replaces_section_title:
   :noindex:

   Strip SAM files of data not needed for alignment computations.

   :homepage: https://github.com/jakobnissen/samstrip
   :license: MIT
   :recipe: /`samstrip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samstrip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samstrip/meta.yaml>`_

   


.. conda:package:: samstrip

   |downloads_samstrip| |docker_samstrip|

   :versions:
      
      

      ``0.2.1-0``

      

   
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

      mamba install samstrip

   and update with::

      mamba update samstrip

  To create a new environment, run::

      mamba create --name myenvname samstrip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/samstrip:<tag>

   (see `samstrip/tags`_ for valid values for ``<tag>``)


.. |downloads_samstrip| image:: https://img.shields.io/conda/dn/bioconda/samstrip.svg?style=flat
   :target: https://anaconda.org/bioconda/samstrip
   :alt:   (downloads)
.. |docker_samstrip| image:: https://quay.io/repository/biocontainers/samstrip/status
   :target: https://quay.io/repository/biocontainers/samstrip
.. _`samstrip/tags`: https://quay.io/repository/biocontainers/samstrip?tab=tags


.. raw:: html

    <script>
        var package = "samstrip";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samstrip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samstrip/README.html