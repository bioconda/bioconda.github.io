:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gqt'
.. highlight: bash

gqt
===

.. conda:recipe:: gqt
   :replaces_section_title:
   :noindex:

   GQT is a genotype query interface.

   :homepage: https://github.com/ryanlayer/gqt
   :license: MIT
   :recipe: /`gqt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gqt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gqt/meta.yaml>`_

   


.. conda:package:: gqt

   |downloads_gqt| |docker_gqt|

   :versions:
      
      

      ``1.1.3-4``,  ``1.1.3-3``,  ``1.1.3-2``,  ``1.1.3-1``,  ``1.1.3-0``

      

   
   :depends htslib: ``>=1.9,<1.10.0a0``
   :depends sqlite: ``>=3.26.0,<4.0a0``
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

      mamba install gqt

   and update with::

      mamba update gqt

  To create a new environment, run::

      mamba create --name myenvname gqt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gqt:<tag>

   (see `gqt/tags`_ for valid values for ``<tag>``)


.. |downloads_gqt| image:: https://img.shields.io/conda/dn/bioconda/gqt.svg?style=flat
   :target: https://anaconda.org/bioconda/gqt
   :alt:   (downloads)
.. |docker_gqt| image:: https://quay.io/repository/biocontainers/gqt/status
   :target: https://quay.io/repository/biocontainers/gqt
.. _`gqt/tags`: https://quay.io/repository/biocontainers/gqt?tab=tags


.. raw:: html

    <script>
        var package = "gqt";
        var versions = ["1.1.3","1.1.3","1.1.3","1.1.3","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gqt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gqt/README.html