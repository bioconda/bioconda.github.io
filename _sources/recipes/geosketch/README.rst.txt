:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'geosketch'
.. highlight: bash

geosketch
=========

.. conda:recipe:: geosketch
   :replaces_section_title:
   :noindex:

   Geometry\-preserving random sampling.

   :homepage: https://github.com/brianhie/geosketch
   :license: MIT / MIT
   :recipe: /`geosketch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geosketch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geosketch/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cels.2019.05.003`

   


.. conda:package:: geosketch

   |downloads_geosketch| |docker_geosketch|

   :versions:
      
      

      ``1.3-0``,  ``1.2-0``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends fbpca: ``>=1``
   :depends numpy: ``>=1.12``
   :depends python: ``>=3.6``
   :depends scikit-learn: ``>=0.24``
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

      mamba install geosketch

   and update with::

      mamba update geosketch

  To create a new environment, run::

      mamba create --name myenvname geosketch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/geosketch:<tag>

   (see `geosketch/tags`_ for valid values for ``<tag>``)


.. |downloads_geosketch| image:: https://img.shields.io/conda/dn/bioconda/geosketch.svg?style=flat
   :target: https://anaconda.org/bioconda/geosketch
   :alt:   (downloads)
.. |docker_geosketch| image:: https://quay.io/repository/biocontainers/geosketch/status
   :target: https://quay.io/repository/biocontainers/geosketch
.. _`geosketch/tags`: https://quay.io/repository/biocontainers/geosketch?tab=tags


.. raw:: html

    <script>
        var package = "geosketch";
        var versions = ["1.3","1.2","1.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/geosketch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/geosketch/README.html