:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'myriad'
.. highlight: bash

myriad
======

.. conda:recipe:: myriad
   :replaces_section_title:
   :noindex:

   Simple distributed computing.

   :homepage: https://github.com/cjw85/myriad
   :license: MIT / MIT License
   :recipe: /`myriad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/myriad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/myriad/meta.yaml>`_

   


.. conda:package:: myriad

   |downloads_myriad| |docker_myriad|

   :versions:
      
      

      ``0.1.4-0``,  ``0.1.3-2``,  ``0.1.3-0``

      

   
   :depends python: ``>=2.7,<2.8.0a0``
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

      mamba install myriad

   and update with::

      mamba update myriad

  To create a new environment, run::

      mamba create --name myenvname myriad

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/myriad:<tag>

   (see `myriad/tags`_ for valid values for ``<tag>``)


.. |downloads_myriad| image:: https://img.shields.io/conda/dn/bioconda/myriad.svg?style=flat
   :target: https://anaconda.org/bioconda/myriad
   :alt:   (downloads)
.. |docker_myriad| image:: https://quay.io/repository/biocontainers/myriad/status
   :target: https://quay.io/repository/biocontainers/myriad
.. _`myriad/tags`: https://quay.io/repository/biocontainers/myriad?tab=tags


.. raw:: html

    <script>
        var package = "myriad";
        var versions = ["0.1.4","0.1.3","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/myriad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/myriad/README.html