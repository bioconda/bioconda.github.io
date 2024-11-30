:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genrich'
.. highlight: bash

genrich
=======

.. conda:recipe:: genrich
   :replaces_section_title:
   :noindex:

   Detecting sites of genomic enrichment.

   :homepage: https://github.com/jsh58/Genrich
   :license: MIT
   :recipe: /`genrich <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genrich>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genrich/meta.yaml>`_

   


.. conda:package:: genrich

   |downloads_genrich| |docker_genrich|

   :versions:
      
      

      ``0.6.1-4``,  ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6-0``,  ``0.5-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install genrich

   and update with::

      mamba update genrich

  To create a new environment, run::

      mamba create --name myenvname genrich

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genrich:<tag>

   (see `genrich/tags`_ for valid values for ``<tag>``)


.. |downloads_genrich| image:: https://img.shields.io/conda/dn/bioconda/genrich.svg?style=flat
   :target: https://anaconda.org/bioconda/genrich
   :alt:   (downloads)
.. |docker_genrich| image:: https://quay.io/repository/biocontainers/genrich/status
   :target: https://quay.io/repository/biocontainers/genrich
.. _`genrich/tags`: https://quay.io/repository/biocontainers/genrich?tab=tags


.. raw:: html

    <script>
        var package = "genrich";
        var versions = ["0.6.1","0.6.1","0.6.1","0.6.1","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genrich/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genrich/README.html