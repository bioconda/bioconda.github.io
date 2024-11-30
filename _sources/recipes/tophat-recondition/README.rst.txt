:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tophat-recondition'
.. highlight: bash

tophat-recondition
==================

.. conda:recipe:: tophat-recondition
   :replaces_section_title:
   :noindex:

   Post\-processor for TopHat unmapped reads

   :homepage: https://github.com/cbrueffer/tophat-recondition
   :license: BSD-2-Clause
   :recipe: /`tophat-recondition <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tophat-recondition>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tophat-recondition/meta.yaml>`_
   :links: biotools: :biotools:`tophat-recondition`, doi: :doi:`10.1186/s12859-016-1058-x`

   


.. conda:package:: tophat-recondition

   |downloads_tophat-recondition| |docker_tophat-recondition|

   :versions:
      
      

      ``1.4-4``,  ``1.4-3``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-0``

      

   
   :depends pysam: 
   :depends python: 
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

      mamba install tophat-recondition

   and update with::

      mamba update tophat-recondition

  To create a new environment, run::

      mamba create --name myenvname tophat-recondition

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tophat-recondition:<tag>

   (see `tophat-recondition/tags`_ for valid values for ``<tag>``)


.. |downloads_tophat-recondition| image:: https://img.shields.io/conda/dn/bioconda/tophat-recondition.svg?style=flat
   :target: https://anaconda.org/bioconda/tophat-recondition
   :alt:   (downloads)
.. |docker_tophat-recondition| image:: https://quay.io/repository/biocontainers/tophat-recondition/status
   :target: https://quay.io/repository/biocontainers/tophat-recondition
.. _`tophat-recondition/tags`: https://quay.io/repository/biocontainers/tophat-recondition?tab=tags


.. raw:: html

    <script>
        var package = "tophat-recondition";
        var versions = ["1.4","1.4","1.4","1.4","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tophat-recondition/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tophat-recondition/README.html