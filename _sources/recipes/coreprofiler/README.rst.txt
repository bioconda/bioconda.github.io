:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coreprofiler'
.. highlight: bash

coreprofiler
============

.. conda:recipe:: coreprofiler
   :replaces_section_title:
   :noindex:

   CoreProfiler\, a robust and integrable cgMLST software.

   :homepage: https://gitlab.com/ifb-elixirfr/abromics
   :documentation: https://gitlab.com/ifb-elixirfr/abromics/coreprofiler/-/blob/main/docs/build/html/index.html
   
   :developer docs: https://gitlab.com/ifb-elixirfr/abromics/coreprofiler
   :license: GPL3 / GPL-3.0-only
   :recipe: /`coreprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coreprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coreprofiler/meta.yaml>`_

   


.. conda:package:: coreprofiler

   |downloads_coreprofiler| |docker_coreprofiler|

   :versions:
      
      

      ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``

      

   
   :depends bio: 
   :depends biopython: ``>=1.81.0``
   :depends blast: 
   :depends bs4: 
   :depends pandas: ``>=2.0.3``
   :depends python: ``>=3.11``
   :depends rauth: ``>=0.7.3,<0.8.0``
   :depends tqdm: ``>=4.65.0``
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

      mamba install coreprofiler

   and update with::

      mamba update coreprofiler

  To create a new environment, run::

      mamba create --name myenvname coreprofiler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/coreprofiler:<tag>

   (see `coreprofiler/tags`_ for valid values for ``<tag>``)


.. |downloads_coreprofiler| image:: https://img.shields.io/conda/dn/bioconda/coreprofiler.svg?style=flat
   :target: https://anaconda.org/bioconda/coreprofiler
   :alt:   (downloads)
.. |docker_coreprofiler| image:: https://quay.io/repository/biocontainers/coreprofiler/status
   :target: https://quay.io/repository/biocontainers/coreprofiler
.. _`coreprofiler/tags`: https://quay.io/repository/biocontainers/coreprofiler?tab=tags


.. raw:: html

    <script>
        var package = "coreprofiler";
        var versions = ["1.1.5","1.1.4","1.1.3","1.1.2","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coreprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coreprofiler/README.html