:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'matlock'
.. highlight: bash

matlock
=======

.. conda:recipe:: matlock
   :replaces_section_title:
   :noindex:

   Simple tools for working with Hi\-C data

   :homepage: https://github.com/phasegenomics/matlock
   :license: GNU Affero General Public License v3
   :recipe: /`matlock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matlock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matlock/meta.yaml>`_

   


.. conda:package:: matlock

   |downloads_matlock| |docker_matlock|

   :versions:
      
      

      ``20181227-7``,  ``20181227-6``,  ``20181227-5``,  ``20181227-4``,  ``20181227-3``,  ``20181227-2``,  ``20181227-1``,  ``20181227-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :depends zlib: 
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

      mamba install matlock

   and update with::

      mamba update matlock

  To create a new environment, run::

      mamba create --name myenvname matlock

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/matlock:<tag>

   (see `matlock/tags`_ for valid values for ``<tag>``)


.. |downloads_matlock| image:: https://img.shields.io/conda/dn/bioconda/matlock.svg?style=flat
   :target: https://anaconda.org/bioconda/matlock
   :alt:   (downloads)
.. |docker_matlock| image:: https://quay.io/repository/biocontainers/matlock/status
   :target: https://quay.io/repository/biocontainers/matlock
.. _`matlock/tags`: https://quay.io/repository/biocontainers/matlock?tab=tags


.. raw:: html

    <script>
        var package = "matlock";
        var versions = ["20181227","20181227","20181227","20181227","20181227"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/matlock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/matlock/README.html