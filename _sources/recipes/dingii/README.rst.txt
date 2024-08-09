:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dingii'
.. highlight: bash

dingii
======

.. conda:recipe:: dingii
   :replaces_section_title:
   :noindex:

   Computing the Rearrangement Distance of Natural Genomes.

   :homepage: https://gitlab.ub.uni-bielefeld.de/gi/dingiiofficial
   :documentation: https://gitlab.ub.uni-bielefeld.de/gi/dingiiofficial/-/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`dingii <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dingii>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dingii/meta.yaml>`_
   :links: doi: :doi:`10.48550/arXiv.2001.02139`

   


.. conda:package:: dingii

   |downloads_dingii| |docker_dingii|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends networkx: ``>=3.1``
   :depends python: ``>=3.8``
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

      mamba install dingii

   and update with::

      mamba update dingii

  To create a new environment, run::

      mamba create --name myenvname dingii

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dingii:<tag>

   (see `dingii/tags`_ for valid values for ``<tag>``)


.. |downloads_dingii| image:: https://img.shields.io/conda/dn/bioconda/dingii.svg?style=flat
   :target: https://anaconda.org/bioconda/dingii
   :alt:   (downloads)
.. |docker_dingii| image:: https://quay.io/repository/biocontainers/dingii/status
   :target: https://quay.io/repository/biocontainers/dingii
.. _`dingii/tags`: https://quay.io/repository/biocontainers/dingii?tab=tags


.. raw:: html

    <script>
        var package = "dingii";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dingii/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dingii/README.html