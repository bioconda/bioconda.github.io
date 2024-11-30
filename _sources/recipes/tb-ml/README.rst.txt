:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tb-ml'
.. highlight: bash

tb-ml
=====

.. conda:recipe:: tb-ml
   :replaces_section_title:
   :noindex:

   A simple tool for creating machine learning antimicrobial resistance prediction pipelines using Docker containers for M. tuberculosis.

   :homepage: https://github.com/jodyphelan/tb-ml
   :license: GPL3
   :recipe: /`tb-ml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tb-ml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tb-ml/meta.yaml>`_

   


.. conda:package:: tb-ml

   |downloads_tb-ml| |docker_tb-ml|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends python: ``>=3.7``
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

      mamba install tb-ml

   and update with::

      mamba update tb-ml

  To create a new environment, run::

      mamba create --name myenvname tb-ml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tb-ml:<tag>

   (see `tb-ml/tags`_ for valid values for ``<tag>``)


.. |downloads_tb-ml| image:: https://img.shields.io/conda/dn/bioconda/tb-ml.svg?style=flat
   :target: https://anaconda.org/bioconda/tb-ml
   :alt:   (downloads)
.. |docker_tb-ml| image:: https://quay.io/repository/biocontainers/tb-ml/status
   :target: https://quay.io/repository/biocontainers/tb-ml
.. _`tb-ml/tags`: https://quay.io/repository/biocontainers/tb-ml?tab=tags


.. raw:: html

    <script>
        var package = "tb-ml";
        var versions = ["0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tb-ml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tb-ml/README.html