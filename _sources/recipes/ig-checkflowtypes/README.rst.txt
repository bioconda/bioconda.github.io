:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ig-checkflowtypes'
.. highlight: bash

ig-checkflowtypes
=================

.. conda:recipe:: ig-checkflowtypes
   :replaces_section_title:
   :noindex:

   quick flow\-related datatype for galaxy checks

   :homepage: https://github.com/ImmPortDB/ig-checkflowtypes
   :license: BSD / BSD License
   :recipe: /`ig-checkflowtypes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ig-checkflowtypes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ig-checkflowtypes/meta.yaml>`_

   


.. conda:package:: ig-checkflowtypes

   |downloads_ig-checkflowtypes| |docker_ig-checkflowtypes|

   :versions:
      
      

      ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-flowcore: 
   :depends libgcc-ng: ``>=7.3.0``
   :depends libgfortran-ng: ``>=7,<8.0a0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends r-base: ``>=3.6,<3.7.0a0``
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

      mamba install ig-checkflowtypes

   and update with::

      mamba update ig-checkflowtypes

  To create a new environment, run::

      mamba create --name myenvname ig-checkflowtypes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ig-checkflowtypes:<tag>

   (see `ig-checkflowtypes/tags`_ for valid values for ``<tag>``)


.. |downloads_ig-checkflowtypes| image:: https://img.shields.io/conda/dn/bioconda/ig-checkflowtypes.svg?style=flat
   :target: https://anaconda.org/bioconda/ig-checkflowtypes
   :alt:   (downloads)
.. |docker_ig-checkflowtypes| image:: https://quay.io/repository/biocontainers/ig-checkflowtypes/status
   :target: https://quay.io/repository/biocontainers/ig-checkflowtypes
.. _`ig-checkflowtypes/tags`: https://quay.io/repository/biocontainers/ig-checkflowtypes?tab=tags


.. raw:: html

    <script>
        var package = "ig-checkflowtypes";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ig-checkflowtypes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ig-checkflowtypes/README.html