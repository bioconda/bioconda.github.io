:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yak'
.. highlight: bash

yak
===

.. conda:recipe:: yak
   :replaces_section_title:
   :noindex:

   Yet another k\-mer analyzer.

   :homepage: https://github.com/lh3/yak
   :documentation: https://github.com/lh3/yak/blob/v0.1/README.md
   
   :license: MIT / MIT
   :recipe: /`yak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yak/meta.yaml>`_

   


.. conda:package:: yak

   |downloads_yak| |docker_yak|

   :versions:
      
      

      ``0.1-6``,  ``0.1-5``,  ``0.1-4``,  ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install yak

   and update with::

      mamba update yak

  To create a new environment, run::

      mamba create --name myenvname yak

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/yak:<tag>

   (see `yak/tags`_ for valid values for ``<tag>``)


.. |downloads_yak| image:: https://img.shields.io/conda/dn/bioconda/yak.svg?style=flat
   :target: https://anaconda.org/bioconda/yak
   :alt:   (downloads)
.. |docker_yak| image:: https://quay.io/repository/biocontainers/yak/status
   :target: https://quay.io/repository/biocontainers/yak
.. _`yak/tags`: https://quay.io/repository/biocontainers/yak?tab=tags


.. raw:: html

    <script>
        var package = "yak";
        var versions = ["0.1","0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yak/README.html