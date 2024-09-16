:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymsaviz'
.. highlight: bash

pymsaviz
========

.. conda:recipe:: pymsaviz
   :replaces_section_title:
   :noindex:

   MSA visualization python package for sequence analysis

   :homepage: https://moshi4.github.io/pyMSAviz/
   :developer docs: https://github.com/moshi4/pyMSAviz/
   :license: MIT / MIT
   :recipe: /`pymsaviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymsaviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymsaviz/meta.yaml>`_

   


.. conda:package:: pymsaviz

   |downloads_pymsaviz| |docker_pymsaviz|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends biopython: ``>=1.79``
   :depends matplotlib-base: ``>=3.5.2``
   :depends python: ``>=3.9``
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

      mamba install pymsaviz

   and update with::

      mamba update pymsaviz

  To create a new environment, run::

      mamba create --name myenvname pymsaviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pymsaviz:<tag>

   (see `pymsaviz/tags`_ for valid values for ``<tag>``)


.. |downloads_pymsaviz| image:: https://img.shields.io/conda/dn/bioconda/pymsaviz.svg?style=flat
   :target: https://anaconda.org/bioconda/pymsaviz
   :alt:   (downloads)
.. |docker_pymsaviz| image:: https://quay.io/repository/biocontainers/pymsaviz/status
   :target: https://quay.io/repository/biocontainers/pymsaviz
.. _`pymsaviz/tags`: https://quay.io/repository/biocontainers/pymsaviz?tab=tags


.. raw:: html

    <script>
        var package = "pymsaviz";
        var versions = ["0.5.0","0.4.2","0.4.1","0.4.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymsaviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymsaviz/README.html