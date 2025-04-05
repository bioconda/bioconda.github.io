:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ddqc'
.. highlight: bash

ddqc
====

.. conda:recipe:: ddqc
   :replaces_section_title:
   :noindex:

   Biology\-centered data\-driven quality control for scRNA\-seq.

   :homepage: https://github.com/ayshwaryas/ddqc
   :license: BSD / BSD-3-Clause
   :recipe: /`ddqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddqc/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-022-02820-w`

   


.. conda:package:: ddqc

   |downloads_ddqc| |docker_ddqc|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends numpy: ``>=1.20,<2``
   :depends pandas: ``>=1.2.0,<2``
   :depends pegasusio: 
   :depends pegasuspy: ``>=1.3``
   :depends python: ``>=3.6``
   :depends seaborn: ``>=0.11.0``
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

      mamba install ddqc

   and update with::

      mamba update ddqc

  To create a new environment, run::

      mamba create --name myenvname ddqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ddqc:<tag>

   (see `ddqc/tags`_ for valid values for ``<tag>``)


.. |downloads_ddqc| image:: https://img.shields.io/conda/dn/bioconda/ddqc.svg?style=flat
   :target: https://anaconda.org/bioconda/ddqc
   :alt:   (downloads)
.. |docker_ddqc| image:: https://quay.io/repository/biocontainers/ddqc/status
   :target: https://quay.io/repository/biocontainers/ddqc
.. _`ddqc/tags`: https://quay.io/repository/biocontainers/ddqc?tab=tags


.. raw:: html

    <script>
        var package = "ddqc";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ddqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ddqc/README.html