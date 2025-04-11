:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grampa'
.. highlight: bash

grampa
======

.. conda:recipe:: grampa
   :replaces_section_title:
   :noindex:

   GRAMPA is a program to identify and place polyploidy events on a phylogeny and to count duplications and losses in the presence of polyploidy.

   :homepage: https://gwct.github.io/grampa
   :developer docs: https://github.com/gwct/grampa
   :license: GPL3 / GPL-3.0-only
   :recipe: /`grampa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grampa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grampa/meta.yaml>`_

   


.. conda:package:: grampa

   |downloads_grampa| |docker_grampa|

   :versions:
      
      

      ``1.4.4-0``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.1-0``

      

   
   :depends python: ``>=3``
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

      mamba install grampa

   and update with::

      mamba update grampa

  To create a new environment, run::

      mamba create --name myenvname grampa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/grampa:<tag>

   (see `grampa/tags`_ for valid values for ``<tag>``)


.. |downloads_grampa| image:: https://img.shields.io/conda/dn/bioconda/grampa.svg?style=flat
   :target: https://anaconda.org/bioconda/grampa
   :alt:   (downloads)
.. |docker_grampa| image:: https://quay.io/repository/biocontainers/grampa/status
   :target: https://quay.io/repository/biocontainers/grampa
.. _`grampa/tags`: https://quay.io/repository/biocontainers/grampa?tab=tags


.. raw:: html

    <script>
        var package = "grampa";
        var versions = ["1.4.4","1.4.3","1.4.3","1.4.2","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grampa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grampa/README.html