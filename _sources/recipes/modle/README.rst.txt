:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'modle'
.. highlight: bash

modle
=====

.. conda:recipe:: modle
   :replaces_section_title:
   :noindex:

   High\-performance stochastic modeling of DNA loop extrusion interactions

   :homepage: https://github.com/paulsengroup/MoDLE
   :documentation: https://github.com/paulsengroup/MoDLE#readme
   
   :license: MIT
   :recipe: /`modle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/modle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/modle/meta.yaml>`_
   :links: biotools: :biotools:`modle`, biotools: :biotools:`modle_tools`, doi: :doi:`10.1186/s13059-022-02815-7`, doi: :doi:`10.5281/zenodo.6992533`

   


.. conda:package:: modle

   |downloads_modle| |docker_modle|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends libcxx: ``>=15.0.7``
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

      mamba install modle

   and update with::

      mamba update modle

  To create a new environment, run::

      mamba create --name myenvname modle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/modle:<tag>

   (see `modle/tags`_ for valid values for ``<tag>``)


.. |downloads_modle| image:: https://img.shields.io/conda/dn/bioconda/modle.svg?style=flat
   :target: https://anaconda.org/bioconda/modle
   :alt:   (downloads)
.. |docker_modle| image:: https://quay.io/repository/biocontainers/modle/status
   :target: https://quay.io/repository/biocontainers/modle
.. _`modle/tags`: https://quay.io/repository/biocontainers/modle?tab=tags


.. raw:: html

    <script>
        var package = "modle";
        var versions = ["1.1.0","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/modle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/modle/README.html