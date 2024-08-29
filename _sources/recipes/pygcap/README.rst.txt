:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pygcap'
.. highlight: bash

pygcap
======

.. conda:recipe:: pygcap
   :replaces_section_title:
   :noindex:

   Python package for probe\-based gene cluster finding in large microbial genome database.

   :homepage: https://github.com/jrim42/pyGCAP
   :license: MIT / MIT
   :recipe: /`pygcap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygcap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygcap/meta.yaml>`_

   Python package for probe\-based gene cluster finding in large microbial genome database.


.. conda:package:: pygcap

   |downloads_pygcap| |docker_pygcap|

   :versions:
      
      

      ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.6-0``,  ``1.0.1-0``,  ``0.0.7-0``,  ``0.0.5-0``

      

   
   :depends matplotlib-base: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends requests: 
   :depends ruamel.yaml: ``0.16.12.*``
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

      mamba install pygcap

   and update with::

      mamba update pygcap

  To create a new environment, run::

      mamba create --name myenvname pygcap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pygcap:<tag>

   (see `pygcap/tags`_ for valid values for ``<tag>``)


.. |downloads_pygcap| image:: https://img.shields.io/conda/dn/bioconda/pygcap.svg?style=flat
   :target: https://anaconda.org/bioconda/pygcap
   :alt:   (downloads)
.. |docker_pygcap| image:: https://quay.io/repository/biocontainers/pygcap/status
   :target: https://quay.io/repository/biocontainers/pygcap
.. _`pygcap/tags`: https://quay.io/repository/biocontainers/pygcap?tab=tags


.. raw:: html

    <script>
        var package = "pygcap";
        var versions = ["1.2.6","1.2.5","1.2.3","1.2.2","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygcap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygcap/README.html