:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnabridge-align'
.. highlight: bash

rnabridge-align
===============

.. conda:recipe:: rnabridge-align
   :replaces_section_title:
   :noindex:

   A tool to construct the alignments of entire fragments given the alignments of paired\-end reads.

   :homepage: https://github.com/Shao-Group/rnabridge-align
   :license: BSD-3-Clause
   :recipe: /`rnabridge-align <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnabridge-align>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnabridge-align/meta.yaml>`_

   


.. conda:package:: rnabridge-align

   |downloads_rnabridge-align| |docker_rnabridge-align|

   :versions:
      
      

      ``1.0.1-8``,  ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends boost-cpp: 
   :depends htslib: ``>=1.21,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install rnabridge-align

   and update with::

      mamba update rnabridge-align

  To create a new environment, run::

      mamba create --name myenvname rnabridge-align

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rnabridge-align:<tag>

   (see `rnabridge-align/tags`_ for valid values for ``<tag>``)


.. |downloads_rnabridge-align| image:: https://img.shields.io/conda/dn/bioconda/rnabridge-align.svg?style=flat
   :target: https://anaconda.org/bioconda/rnabridge-align
   :alt:   (downloads)
.. |docker_rnabridge-align| image:: https://quay.io/repository/biocontainers/rnabridge-align/status
   :target: https://quay.io/repository/biocontainers/rnabridge-align
.. _`rnabridge-align/tags`: https://quay.io/repository/biocontainers/rnabridge-align?tab=tags


.. raw:: html

    <script>
        var package = "rnabridge-align";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnabridge-align/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnabridge-align/README.html