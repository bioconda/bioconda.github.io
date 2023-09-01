:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'delegation'
.. highlight: bash

delegation
==========

.. conda:recipe:: delegation
   :replaces_section_title:
   :noindex:

   Simple implementation of the delegate pattern.

   :homepage: https://github.com/symonsoft/delegation
   :license: BSD / BSD
   :recipe: /`delegation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/delegation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/delegation/meta.yaml>`_

   


.. conda:package:: delegation

   |downloads_delegation| |docker_delegation|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``

      

   
   :depends python: 
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

      mamba install delegation

   and update with::

      mamba update delegation

  To create a new environment, run::

      mamba create --name myenvname delegation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/delegation:<tag>

   (see `delegation/tags`_ for valid values for ``<tag>``)


.. |downloads_delegation| image:: https://img.shields.io/conda/dn/bioconda/delegation.svg?style=flat
   :target: https://anaconda.org/bioconda/delegation
   :alt:   (downloads)
.. |docker_delegation| image:: https://quay.io/repository/biocontainers/delegation/status
   :target: https://quay.io/repository/biocontainers/delegation
.. _`delegation/tags`: https://quay.io/repository/biocontainers/delegation?tab=tags


.. raw:: html

    <script>
        var package = "delegation";
        var versions = ["1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/delegation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/delegation/README.html