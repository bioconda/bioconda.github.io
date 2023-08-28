:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'goslimmer'
.. highlight: bash

goslimmer
=========

.. conda:recipe:: goslimmer
   :replaces_section_title:
   :noindex:

   GOSlimmer transforms GO annotations to a slimmed version of GO

   :homepage: https://github.com/DanFaria/GOSlimmer
   :license: Apache License 2.0
   :recipe: /`goslimmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goslimmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goslimmer/meta.yaml>`_

   


.. conda:package:: goslimmer

   |downloads_goslimmer| |docker_goslimmer|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends openjdk: ``>=8``
   :depends python: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install goslimmer

   and update with::

      mamba update goslimmer

  To create a new environment, run::

      mamba create --name myenvname goslimmer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/goslimmer:<tag>

   (see `goslimmer/tags`_ for valid values for ``<tag>``)


.. |downloads_goslimmer| image:: https://img.shields.io/conda/dn/bioconda/goslimmer.svg?style=flat
   :target: https://anaconda.org/bioconda/goslimmer
   :alt:   (downloads)
.. |docker_goslimmer| image:: https://quay.io/repository/biocontainers/goslimmer/status
   :target: https://quay.io/repository/biocontainers/goslimmer
.. _`goslimmer/tags`: https://quay.io/repository/biocontainers/goslimmer?tab=tags


.. raw:: html

    <script>
        var package = "goslimmer";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/goslimmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/goslimmer/README.html