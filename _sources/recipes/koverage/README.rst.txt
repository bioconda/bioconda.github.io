:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'koverage'
.. highlight: bash

koverage
========

.. conda:recipe:: koverage
   :replaces_section_title:
   :noindex:

   Read\-coverage statistics pipelines for multiple samples

   :homepage: https://github.com/beardymcjohnface/Koverage
   :license: MIT
   :recipe: /`koverage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/koverage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/koverage/meta.yaml>`_

   


.. conda:package:: koverage

   |downloads_koverage| |docker_koverage|

   :versions:
      
      

      ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``

      

   
   :depends click: ``>=8.1.3``
   :depends datapane: ``>=0.16.7``
   :depends metasnek: ``>=0.0.8``
   :depends numpy: ``>=1.24.3``
   :depends plotly: ``>=5.15.0``
   :depends pulp: ``<2.8``
   :depends python: ``>=3.10``
   :depends pyyaml: ``>=6.0``
   :depends snakemake: ``>=7.14.0,<8``
   :depends snaketool-utils: ``>=0.0.4``
   :depends zstandard: ``>=0.21.0``
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

      mamba install koverage

   and update with::

      mamba update koverage

  To create a new environment, run::

      mamba create --name myenvname koverage

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/koverage:<tag>

   (see `koverage/tags`_ for valid values for ``<tag>``)


.. |downloads_koverage| image:: https://img.shields.io/conda/dn/bioconda/koverage.svg?style=flat
   :target: https://anaconda.org/bioconda/koverage
   :alt:   (downloads)
.. |docker_koverage| image:: https://quay.io/repository/biocontainers/koverage/status
   :target: https://quay.io/repository/biocontainers/koverage
.. _`koverage/tags`: https://quay.io/repository/biocontainers/koverage?tab=tags


.. raw:: html

    <script>
        var package = "koverage";
        var versions = ["0.1.11","0.1.10","0.1.9","0.1.8","0.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/koverage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/koverage/README.html