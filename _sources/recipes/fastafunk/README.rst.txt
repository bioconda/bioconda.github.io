:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastafunk'
.. highlight: bash

fastafunk
=========

.. conda:recipe:: fastafunk
   :replaces_section_title:
   :noindex:

   Miscellaneous fasta manipulation tools

   :homepage: https://github.com/cov-ert/fastafunk
   :license: MIT / MIT
   :recipe: /`fastafunk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastafunk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastafunk/meta.yaml>`_

   


.. conda:package:: fastafunk

   |downloads_fastafunk| |docker_fastafunk|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.9-0``,  ``0.0.4-0``

      

   
   :depends biopython: ``>=1.70,<1.78``
   :depends dendropy: 
   :depends numpy: 
   :depends pandas: ``>=0.24.2``
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

      mamba install fastafunk

   and update with::

      mamba update fastafunk

  To create a new environment, run::

      mamba create --name myenvname fastafunk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastafunk:<tag>

   (see `fastafunk/tags`_ for valid values for ``<tag>``)


.. |downloads_fastafunk| image:: https://img.shields.io/conda/dn/bioconda/fastafunk.svg?style=flat
   :target: https://anaconda.org/bioconda/fastafunk
   :alt:   (downloads)
.. |docker_fastafunk| image:: https://quay.io/repository/biocontainers/fastafunk/status
   :target: https://quay.io/repository/biocontainers/fastafunk
.. _`fastafunk/tags`: https://quay.io/repository/biocontainers/fastafunk?tab=tags


.. raw:: html

    <script>
        var package = "fastafunk";
        var versions = ["0.1.2","0.1.1","0.1.0","0.0.9","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastafunk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastafunk/README.html