:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phirbo'
.. highlight: bash

phirbo
======

.. conda:recipe:: phirbo
   :replaces_section_title:
   :noindex:

   Predict prokaryotic hosts for phage \(meta\) genomic sequences

   :homepage: https://github.com/aziele/phirbo
   :license: GPL3
   :recipe: /`phirbo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phirbo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phirbo/meta.yaml>`_

   


.. conda:package:: phirbo

   |downloads_phirbo| |docker_phirbo|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends numpy: ``>=1.16.4``
   :depends pandas: ``>=0.22.1``
   :depends python: ``>=3.6``
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

      mamba install phirbo

   and update with::

      mamba update phirbo

  To create a new environment, run::

      mamba create --name myenvname phirbo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phirbo:<tag>

   (see `phirbo/tags`_ for valid values for ``<tag>``)


.. |downloads_phirbo| image:: https://img.shields.io/conda/dn/bioconda/phirbo.svg?style=flat
   :target: https://anaconda.org/bioconda/phirbo
   :alt:   (downloads)
.. |docker_phirbo| image:: https://quay.io/repository/biocontainers/phirbo/status
   :target: https://quay.io/repository/biocontainers/phirbo
.. _`phirbo/tags`: https://quay.io/repository/biocontainers/phirbo?tab=tags


.. raw:: html

    <script>
        var package = "phirbo";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phirbo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phirbo/README.html