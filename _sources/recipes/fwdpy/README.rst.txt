:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fwdpy'
.. highlight: bash

fwdpy
=====

.. conda:recipe:: fwdpy
   :replaces_section_title:
   :noindex:

   Forward\-time population genetic simulation in Python.

   :homepage: http://pypi.python.org/pypi/fwdpy
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`fwdpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fwdpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fwdpy/meta.yaml>`_

   


.. conda:package:: fwdpy

   |downloads_fwdpy| |docker_fwdpy|

   :versions:
      
      

      ``0.0.4pre1-0``

      

   
   :depends gsl: ``1.16*``
   :depends libsequence: 
   :depends numpy: ``>=1.10``
   :depends pandas: ``>=0.18``
   :depends python: ``2.7*``
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

      mamba install fwdpy

   and update with::

      mamba update fwdpy

  To create a new environment, run::

      mamba create --name myenvname fwdpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fwdpy:<tag>

   (see `fwdpy/tags`_ for valid values for ``<tag>``)


.. |downloads_fwdpy| image:: https://img.shields.io/conda/dn/bioconda/fwdpy.svg?style=flat
   :target: https://anaconda.org/bioconda/fwdpy
   :alt:   (downloads)
.. |docker_fwdpy| image:: https://quay.io/repository/biocontainers/fwdpy/status
   :target: https://quay.io/repository/biocontainers/fwdpy
.. _`fwdpy/tags`: https://quay.io/repository/biocontainers/fwdpy?tab=tags


.. raw:: html

    <script>
        var package = "fwdpy";
        var versions = ["0.0.4pre1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fwdpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fwdpy/README.html