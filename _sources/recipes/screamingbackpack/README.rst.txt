:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'screamingbackpack'
.. highlight: bash

screamingbackpack
=================

.. conda:recipe:: screamingbackpack
   :replaces_section_title:
   :noindex:

   ScreamingBackpack

   :homepage: http://pypi.python.org/pypi/ScreamingBackpack/
   :license: GPLv3
   :recipe: /`screamingbackpack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/screamingbackpack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/screamingbackpack/meta.yaml>`_

   


.. conda:package:: screamingbackpack

   |downloads_screamingbackpack| |docker_screamingbackpack|

   :versions:
      
      

      ``0.2.333-1``,  ``0.2.333-0``

      

   
   :depends python: 
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

      mamba install screamingbackpack

   and update with::

      mamba update screamingbackpack

  To create a new environment, run::

      mamba create --name myenvname screamingbackpack

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/screamingbackpack:<tag>

   (see `screamingbackpack/tags`_ for valid values for ``<tag>``)


.. |downloads_screamingbackpack| image:: https://img.shields.io/conda/dn/bioconda/screamingbackpack.svg?style=flat
   :target: https://anaconda.org/bioconda/screamingbackpack
   :alt:   (downloads)
.. |docker_screamingbackpack| image:: https://quay.io/repository/biocontainers/screamingbackpack/status
   :target: https://quay.io/repository/biocontainers/screamingbackpack
.. _`screamingbackpack/tags`: https://quay.io/repository/biocontainers/screamingbackpack?tab=tags


.. raw:: html

    <script>
        var package = "screamingbackpack";
        var versions = ["0.2.333","0.2.333"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/screamingbackpack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/screamingbackpack/README.html