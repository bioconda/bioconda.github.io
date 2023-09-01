:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python_circos'
.. highlight: bash

python_circos
=============

.. conda:recipe:: python_circos
   :replaces_section_title:
   :noindex:

   Circos plots for python

   :homepage: https://github.com/ponnhide/pyCircos
   :license: GPL-3.0
   :recipe: /`python_circos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python_circos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python_circos/meta.yaml>`_

   


.. conda:package:: python_circos

   |downloads_python_circos| |docker_python_circos|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends biopython: ``>=1.78``
   :depends matplotlib-base: ``>=3.4``
   :depends python: ``>=3.7``
   :depends requests: 
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

      mamba install python_circos

   and update with::

      mamba update python_circos

  To create a new environment, run::

      mamba create --name myenvname python_circos

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/python_circos:<tag>

   (see `python_circos/tags`_ for valid values for ``<tag>``)


.. |downloads_python_circos| image:: https://img.shields.io/conda/dn/bioconda/python_circos.svg?style=flat
   :target: https://anaconda.org/bioconda/python_circos
   :alt:   (downloads)
.. |docker_python_circos| image:: https://quay.io/repository/biocontainers/python_circos/status
   :target: https://quay.io/repository/biocontainers/python_circos
.. _`python_circos/tags`: https://quay.io/repository/biocontainers/python_circos?tab=tags


.. raw:: html

    <script>
        var package = "python_circos";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python_circos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python_circos/README.html