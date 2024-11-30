:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nvc'
.. highlight: bash

nvc
===

.. conda:recipe:: nvc
   :replaces_section_title:
   :noindex:

   The Naive Variant Caller

   :homepage: https://github.com/blankenberg/nvc
   :license: GPL2 / GNU General Public License v2 (GPLv2)
   :recipe: /`nvc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nvc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nvc/meta.yaml>`_

   


.. conda:package:: nvc

   |downloads_nvc| |docker_nvc|

   :versions:
      
      

      ``0.0.4-2``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``

      

   
   :depends numpy: 
   :depends pybamparser: ``0.0.3``
   :depends pybamtools: ``0.0.4``
   :depends python: ``<3``
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

      mamba install nvc

   and update with::

      mamba update nvc

  To create a new environment, run::

      mamba create --name myenvname nvc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nvc:<tag>

   (see `nvc/tags`_ for valid values for ``<tag>``)


.. |downloads_nvc| image:: https://img.shields.io/conda/dn/bioconda/nvc.svg?style=flat
   :target: https://anaconda.org/bioconda/nvc
   :alt:   (downloads)
.. |docker_nvc| image:: https://quay.io/repository/biocontainers/nvc/status
   :target: https://quay.io/repository/biocontainers/nvc
.. _`nvc/tags`: https://quay.io/repository/biocontainers/nvc?tab=tags


.. raw:: html

    <script>
        var package = "nvc";
        var versions = ["0.0.4","0.0.4","0.0.4","0.0.3","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nvc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nvc/README.html