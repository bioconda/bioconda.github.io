:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hackgap'
.. highlight: bash

hackgap
=======

.. conda:recipe:: hackgap
   :replaces_section_title:
   :noindex:

   hackgap \(hash\-based counting of k\-mers with gaps\) provides a fast jit\-compiled k\-kmer counter which supports gapped k\-mers.

   :homepage: https://gitlab.com/rahmannlab/hackgap
   :license: MIT / MIT
   :recipe: /`hackgap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hackgap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hackgap/meta.yaml>`_
   :links: doi: :doi:`10.4230/LIPICS.WABI.2022.12`

   


.. conda:package:: hackgap

   |downloads_hackgap| |docker_hackgap|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bzip2: 
   :depends numba: ``>=0.60``
   :depends numpy: ``>=2``
   :depends pigz: 
   :depends python: ``>=3.12``
   :depends xz: 
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

      mamba install hackgap

   and update with::

      mamba update hackgap

  To create a new environment, run::

      mamba create --name myenvname hackgap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hackgap:<tag>

   (see `hackgap/tags`_ for valid values for ``<tag>``)


.. |downloads_hackgap| image:: https://img.shields.io/conda/dn/bioconda/hackgap.svg?style=flat
   :target: https://anaconda.org/bioconda/hackgap
   :alt:   (downloads)
.. |docker_hackgap| image:: https://quay.io/repository/biocontainers/hackgap/status
   :target: https://quay.io/repository/biocontainers/hackgap
.. _`hackgap/tags`: https://quay.io/repository/biocontainers/hackgap?tab=tags


.. raw:: html

    <script>
        var package = "hackgap";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hackgap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hackgap/README.html