:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-easylift'
.. highlight: bash

r-easylift
==========

.. conda:recipe:: r-easylift
   :replaces_section_title:
   :noindex:

   A convenience package for converting between popular mouse \& human builds.

   :homepage: https://github.com/caleblareau/easyLift
   :license: MIT / MIT
   :recipe: /`r-easylift <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-easylift>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-easylift/meta.yaml>`_

   


.. conda:package:: r-easylift

   |downloads_r-easylift| |docker_r-easylift|

   :versions:
      
      

      ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends bioconductor-genomicranges: 
   :depends bioconductor-iranges: 
   :depends bioconductor-rtracklayer: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install r-easylift

   and update with::

      mamba update r-easylift

  To create a new environment, run::

      mamba create --name myenvname r-easylift

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-easylift:<tag>

   (see `r-easylift/tags`_ for valid values for ``<tag>``)


.. |downloads_r-easylift| image:: https://img.shields.io/conda/dn/bioconda/r-easylift.svg?style=flat
   :target: https://anaconda.org/bioconda/r-easylift
   :alt:   (downloads)
.. |docker_r-easylift| image:: https://quay.io/repository/biocontainers/r-easylift/status
   :target: https://quay.io/repository/biocontainers/r-easylift
.. _`r-easylift/tags`: https://quay.io/repository/biocontainers/r-easylift?tab=tags


.. raw:: html

    <script>
        var package = "r-easylift";
        var versions = ["0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-easylift/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-easylift/README.html