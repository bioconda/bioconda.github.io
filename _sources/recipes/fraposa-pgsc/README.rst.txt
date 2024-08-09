:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fraposa-pgsc'
.. highlight: bash

fraposa-pgsc
============

.. conda:recipe:: fraposa-pgsc
   :replaces_section_title:
   :noindex:

   Tools to perform ancestry projection to a reference dataset within the calculator pipeline \(pgsc\_calc\)

   :homepage: https://github.com/PGScatalog/fraposa_pgsc
   :license: MIT
   :recipe: /`fraposa-pgsc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fraposa-pgsc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fraposa-pgsc/meta.yaml>`_

   


.. conda:package:: fraposa-pgsc

   |downloads_fraposa-pgsc| |docker_fraposa-pgsc|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.1-0``

      

   
   :depends matplotlib-base: ``>=3.7.1,<4.0.0``
   :depends numpy: ``>=1.24.2,<2.0.0``
   :depends pandas: ``>=1.5.3,<2.0.0``
   :depends pyplink: ``>=1.3.5,<2.0.0``
   :depends python: ``>=3.10.0,<4.0.0``
   :depends scikit-learn: ``>=1.2.1,<2.0.0``
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

      mamba install fraposa-pgsc

   and update with::

      mamba update fraposa-pgsc

  To create a new environment, run::

      mamba create --name myenvname fraposa-pgsc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fraposa-pgsc:<tag>

   (see `fraposa-pgsc/tags`_ for valid values for ``<tag>``)


.. |downloads_fraposa-pgsc| image:: https://img.shields.io/conda/dn/bioconda/fraposa-pgsc.svg?style=flat
   :target: https://anaconda.org/bioconda/fraposa-pgsc
   :alt:   (downloads)
.. |docker_fraposa-pgsc| image:: https://quay.io/repository/biocontainers/fraposa-pgsc/status
   :target: https://quay.io/repository/biocontainers/fraposa-pgsc
.. _`fraposa-pgsc/tags`: https://quay.io/repository/biocontainers/fraposa-pgsc?tab=tags


.. raw:: html

    <script>
        var package = "fraposa-pgsc";
        var versions = ["1.0.2","1.0.1","1.0.0","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fraposa-pgsc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fraposa-pgsc/README.html