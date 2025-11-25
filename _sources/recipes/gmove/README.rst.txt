:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gmove'
.. highlight: bash

gmove
=====

.. conda:recipe:: gmove
   :replaces_section_title:
   :noindex:

   Gmove is a gene prediction tool.

   :homepage: https://github.com/institut-de-genomique/Gmove
   :documentation: https://github.com/institut-de-genomique/Gmove/blob/v1.3/README.md
   
   :license: MIT / MIT
   :recipe: /`gmove <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmove>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmove/meta.yaml>`_
   :links: biotools: :biotools:`Gmove`, doi: :doi:`10.7490/f1000research.1111735.1`

   


.. conda:package:: gmove

   |downloads_gmove| |docker_gmove|

   :versions:
      
      

      ``1.3-0``

      

   
   :depends boost-cpp: 
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

      mamba install gmove

   and update with::

      mamba update gmove

  To create a new environment, run::

      mamba create --name myenvname gmove

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gmove:<tag>

   (see `gmove/tags`_ for valid values for ``<tag>``)


.. |downloads_gmove| image:: https://img.shields.io/conda/dn/bioconda/gmove.svg?style=flat
   :target: https://anaconda.org/bioconda/gmove
   :alt:   (downloads)
.. |docker_gmove| image:: https://quay.io/repository/biocontainers/gmove/status
   :target: https://quay.io/repository/biocontainers/gmove
.. _`gmove/tags`: https://quay.io/repository/biocontainers/gmove?tab=tags


.. raw:: html

    <script>
        var package = "gmove";
        var versions = ["1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gmove/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gmove/README.html