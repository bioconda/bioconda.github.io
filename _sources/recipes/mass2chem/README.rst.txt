:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mass2chem'
.. highlight: bash

mass2chem
=========

.. conda:recipe:: mass2chem
   :replaces_section_title:
   :noindex:

   Common utilities for interpreting mass spectrometry data

   :homepage: https://github.com/shuzhao-li/mass2chem
   :license: BSD-Protection
   :recipe: /`mass2chem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mass2chem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mass2chem/meta.yaml>`_

   


.. conda:package:: mass2chem

   |downloads_mass2chem| |docker_mass2chem|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.9-0``,  ``0.4.4-0``

      

   
   :depends numpy: 
   :depends python: ``>=3.7``
   :depends scipy: 
   :depends treelib: 
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

      mamba install mass2chem

   and update with::

      mamba update mass2chem

  To create a new environment, run::

      mamba create --name myenvname mass2chem

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mass2chem:<tag>

   (see `mass2chem/tags`_ for valid values for ``<tag>``)


.. |downloads_mass2chem| image:: https://img.shields.io/conda/dn/bioconda/mass2chem.svg?style=flat
   :target: https://anaconda.org/bioconda/mass2chem
   :alt:   (downloads)
.. |docker_mass2chem| image:: https://quay.io/repository/biocontainers/mass2chem/status
   :target: https://quay.io/repository/biocontainers/mass2chem
.. _`mass2chem/tags`: https://quay.io/repository/biocontainers/mass2chem?tab=tags


.. raw:: html

    <script>
        var package = "mass2chem";
        var versions = ["0.5.0","0.4.9","0.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mass2chem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mass2chem/README.html