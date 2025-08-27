:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnabridge-denovo'
.. highlight: bash

rnabridge-denovo
================

.. conda:recipe:: rnabridge-denovo
   :replaces_section_title:
   :noindex:

   A tool to construct the alignments of entire fragments given the alignments of paired\-end reads.

   :homepage: https://github.com/Shao-Group/rnabridge-denovo
   :license: BSD-3-Clause
   :recipe: /`rnabridge-denovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnabridge-denovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnabridge-denovo/meta.yaml>`_

   


.. conda:package:: rnabridge-denovo

   |downloads_rnabridge-denovo| |docker_rnabridge-denovo|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends bifrost: 
   :depends libcxx: ``>=9.0.1``
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

      mamba install rnabridge-denovo

   and update with::

      mamba update rnabridge-denovo

  To create a new environment, run::

      mamba create --name myenvname rnabridge-denovo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rnabridge-denovo:<tag>

   (see `rnabridge-denovo/tags`_ for valid values for ``<tag>``)


.. |downloads_rnabridge-denovo| image:: https://img.shields.io/conda/dn/bioconda/rnabridge-denovo.svg?style=flat
   :target: https://anaconda.org/bioconda/rnabridge-denovo
   :alt:   (downloads)
.. |docker_rnabridge-denovo| image:: https://quay.io/repository/biocontainers/rnabridge-denovo/status
   :target: https://quay.io/repository/biocontainers/rnabridge-denovo
.. _`rnabridge-denovo/tags`: https://quay.io/repository/biocontainers/rnabridge-denovo?tab=tags


.. raw:: html

    <script>
        var package = "rnabridge-denovo";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnabridge-denovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnabridge-denovo/README.html