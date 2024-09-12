:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'methylmap'
.. highlight: bash

methylmap
=========

.. conda:recipe:: methylmap
   :replaces_section_title:
   :noindex:

   Plotting tool for population\-scale nucleotide modifications

   :homepage: https://github.com/EliseCoopman/methylmap
   :license: MIT / MIT
   :recipe: /`methylmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylmap/meta.yaml>`_
   :links: doi: :doi:`10.1101/2022.11.28.518239`

   


.. conda:package:: methylmap

   |downloads_methylmap| |docker_methylmap|

   :versions:
      
      

      ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.2.3-0``

      

   
   :depends dash: 
   :depends dash-bootstrap-components: 
   :depends numpy: ``>=1.14.3``
   :depends ont-modkit: 
   :depends pandas: ``>=0.23.4``
   :depends plotly: ``>=5.4.0``
   :depends pyranges: ``>=0.0.77``
   :depends python: ``>=3``
   :depends scipy: 
   :depends tabix: 
   :depends tqdm: 
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

      mamba install methylmap

   and update with::

      mamba update methylmap

  To create a new environment, run::

      mamba create --name myenvname methylmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/methylmap:<tag>

   (see `methylmap/tags`_ for valid values for ``<tag>``)


.. |downloads_methylmap| image:: https://img.shields.io/conda/dn/bioconda/methylmap.svg?style=flat
   :target: https://anaconda.org/bioconda/methylmap
   :alt:   (downloads)
.. |docker_methylmap| image:: https://quay.io/repository/biocontainers/methylmap/status
   :target: https://quay.io/repository/biocontainers/methylmap
.. _`methylmap/tags`: https://quay.io/repository/biocontainers/methylmap?tab=tags


.. raw:: html

    <script>
        var package = "methylmap";
        var versions = ["0.5.4","0.5.3","0.5.2","0.5.1","0.4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/methylmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/methylmap/README.html