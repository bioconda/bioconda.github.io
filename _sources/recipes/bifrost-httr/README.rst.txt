:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bifrost-httr'
.. highlight: bash

bifrost-httr
============

.. conda:recipe:: bifrost-httr
   :replaces_section_title:
   :noindex:

   Pre\-release version for testing purposes only

   :homepage: https://github.com/seqera-services/bifrost-httr
   :license: LGPL / LGPL-3.0
   :recipe: /`bifrost-httr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bifrost-httr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bifrost-httr/meta.yaml>`_

   Pre\-release version for testing purposes only


.. conda:package:: bifrost-httr

   |downloads_bifrost-httr| |docker_bifrost-httr|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends click: 
   :depends cmdstanpy: ``>=1.2.0,<2.0``
   :depends multiqc: ``1.28``
   :depends numpy: ``>=2.0.0,<3.0``
   :depends pandas: ``>=2.0.0,<3.0``
   :depends plotly: ``>=6.0.0,<7.0``
   :depends python: ``>=3.10``
   :depends pyyaml: ``>=6.0``
   :depends scipy: ``>=1.10.0,<2.0``
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

      mamba install bifrost-httr

   and update with::

      mamba update bifrost-httr

  To create a new environment, run::

      mamba create --name myenvname bifrost-httr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bifrost-httr:<tag>

   (see `bifrost-httr/tags`_ for valid values for ``<tag>``)


.. |downloads_bifrost-httr| image:: https://img.shields.io/conda/dn/bioconda/bifrost-httr.svg?style=flat
   :target: https://anaconda.org/bioconda/bifrost-httr
   :alt:   (downloads)
.. |docker_bifrost-httr| image:: https://quay.io/repository/biocontainers/bifrost-httr/status
   :target: https://quay.io/repository/biocontainers/bifrost-httr
.. _`bifrost-httr/tags`: https://quay.io/repository/biocontainers/bifrost-httr?tab=tags


.. raw:: html

    <script>
        var package = "bifrost-httr";
        var versions = ["0.5.0","0.4.2","0.4.0","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bifrost-httr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bifrost-httr/README.html