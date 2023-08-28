:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yaggo'
.. highlight: bash

yaggo
=====

.. conda:recipe:: yaggo
   :replaces_section_title:
   :noindex:

   Yaggo is a tool to generate command line parsers for C\+\+. Yaggo stands for \"Yet Another GenGetOpt\" and is inspired by GNU Gengetopt.

   :homepage: https://github.com/gmarcais/yaggo
   :license: GPL / GPL-3.0
   :recipe: /`yaggo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yaggo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yaggo/meta.yaml>`_

   


.. conda:package:: yaggo

   |downloads_yaggo| |docker_yaggo|

   :versions:
      
      

      ``1.5.10-0``,  ``1.5.9-1``,  ``1.5.9-0``,  ``1.5.8-0``

      

   
   :depends ruby: ``>2.2.3``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install yaggo

   and update with::

      mamba update yaggo

  To create a new environment, run::

      mamba create --name myenvname yaggo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/yaggo:<tag>

   (see `yaggo/tags`_ for valid values for ``<tag>``)


.. |downloads_yaggo| image:: https://img.shields.io/conda/dn/bioconda/yaggo.svg?style=flat
   :target: https://anaconda.org/bioconda/yaggo
   :alt:   (downloads)
.. |docker_yaggo| image:: https://quay.io/repository/biocontainers/yaggo/status
   :target: https://quay.io/repository/biocontainers/yaggo
.. _`yaggo/tags`: https://quay.io/repository/biocontainers/yaggo?tab=tags


.. raw:: html

    <script>
        var package = "yaggo";
        var versions = ["1.5.10","1.5.9","1.5.9","1.5.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yaggo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yaggo/README.html