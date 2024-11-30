:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pythomics'
.. highlight: bash

pythomics
=========

.. conda:recipe:: pythomics
   :replaces_section_title:
   :noindex:

   A multi\-omic python package

   :homepage: https://github.com/pandeylab/pythomics
   :license: GPL3 / GPL3
   :recipe: /`pythomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pythomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pythomics/meta.yaml>`_

   


.. conda:package:: pythomics

   |downloads_pythomics| |docker_pythomics|

   :versions:
      
      

      ``0.4.1-0``,  ``0.3.46-2``,  ``0.3.46-1``,  ``0.3.46-0``,  ``0.3.42-1``,  ``0.3.42-0``,  ``0.3.40-0``

      

   
   :depends lxml: 
   :depends python: 
   :depends six: 
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

      mamba install pythomics

   and update with::

      mamba update pythomics

  To create a new environment, run::

      mamba create --name myenvname pythomics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pythomics:<tag>

   (see `pythomics/tags`_ for valid values for ``<tag>``)


.. |downloads_pythomics| image:: https://img.shields.io/conda/dn/bioconda/pythomics.svg?style=flat
   :target: https://anaconda.org/bioconda/pythomics
   :alt:   (downloads)
.. |docker_pythomics| image:: https://quay.io/repository/biocontainers/pythomics/status
   :target: https://quay.io/repository/biocontainers/pythomics
.. _`pythomics/tags`: https://quay.io/repository/biocontainers/pythomics?tab=tags


.. raw:: html

    <script>
        var package = "pythomics";
        var versions = ["0.4.1","0.3.46","0.3.46","0.3.46","0.3.42"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pythomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pythomics/README.html