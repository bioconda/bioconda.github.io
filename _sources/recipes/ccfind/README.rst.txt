:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ccfind'
.. highlight: bash

ccfind
======

.. conda:recipe:: ccfind
   :replaces_section_title:
   :noindex:

   Circular Complete genome FINDer

   :homepage: https://github.com/yosuken/ccfind
   :license: MIT / MIT
   :recipe: /`ccfind <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccfind>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccfind/meta.yaml>`_

   ccfind is a general tool to detect circular complete genomes
   with clues of terminal redundancy. It was originally designed
   for identification of complete virus genomes from metagenome assembly.



.. conda:package:: ccfind

   |downloads_ccfind| |docker_ccfind|

   :versions:
      
      

      ``1.4.7-0``

      

   
   :depends blast: ``>=2.6``
   :depends fasta3: 
   :depends parallel: 
   :depends prodigal: 
   :depends ruby: ``>=2.0``
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

      mamba install ccfind

   and update with::

      mamba update ccfind

  To create a new environment, run::

      mamba create --name myenvname ccfind

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ccfind:<tag>

   (see `ccfind/tags`_ for valid values for ``<tag>``)


.. |downloads_ccfind| image:: https://img.shields.io/conda/dn/bioconda/ccfind.svg?style=flat
   :target: https://anaconda.org/bioconda/ccfind
   :alt:   (downloads)
.. |docker_ccfind| image:: https://quay.io/repository/biocontainers/ccfind/status
   :target: https://quay.io/repository/biocontainers/ccfind
.. _`ccfind/tags`: https://quay.io/repository/biocontainers/ccfind?tab=tags


.. raw:: html

    <script>
        var package = "ccfind";
        var versions = ["1.4.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ccfind/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ccfind/README.html