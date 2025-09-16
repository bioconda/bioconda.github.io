:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quick-variants'
.. highlight: bash

quick-variants
==============

.. conda:recipe:: quick-variants
   :replaces_section_title:
   :noindex:

   Fast and accurate genetic variant identification

   :homepage: https://github.com/caozhichongchong/QuickVariants
   :license: MIT
   :recipe: /`quick-variants <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quick-variants>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quick-variants/meta.yaml>`_

   


.. conda:package:: quick-variants

   |downloads_quick-variants| |docker_quick-variants|

   :versions:
      
      

      ``1.2.4-0``

      

   
   :depends openjdk: ``>=7,<=21``
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

      mamba install quick-variants

   and update with::

      mamba update quick-variants

  To create a new environment, run::

      mamba create --name myenvname quick-variants

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/quick-variants:<tag>

   (see `quick-variants/tags`_ for valid values for ``<tag>``)


.. |downloads_quick-variants| image:: https://img.shields.io/conda/dn/bioconda/quick-variants.svg?style=flat
   :target: https://anaconda.org/bioconda/quick-variants
   :alt:   (downloads)
.. |docker_quick-variants| image:: https://quay.io/repository/biocontainers/quick-variants/status
   :target: https://quay.io/repository/biocontainers/quick-variants
.. _`quick-variants/tags`: https://quay.io/repository/biocontainers/quick-variants?tab=tags


.. raw:: html

    <script>
        var package = "quick-variants";
        var versions = ["1.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quick-variants/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quick-variants/README.html