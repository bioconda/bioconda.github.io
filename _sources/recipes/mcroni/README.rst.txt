:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mcroni'
.. highlight: bash

mcroni
======

.. conda:recipe:: mcroni
   :replaces_section_title:
   :noindex:

   mcr\-1 analysis

   :homepage: https://github.com/liampshaw/mcroni
   :license: MIT
   :recipe: /`mcroni <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mcroni>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mcroni/meta.yaml>`_

   


.. conda:package:: mcroni

   |downloads_mcroni| |docker_mcroni|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends abricate: 
   :depends biopython: 
   :depends blast: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
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

      mamba install mcroni

   and update with::

      mamba update mcroni

  To create a new environment, run::

      mamba create --name myenvname mcroni

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mcroni:<tag>

   (see `mcroni/tags`_ for valid values for ``<tag>``)


.. |downloads_mcroni| image:: https://img.shields.io/conda/dn/bioconda/mcroni.svg?style=flat
   :target: https://anaconda.org/bioconda/mcroni
   :alt:   (downloads)
.. |docker_mcroni| image:: https://quay.io/repository/biocontainers/mcroni/status
   :target: https://quay.io/repository/biocontainers/mcroni
.. _`mcroni/tags`: https://quay.io/repository/biocontainers/mcroni?tab=tags


.. raw:: html

    <script>
        var package = "mcroni";
        var versions = ["1.0.4","1.0.3","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mcroni/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mcroni/README.html