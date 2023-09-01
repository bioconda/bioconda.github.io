:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transcov'
.. highlight: bash

transcov
========

.. conda:recipe:: transcov
   :replaces_section_title:
   :noindex:

   A software for mapping coverage around transcription start sites

   :homepage: https://github.com/hogfeldt/transcov
   :documentation: https://transcov.readthedocs.io/en/stable/
   
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`transcov <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transcov>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transcov/meta.yaml>`_

   


.. conda:package:: transcov

   |downloads_transcov| |docker_transcov|

   :versions:
      
      

      ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.2-0``

      

   
   :depends attrs: 
   :depends click: ``>=7.0``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends scipy: 
   :depends seaborn: 
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

      mamba install transcov

   and update with::

      mamba update transcov

  To create a new environment, run::

      mamba create --name myenvname transcov

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/transcov:<tag>

   (see `transcov/tags`_ for valid values for ``<tag>``)


.. |downloads_transcov| image:: https://img.shields.io/conda/dn/bioconda/transcov.svg?style=flat
   :target: https://anaconda.org/bioconda/transcov
   :alt:   (downloads)
.. |docker_transcov| image:: https://quay.io/repository/biocontainers/transcov/status
   :target: https://quay.io/repository/biocontainers/transcov
.. _`transcov/tags`: https://quay.io/repository/biocontainers/transcov?tab=tags


.. raw:: html

    <script>
        var package = "transcov";
        var versions = ["1.1.3","1.1.2","1.1.1","1.0.7","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transcov/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transcov/README.html