:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybamtools'
.. highlight: bash

pybamtools
==========

.. conda:recipe:: pybamtools
   :replaces_section_title:
   :noindex:

   Tools for working on BAM data

   :homepage: https://github.com/blankenberg/pyBamTools
   :license: GPL2 / GNU General Public License v2 (GPLv2)
   :recipe: /`pybamtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybamtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybamtools/meta.yaml>`_

   


.. conda:package:: pybamtools

   |downloads_pybamtools| |docker_pybamtools|

   :versions:
      
      

      ``0.0.4-3``,  ``0.0.4-2``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``

      

   
   :depends numpy: 
   :depends pybamparser: ``0.0.3``
   :depends python: ``<3``
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

      mamba install pybamtools

   and update with::

      mamba update pybamtools

  To create a new environment, run::

      mamba create --name myenvname pybamtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pybamtools:<tag>

   (see `pybamtools/tags`_ for valid values for ``<tag>``)


.. |downloads_pybamtools| image:: https://img.shields.io/conda/dn/bioconda/pybamtools.svg?style=flat
   :target: https://anaconda.org/bioconda/pybamtools
   :alt:   (downloads)
.. |docker_pybamtools| image:: https://quay.io/repository/biocontainers/pybamtools/status
   :target: https://quay.io/repository/biocontainers/pybamtools
.. _`pybamtools/tags`: https://quay.io/repository/biocontainers/pybamtools?tab=tags


.. raw:: html

    <script>
        var package = "pybamtools";
        var versions = ["0.0.4","0.0.4","0.0.4","0.0.4","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybamtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybamtools/README.html