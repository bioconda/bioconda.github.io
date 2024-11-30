:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'karyopype'
.. highlight: bash

karyopype
=========

.. conda:recipe:: karyopype
   :replaces_section_title:
   :noindex:

   Chromosomal visualization in Python.

   :homepage: http://github.com/jakevc/karyopype
   :license: MIT / MIT
   :recipe: /`karyopype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/karyopype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/karyopype/meta.yaml>`_

   


.. conda:package:: karyopype

   |downloads_karyopype| |docker_karyopype|

   :versions:
      
      

      ``0.1.6-0``

      

   
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>3``
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

      mamba install karyopype

   and update with::

      mamba update karyopype

  To create a new environment, run::

      mamba create --name myenvname karyopype

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/karyopype:<tag>

   (see `karyopype/tags`_ for valid values for ``<tag>``)


.. |downloads_karyopype| image:: https://img.shields.io/conda/dn/bioconda/karyopype.svg?style=flat
   :target: https://anaconda.org/bioconda/karyopype
   :alt:   (downloads)
.. |docker_karyopype| image:: https://quay.io/repository/biocontainers/karyopype/status
   :target: https://quay.io/repository/biocontainers/karyopype
.. _`karyopype/tags`: https://quay.io/repository/biocontainers/karyopype?tab=tags


.. raw:: html

    <script>
        var package = "karyopype";
        var versions = ["0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/karyopype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/karyopype/README.html