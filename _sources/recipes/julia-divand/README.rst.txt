:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'julia-divand'
.. highlight: bash

julia-divand
============

.. conda:recipe:: julia-divand
   :replaces_section_title:
   :noindex:

   Performs an n\-dimensional variational analysis\/gridding of arbitrarily located observations

   :homepage: https://github.com/gher-uliege/DIVAnd.jl
   :license: GPL2
   :recipe: /`julia-divand <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/julia-divand>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/julia-divand/meta.yaml>`_

   


.. conda:package:: julia-divand

   |downloads_julia-divand| |docker_julia-divand|

   :versions:
      
      

      ``2.7.9-0``

      

   
   :depends julia: ``>=1.8``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install julia-divand

   and update with::

      mamba update julia-divand

  To create a new environment, run::

      mamba create --name myenvname julia-divand

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/julia-divand:<tag>

   (see `julia-divand/tags`_ for valid values for ``<tag>``)


.. |downloads_julia-divand| image:: https://img.shields.io/conda/dn/bioconda/julia-divand.svg?style=flat
   :target: https://anaconda.org/bioconda/julia-divand
   :alt:   (downloads)
.. |docker_julia-divand| image:: https://quay.io/repository/biocontainers/julia-divand/status
   :target: https://quay.io/repository/biocontainers/julia-divand
.. _`julia-divand/tags`: https://quay.io/repository/biocontainers/julia-divand?tab=tags


.. raw:: html

    <script>
        var package = "julia-divand";
        var versions = ["2.7.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/julia-divand/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/julia-divand/README.html