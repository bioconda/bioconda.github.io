:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybarrnap'
.. highlight: bash

pybarrnap
=========

.. conda:recipe:: pybarrnap
   :replaces_section_title:
   :noindex:

   Python implementation of barrnap \(Bacterial ribosomal RNA predictor\).

   :homepage: https://github.com/moshi4/pybarrnap
   :documentation: https://github.com/moshi4/pybarrnap/blob/v0.5.1/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pybarrnap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybarrnap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybarrnap/meta.yaml>`_

   


.. conda:package:: pybarrnap

   |downloads_pybarrnap| |docker_pybarrnap|

   :versions:
      
      

      ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.3.0-0``

      

   
   :depends biopython: ``>=1.80``
   :depends pyhmmer: ``>=0.11.0``
   :depends python: ``>=3.9``
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

      mamba install pybarrnap

   and update with::

      mamba update pybarrnap

  To create a new environment, run::

      mamba create --name myenvname pybarrnap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pybarrnap:<tag>

   (see `pybarrnap/tags`_ for valid values for ``<tag>``)


.. |downloads_pybarrnap| image:: https://img.shields.io/conda/dn/bioconda/pybarrnap.svg?style=flat
   :target: https://anaconda.org/bioconda/pybarrnap
   :alt:   (downloads)
.. |docker_pybarrnap| image:: https://quay.io/repository/biocontainers/pybarrnap/status
   :target: https://quay.io/repository/biocontainers/pybarrnap
.. _`pybarrnap/tags`: https://quay.io/repository/biocontainers/pybarrnap?tab=tags


.. raw:: html

    <script>
        var package = "pybarrnap";
        var versions = ["0.5.1","0.5.0","0.4.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybarrnap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybarrnap/README.html