:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomeconstellation'
.. highlight: bash

genomeconstellation
===================

.. conda:recipe:: genomeconstellation
   :replaces_section_title:
   :noindex:

   Fast\, accurate and versatile k\-mer based classification system

   :homepage: https://bitbucket.org/berkeleylab/jgi-genomeconstellation
   :license: BSD
   :recipe: /`genomeconstellation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomeconstellation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomeconstellation/meta.yaml>`_
   :links: doi: :doi:`10.1101/812917`

   


.. conda:package:: genomeconstellation

   |downloads_genomeconstellation| |docker_genomeconstellation|

   :versions:
      
      

      ``0.21.1-4``,  ``0.21.1-3``,  ``0.21.1-2``,  ``0.21.1-1``,  ``0.21.1-0``

      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install genomeconstellation

   and update with::

      mamba update genomeconstellation

  To create a new environment, run::

      mamba create --name myenvname genomeconstellation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genomeconstellation:<tag>

   (see `genomeconstellation/tags`_ for valid values for ``<tag>``)


.. |downloads_genomeconstellation| image:: https://img.shields.io/conda/dn/bioconda/genomeconstellation.svg?style=flat
   :target: https://anaconda.org/bioconda/genomeconstellation
   :alt:   (downloads)
.. |docker_genomeconstellation| image:: https://quay.io/repository/biocontainers/genomeconstellation/status
   :target: https://quay.io/repository/biocontainers/genomeconstellation
.. _`genomeconstellation/tags`: https://quay.io/repository/biocontainers/genomeconstellation?tab=tags


.. raw:: html

    <script>
        var package = "genomeconstellation";
        var versions = ["0.21.1","0.21.1","0.21.1","0.21.1","0.21.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomeconstellation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomeconstellation/README.html