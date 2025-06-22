:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ezcharts'
.. highlight: bash

ezcharts
========

.. conda:recipe:: ezcharts
   :replaces_section_title:
   :noindex:

   eCharts plotting API.

   :homepage: https://github.com/epi2me-labs/ezcharts
   :documentation: https://github.com/epi2me-labs/ezcharts/blob/v0.14.1/README.md
   
   :license: BSD / BSD-4-Clause
   :recipe: /`ezcharts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ezcharts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ezcharts/meta.yaml>`_

   


.. conda:package:: ezcharts

   |downloads_ezcharts| |docker_ezcharts|

   :versions:
      
      

      ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.1-0``,  ``0.11.2-0``,  ``0.10.2-0``

      

   
   :depends biopython: 
   :depends bokeh: ``>=3.1.0,<3.2.dev0``
   :depends dominate: 
   :depends jinja2: 
   :depends libsass: 
   :depends natsort: ``8.4.0``
   :depends numpy: 
   :depends pandas: 
   :depends pydantic: ``<2.0.0``
   :depends pymsaviz: ``0.4.2``
   :depends pysam: 
   :depends python: ``>=3.7``
   :depends scipy: 
   :depends seaborn-base: ``>=0.12.0,<0.13.dev0``
   :depends si-prefix: ``1.3.3``
   :depends sigfig: 
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

      mamba install ezcharts

   and update with::

      mamba update ezcharts

  To create a new environment, run::

      mamba create --name myenvname ezcharts

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ezcharts:<tag>

   (see `ezcharts/tags`_ for valid values for ``<tag>``)


.. |downloads_ezcharts| image:: https://img.shields.io/conda/dn/bioconda/ezcharts.svg?style=flat
   :target: https://anaconda.org/bioconda/ezcharts
   :alt:   (downloads)
.. |docker_ezcharts| image:: https://quay.io/repository/biocontainers/ezcharts/status
   :target: https://quay.io/repository/biocontainers/ezcharts
.. _`ezcharts/tags`: https://quay.io/repository/biocontainers/ezcharts?tab=tags


.. raw:: html

    <script>
        var package = "ezcharts";
        var versions = ["0.14.1","0.14.0","0.13.1","0.11.2","0.10.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ezcharts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ezcharts/README.html