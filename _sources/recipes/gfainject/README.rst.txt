:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfainject'
.. highlight: bash

gfainject
=========

.. conda:recipe:: gfainject
   :replaces_section_title:
   :noindex:

   Inject alignment into pangenome graphs

   :homepage: https://github.com/AndreaGuarracino/gfainject
   :license: MIT / MIT
   :recipe: /`gfainject <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfainject>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfainject/meta.yaml>`_

   


.. conda:package:: gfainject

   |downloads_gfainject| |docker_gfainject|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
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

      mamba install gfainject

   and update with::

      mamba update gfainject

  To create a new environment, run::

      mamba create --name myenvname gfainject

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gfainject:<tag>

   (see `gfainject/tags`_ for valid values for ``<tag>``)


.. |downloads_gfainject| image:: https://img.shields.io/conda/dn/bioconda/gfainject.svg?style=flat
   :target: https://anaconda.org/bioconda/gfainject
   :alt:   (downloads)
.. |docker_gfainject| image:: https://quay.io/repository/biocontainers/gfainject/status
   :target: https://quay.io/repository/biocontainers/gfainject
.. _`gfainject/tags`: https://quay.io/repository/biocontainers/gfainject?tab=tags


.. raw:: html

    <script>
        var package = "gfainject";
        var versions = ["0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfainject/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfainject/README.html