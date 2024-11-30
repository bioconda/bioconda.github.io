:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lightstringgraph'
.. highlight: bash

lightstringgraph
================

.. conda:recipe:: lightstringgraph
   :replaces_section_title:
   :noindex:

   LightStringGraphs \(LSG\) is an external memory string graph construction tool.

   :homepage: http://lsg.algolab.eu
   :license: GPL-3
   :recipe: /`lightstringgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lightstringgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lightstringgraph/meta.yaml>`_
   :links: biotools: :biotools:`lightstringgraph`, doi: :doi:`10.1007/978-3-662-44753-6_23`

   


.. conda:package:: lightstringgraph

   |downloads_lightstringgraph| |docker_lightstringgraph|

   :versions:
      
      

      ``0.4.0-6``,  ``0.4.0-5``,  ``0.4.0-4``,  ``0.4.0-3``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``

      

   
   :depends boost: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install lightstringgraph

   and update with::

      mamba update lightstringgraph

  To create a new environment, run::

      mamba create --name myenvname lightstringgraph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lightstringgraph:<tag>

   (see `lightstringgraph/tags`_ for valid values for ``<tag>``)


.. |downloads_lightstringgraph| image:: https://img.shields.io/conda/dn/bioconda/lightstringgraph.svg?style=flat
   :target: https://anaconda.org/bioconda/lightstringgraph
   :alt:   (downloads)
.. |docker_lightstringgraph| image:: https://quay.io/repository/biocontainers/lightstringgraph/status
   :target: https://quay.io/repository/biocontainers/lightstringgraph
.. _`lightstringgraph/tags`: https://quay.io/repository/biocontainers/lightstringgraph?tab=tags


.. raw:: html

    <script>
        var package = "lightstringgraph";
        var versions = ["0.4.0","0.4.0","0.4.0","0.4.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lightstringgraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lightstringgraph/README.html