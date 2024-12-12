:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'solexaqa'
.. highlight: bash

solexaqa
========

.. conda:recipe:: solexaqa
   :replaces_section_title:
   :noindex:

   Quality statistics and visual representations for second\-generation sequencing data

   :homepage: http://solexaqa.sourceforge.net/
   :license: GPLv3
   :recipe: /`solexaqa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/solexaqa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/solexaqa/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2105-11-485`

   


.. conda:package:: solexaqa

   |downloads_solexaqa| |docker_solexaqa|

   :versions:
      
      

      ``3.1.7.1-7``,  ``3.1.7.1-6``,  ``3.1.7.1-5``,  ``3.1.7.1-4``,  ``3.1.7.1-3``,  ``3.1.7.1-2``,  ``3.1.7.1-1``,  ``3.1.7.1-0``

      

   
   :depends boost-cpp: 
   :depends icu: ``>=73.2,<74.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install solexaqa

   and update with::

      mamba update solexaqa

  To create a new environment, run::

      mamba create --name myenvname solexaqa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/solexaqa:<tag>

   (see `solexaqa/tags`_ for valid values for ``<tag>``)


.. |downloads_solexaqa| image:: https://img.shields.io/conda/dn/bioconda/solexaqa.svg?style=flat
   :target: https://anaconda.org/bioconda/solexaqa
   :alt:   (downloads)
.. |docker_solexaqa| image:: https://quay.io/repository/biocontainers/solexaqa/status
   :target: https://quay.io/repository/biocontainers/solexaqa
.. _`solexaqa/tags`: https://quay.io/repository/biocontainers/solexaqa?tab=tags


.. raw:: html

    <script>
        var package = "solexaqa";
        var versions = ["3.1.7.1","3.1.7.1","3.1.7.1","3.1.7.1","3.1.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/solexaqa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/solexaqa/README.html