:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gprofiler-official'
.. highlight: bash

gprofiler-official
==================

.. conda:recipe:: gprofiler-official
   :replaces_section_title:
   :noindex:

   Functional enrichment analysis and more via the g\:Profiler toolkit

   :homepage: http://biit.cs.ut.ee/gprofiler
   :license: BSD / BSD License
   :recipe: /`gprofiler-official <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gprofiler-official>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gprofiler-official/meta.yaml>`_

   


.. conda:package:: gprofiler-official

   |downloads_gprofiler-official| |docker_gprofiler-official|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``,  ``0.2.3-1``,  ``0.2.3-0``

      

   
   :depends python: 
   :depends requests: 
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

      mamba install gprofiler-official

   and update with::

      mamba update gprofiler-official

  To create a new environment, run::

      mamba create --name myenvname gprofiler-official

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gprofiler-official:<tag>

   (see `gprofiler-official/tags`_ for valid values for ``<tag>``)


.. |downloads_gprofiler-official| image:: https://img.shields.io/conda/dn/bioconda/gprofiler-official.svg?style=flat
   :target: https://anaconda.org/bioconda/gprofiler-official
   :alt:   (downloads)
.. |docker_gprofiler-official| image:: https://quay.io/repository/biocontainers/gprofiler-official/status
   :target: https://quay.io/repository/biocontainers/gprofiler-official
.. _`gprofiler-official/tags`: https://quay.io/repository/biocontainers/gprofiler-official?tab=tags


.. raw:: html

    <script>
        var package = "gprofiler-official";
        var versions = ["1.0.0","1.0.0","0.2.3","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gprofiler-official/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gprofiler-official/README.html