:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fatslim_biobb'
.. highlight: bash

fatslim_biobb
=============

.. conda:recipe:: fatslim_biobb
   :replaces_section_title:
   :noindex:

   FATSLiM is a software dedicated to the analysis of molecular dynamics simulations of lipid membranes

   :homepage: https://fatslim.github.io/
   :documentation: https://pythonhosted.org/fatslim/
   
   :developer docs: https://github.com/FATSLiM/fatslim
   :license: GPL-3.0-or-later
   :recipe: /`fatslim_biobb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fatslim_biobb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fatslim_biobb/meta.yaml>`_

   


.. conda:package:: fatslim_biobb

   |downloads_fatslim_biobb| |docker_fatslim_biobb|

   :versions:
      
      

      ``0.2.2-0``

      

   
   :depends libgcc: ``>=13``
   :depends numpy: ``>=1.21,<3``
   :depends numpy: ``>=1.26``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install fatslim_biobb

   and update with::

      mamba update fatslim_biobb

  To create a new environment, run::

      mamba create --name myenvname fatslim_biobb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fatslim_biobb:<tag>

   (see `fatslim_biobb/tags`_ for valid values for ``<tag>``)


.. |downloads_fatslim_biobb| image:: https://img.shields.io/conda/dn/bioconda/fatslim_biobb.svg?style=flat
   :target: https://anaconda.org/bioconda/fatslim_biobb
   :alt:   (downloads)
.. |docker_fatslim_biobb| image:: https://quay.io/repository/biocontainers/fatslim_biobb/status
   :target: https://quay.io/repository/biocontainers/fatslim_biobb
.. _`fatslim_biobb/tags`: https://quay.io/repository/biocontainers/fatslim_biobb?tab=tags


.. raw:: html

    <script>
        var package = "fatslim_biobb";
        var versions = ["0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fatslim_biobb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fatslim_biobb/README.html