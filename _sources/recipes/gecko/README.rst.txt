:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gecko'
.. highlight: bash

gecko
=====

.. conda:recipe:: gecko
   :replaces_section_title:
   :noindex:

   A pairwise genome comparison software for the detection of High\-scoring Segment Pairs

   :homepage: https://github.com/otorreno/gecko
   :license: GPL / GPL-3.0
   :recipe: /`gecko <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gecko>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gecko/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-015-0679-9`

   


.. conda:package:: gecko

   |downloads_gecko| |docker_gecko|

   :versions:
      
      

      ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``,  ``1.1-0``,  ``1.1.b-0``,  ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install gecko

   and update with::

      mamba update gecko

  To create a new environment, run::

      mamba create --name myenvname gecko

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gecko:<tag>

   (see `gecko/tags`_ for valid values for ``<tag>``)


.. |downloads_gecko| image:: https://img.shields.io/conda/dn/bioconda/gecko.svg?style=flat
   :target: https://anaconda.org/bioconda/gecko
   :alt:   (downloads)
.. |docker_gecko| image:: https://quay.io/repository/biocontainers/gecko/status
   :target: https://quay.io/repository/biocontainers/gecko
.. _`gecko/tags`: https://quay.io/repository/biocontainers/gecko?tab=tags


.. raw:: html

    <script>
        var package = "gecko";
        var versions = ["1.2","1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gecko/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gecko/README.html