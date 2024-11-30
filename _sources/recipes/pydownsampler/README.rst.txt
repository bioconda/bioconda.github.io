:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydownsampler'
.. highlight: bash

pydownsampler
=============

.. conda:recipe:: pydownsampler
   :replaces_section_title:
   :noindex:

   A Python package for downsampling sequence alignment files

   :homepage: https://github.com/LindoNkambule/pydownsampler
   :license: MIT / MIT
   :recipe: /`pydownsampler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydownsampler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydownsampler/meta.yaml>`_

   


.. conda:package:: pydownsampler

   |downloads_pydownsampler| |docker_pydownsampler|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends docopt: 
   :depends pysam: 
   :depends python: ``>=3.5``
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

      mamba install pydownsampler

   and update with::

      mamba update pydownsampler

  To create a new environment, run::

      mamba create --name myenvname pydownsampler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pydownsampler:<tag>

   (see `pydownsampler/tags`_ for valid values for ``<tag>``)


.. |downloads_pydownsampler| image:: https://img.shields.io/conda/dn/bioconda/pydownsampler.svg?style=flat
   :target: https://anaconda.org/bioconda/pydownsampler
   :alt:   (downloads)
.. |docker_pydownsampler| image:: https://quay.io/repository/biocontainers/pydownsampler/status
   :target: https://quay.io/repository/biocontainers/pydownsampler
.. _`pydownsampler/tags`: https://quay.io/repository/biocontainers/pydownsampler?tab=tags


.. raw:: html

    <script>
        var package = "pydownsampler";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydownsampler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydownsampler/README.html