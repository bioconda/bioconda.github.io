:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'variantmap'
.. highlight: bash

variantmap
==========

.. conda:recipe:: variantmap
   :replaces_section_title:
   :noindex:

   Interactive heatmap for multi\-sample structural variant analysis

   :homepage: https://github.com/cytham/variantmap
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`variantmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variantmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variantmap/meta.yaml>`_

   


.. conda:package:: variantmap

   |downloads_variantmap| |docker_variantmap|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends dash: ``>=1.17.0``
   :depends pandas: ``>=1.1.4``
   :depends pytables: ``>=3.6.1``
   :depends python: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install variantmap

   and update with::

      mamba update variantmap

  To create a new environment, run::

      mamba create --name myenvname variantmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/variantmap:<tag>

   (see `variantmap/tags`_ for valid values for ``<tag>``)


.. |downloads_variantmap| image:: https://img.shields.io/conda/dn/bioconda/variantmap.svg?style=flat
   :target: https://anaconda.org/bioconda/variantmap
   :alt:   (downloads)
.. |docker_variantmap| image:: https://quay.io/repository/biocontainers/variantmap/status
   :target: https://quay.io/repository/biocontainers/variantmap
.. _`variantmap/tags`: https://quay.io/repository/biocontainers/variantmap?tab=tags


.. raw:: html

    <script>
        var package = "variantmap";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/variantmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/variantmap/README.html