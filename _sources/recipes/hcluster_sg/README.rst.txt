:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hcluster_sg'
.. highlight: bash

hcluster_sg
===========

.. conda:recipe:: hcluster_sg
   :replaces_section_title:
   :noindex:

   A tool for hierarchically clustering on a sparse graph

   :homepage: https://github.com/douglasgscofield/hcluster
   :license: GPLv2
   :recipe: /`hcluster_sg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hcluster_sg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hcluster_sg/meta.yaml>`_

   


.. conda:package:: hcluster_sg

   |downloads_hcluster_sg| |docker_hcluster_sg|

   :versions:
      
      

      ``0.5.1-7``,  ``0.5.1-6``,  ``0.5.1-5``,  ``0.5.1-4``,  ``0.5.1-3``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install hcluster_sg

   and update with::

      mamba update hcluster_sg

  To create a new environment, run::

      mamba create --name myenvname hcluster_sg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hcluster_sg:<tag>

   (see `hcluster_sg/tags`_ for valid values for ``<tag>``)


.. |downloads_hcluster_sg| image:: https://img.shields.io/conda/dn/bioconda/hcluster_sg.svg?style=flat
   :target: https://anaconda.org/bioconda/hcluster_sg
   :alt:   (downloads)
.. |docker_hcluster_sg| image:: https://quay.io/repository/biocontainers/hcluster_sg/status
   :target: https://quay.io/repository/biocontainers/hcluster_sg
.. _`hcluster_sg/tags`: https://quay.io/repository/biocontainers/hcluster_sg?tab=tags


.. raw:: html

    <script>
        var package = "hcluster_sg";
        var versions = ["0.5.1","0.5.1","0.5.1","0.5.1","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hcluster_sg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hcluster_sg/README.html