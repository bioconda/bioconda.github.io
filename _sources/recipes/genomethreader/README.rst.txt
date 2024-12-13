:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomethreader'
.. highlight: bash

genomethreader
==============

.. conda:recipe:: genomethreader
   :replaces_section_title:
   :noindex:

   GenomeThreader is a software tool to compute gene structure predictions. The gene structure predictions are calculated using a similarity\-based approach where additional cDNA\/EST and\/or protein sequences are used to predict gene structures via spliced alignments.

   :homepage: http://genomethreader.org/
   :developer docs: https://github.com/genometools/genomethreader
   :license: ISC
   :recipe: /`genomethreader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomethreader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomethreader/meta.yaml>`_

   


.. conda:package:: genomethreader

   |downloads_genomethreader| |docker_genomethreader|

   :versions:
      
      

      ``1.7.1-7``,  ``1.7.1-6``,  ``1.7.1-5``,  ``1.7.1-4``,  ``1.7.1-3``,  ``1.7.1-2``,  ``1.7.1-1``,  ``1.7.1-0``

      

   
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

      mamba install genomethreader

   and update with::

      mamba update genomethreader

  To create a new environment, run::

      mamba create --name myenvname genomethreader

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genomethreader:<tag>

   (see `genomethreader/tags`_ for valid values for ``<tag>``)


.. |downloads_genomethreader| image:: https://img.shields.io/conda/dn/bioconda/genomethreader.svg?style=flat
   :target: https://anaconda.org/bioconda/genomethreader
   :alt:   (downloads)
.. |docker_genomethreader| image:: https://quay.io/repository/biocontainers/genomethreader/status
   :target: https://quay.io/repository/biocontainers/genomethreader
.. _`genomethreader/tags`: https://quay.io/repository/biocontainers/genomethreader?tab=tags


.. raw:: html

    <script>
        var package = "genomethreader";
        var versions = ["1.7.1","1.7.1","1.7.1","1.7.1","1.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomethreader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomethreader/README.html