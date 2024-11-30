:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shannon'
.. highlight: bash

shannon
=======

.. conda:recipe:: shannon
   :replaces_section_title:
   :noindex:

   A program for assembling transcripts from RNA\-Seq data.

   :homepage: http://sreeramkannan.github.io/Shannon/
   :developer docs: https://github.com/sreeramkannan/Shannon
   :license: GPL3 / GPLv3
   :recipe: /`shannon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shannon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shannon/meta.yaml>`_

   


.. conda:package:: shannon

   |downloads_shannon| |docker_shannon|

   :versions:
      
      

      ``0.0.2-1``,  ``0.0.2-0``

      

   
   :depends cvxopt: 
   :depends kmer-jellyfish: 
   :depends metis: 
   :depends numpy: 
   :depends parallel: 
   :depends python: ``<3``
   :depends quorum: 
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

      mamba install shannon

   and update with::

      mamba update shannon

  To create a new environment, run::

      mamba create --name myenvname shannon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shannon:<tag>

   (see `shannon/tags`_ for valid values for ``<tag>``)


.. |downloads_shannon| image:: https://img.shields.io/conda/dn/bioconda/shannon.svg?style=flat
   :target: https://anaconda.org/bioconda/shannon
   :alt:   (downloads)
.. |docker_shannon| image:: https://quay.io/repository/biocontainers/shannon/status
   :target: https://quay.io/repository/biocontainers/shannon
.. _`shannon/tags`: https://quay.io/repository/biocontainers/shannon?tab=tags


.. raw:: html

    <script>
        var package = "shannon";
        var versions = ["0.0.2","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shannon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shannon/README.html