:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepdirect'
.. highlight: bash

deepdirect
==========

.. conda:recipe:: deepdirect
   :replaces_section_title:
   :noindex:

   In silico approach to generate mutations for protein complexes towards a specified direction \(increase\/decrease\) in binding affinity.

   :homepage: https://github.com/Jappy0/deepdirect
   :license: GPL-2.0
   :recipe: /`deepdirect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepdirect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepdirect/meta.yaml>`_

   


.. conda:package:: deepdirect

   |downloads_deepdirect| |docker_deepdirect|

   :versions:
      
      

      ``0.2.4-0``

      

   
   :depends colorlog: ``6.7.0``
   :depends keras: ``>=2.4.0``
   :depends python: 
   :depends tensorflow: ``>=2.4.0``
   :depends tqdm: ``>=4.64.1``
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

      mamba install deepdirect

   and update with::

      mamba update deepdirect

  To create a new environment, run::

      mamba create --name myenvname deepdirect

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deepdirect:<tag>

   (see `deepdirect/tags`_ for valid values for ``<tag>``)


.. |downloads_deepdirect| image:: https://img.shields.io/conda/dn/bioconda/deepdirect.svg?style=flat
   :target: https://anaconda.org/bioconda/deepdirect
   :alt:   (downloads)
.. |docker_deepdirect| image:: https://quay.io/repository/biocontainers/deepdirect/status
   :target: https://quay.io/repository/biocontainers/deepdirect
.. _`deepdirect/tags`: https://quay.io/repository/biocontainers/deepdirect?tab=tags


.. raw:: html

    <script>
        var package = "deepdirect";
        var versions = ["0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepdirect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepdirect/README.html