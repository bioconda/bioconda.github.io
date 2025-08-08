:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'epicore'
.. highlight: bash

epicore
=======

.. conda:recipe:: epicore
   :replaces_section_title:
   :noindex:

   Compute core epitopes from multiple overlapping peptides.

   :homepage: https://github.com/AG-Walz/epicore
   :license: MIT / MIT
   :recipe: /`epicore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epicore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epicore/meta.yaml>`_

   


.. conda:package:: epicore

   |downloads_epicore| |docker_epicore|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends biopython: ``>=1.80``
   :depends click: ``>=8.1``
   :depends matplotlib-base: ``>=3.4``
   :depends mpld3: 
   :depends numpy: ``>=2``
   :depends openpyxl: ``>=3.1.3``
   :depends pandas: ``>=2``
   :depends python: ``>=3.12``
   :depends pyyaml: ``>=6.0.2``
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

      mamba install epicore

   and update with::

      mamba update epicore

  To create a new environment, run::

      mamba create --name myenvname epicore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/epicore:<tag>

   (see `epicore/tags`_ for valid values for ``<tag>``)


.. |downloads_epicore| image:: https://img.shields.io/conda/dn/bioconda/epicore.svg?style=flat
   :target: https://anaconda.org/bioconda/epicore
   :alt:   (downloads)
.. |docker_epicore| image:: https://quay.io/repository/biocontainers/epicore/status
   :target: https://quay.io/repository/biocontainers/epicore
.. _`epicore/tags`: https://quay.io/repository/biocontainers/epicore?tab=tags


.. raw:: html

    <script>
        var package = "epicore";
        var versions = ["0.1.6","0.1.5","0.1.4","0.1.3","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epicore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epicore/README.html