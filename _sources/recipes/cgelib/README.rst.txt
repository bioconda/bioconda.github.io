:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgelib'
.. highlight: bash

cgelib
======

.. conda:recipe:: cgelib
   :replaces_section_title:
   :noindex:

   This package will in time replace the cgecore package. The package contains classes and functions intended to be utilized across the CGE tools.

   :homepage: https://genomicepidemiology.org/
   :developer docs: https://bitbucket.org/genomicepidemiology/cgelib
   :license: APACHE / Apache-2.0
   :recipe: /`cgelib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgelib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgelib/meta.yaml>`_

   


.. conda:package:: cgelib

   |downloads_cgelib| |docker_cgelib|

   :versions:
      
      

      ``0.7.5-0``,  ``0.7.4-0``

      

   
   :depends gitpython: 
   :depends python: ``>=3.6``
   :depends python-dateutil: 
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

      mamba install cgelib

   and update with::

      mamba update cgelib

  To create a new environment, run::

      mamba create --name myenvname cgelib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cgelib:<tag>

   (see `cgelib/tags`_ for valid values for ``<tag>``)


.. |downloads_cgelib| image:: https://img.shields.io/conda/dn/bioconda/cgelib.svg?style=flat
   :target: https://anaconda.org/bioconda/cgelib
   :alt:   (downloads)
.. |docker_cgelib| image:: https://quay.io/repository/biocontainers/cgelib/status
   :target: https://quay.io/repository/biocontainers/cgelib
.. _`cgelib/tags`: https://quay.io/repository/biocontainers/cgelib?tab=tags


.. raw:: html

    <script>
        var package = "cgelib";
        var versions = ["0.7.5","0.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgelib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgelib/README.html