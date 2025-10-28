:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'priorcons'
.. highlight: bash

priorcons
=========

.. conda:recipe:: priorcons
   :replaces_section_title:
   :noindex:

   Tool for integrating consensus sequences using prior information.

   :homepage: https://github.com/GERMAN00VP/priorcons
   :license: APL-1.0
   :recipe: /`priorcons <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/priorcons>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/priorcons/meta.yaml>`_

   


.. conda:package:: priorcons

   |downloads_priorcons| |docker_priorcons|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends pandas: 
   :depends pyarrow: 
   :depends python: ``>=3.8``
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

      mamba install priorcons

   and update with::

      mamba update priorcons

  To create a new environment, run::

      mamba create --name myenvname priorcons

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/priorcons:<tag>

   (see `priorcons/tags`_ for valid values for ``<tag>``)


.. |downloads_priorcons| image:: https://img.shields.io/conda/dn/bioconda/priorcons.svg?style=flat
   :target: https://anaconda.org/bioconda/priorcons
   :alt:   (downloads)
.. |docker_priorcons| image:: https://quay.io/repository/biocontainers/priorcons/status
   :target: https://quay.io/repository/biocontainers/priorcons
.. _`priorcons/tags`: https://quay.io/repository/biocontainers/priorcons?tab=tags


.. raw:: html

    <script>
        var package = "priorcons";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/priorcons/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/priorcons/README.html