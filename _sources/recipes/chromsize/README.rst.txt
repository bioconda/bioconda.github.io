:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chromsize'
.. highlight: bash

chromsize
=========

.. conda:recipe:: chromsize
   :replaces_section_title:
   :noindex:

   just get your chrom sizes

   :homepage: https://github.com/alejandrogzi/chromsize
   :license: MIT / MIT
   :recipe: /`chromsize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromsize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromsize/meta.yaml>`_

   


.. conda:package:: chromsize

   |downloads_chromsize| |docker_chromsize|

   :versions:
      
      

      ``0.0.2-1``,  ``0.0.2-0``

      

   
   :depends libcxx: ``>=18``
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

      mamba install chromsize

   and update with::

      mamba update chromsize

  To create a new environment, run::

      mamba create --name myenvname chromsize

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chromsize:<tag>

   (see `chromsize/tags`_ for valid values for ``<tag>``)


.. |downloads_chromsize| image:: https://img.shields.io/conda/dn/bioconda/chromsize.svg?style=flat
   :target: https://anaconda.org/bioconda/chromsize
   :alt:   (downloads)
.. |docker_chromsize| image:: https://quay.io/repository/biocontainers/chromsize/status
   :target: https://quay.io/repository/biocontainers/chromsize
.. _`chromsize/tags`: https://quay.io/repository/biocontainers/chromsize?tab=tags


.. raw:: html

    <script>
        var package = "chromsize";
        var versions = ["0.0.2","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chromsize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chromsize/README.html