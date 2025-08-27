:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msaprobs'
.. highlight: bash

msaprobs
========

.. conda:recipe:: msaprobs
   :replaces_section_title:
   :noindex:

   MSAProbs is a well\-established state\-of\-the\-art multiple sequence alignment algorithm for protein sequences.

   :homepage: http://msaprobs.sourceforge.net/homepage.htm
   :license: GPL3
   :recipe: /`msaprobs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msaprobs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msaprobs/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btq338`

   


.. conda:package:: msaprobs

   |downloads_msaprobs| |docker_msaprobs|

   :versions:
      
      

      ``0.9.7-4``,  ``0.9.7-3``,  ``0.9.7-2``,  ``0.9.7-1``,  ``0.9.7-0``

      

   
   :depends libcxx: ``>=18``
   :depends llvm-openmp: ``>=18.1.8``
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

      mamba install msaprobs

   and update with::

      mamba update msaprobs

  To create a new environment, run::

      mamba create --name myenvname msaprobs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/msaprobs:<tag>

   (see `msaprobs/tags`_ for valid values for ``<tag>``)


.. |downloads_msaprobs| image:: https://img.shields.io/conda/dn/bioconda/msaprobs.svg?style=flat
   :target: https://anaconda.org/bioconda/msaprobs
   :alt:   (downloads)
.. |docker_msaprobs| image:: https://quay.io/repository/biocontainers/msaprobs/status
   :target: https://quay.io/repository/biocontainers/msaprobs
.. _`msaprobs/tags`: https://quay.io/repository/biocontainers/msaprobs?tab=tags


.. raw:: html

    <script>
        var package = "msaprobs";
        var versions = ["0.9.7","0.9.7","0.9.7","0.9.7","0.9.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msaprobs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msaprobs/README.html