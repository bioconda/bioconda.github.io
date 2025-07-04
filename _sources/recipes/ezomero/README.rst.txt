:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ezomero'
.. highlight: bash

ezomero
=======

.. conda:recipe:: ezomero
   :replaces_section_title:
   :noindex:

   A module with convenience functions for writing Python code that interacts with OMERO.

   :homepage: https://github.com/TheJacksonLaboratory/ezomero
   :license: GPL-2.0-only
   :recipe: /`ezomero <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ezomero>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ezomero/meta.yaml>`_

   


.. conda:package:: ezomero

   |downloads_ezomero| |docker_ezomero|

   :versions:
      
      

      ``3.2.1-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.1.0-0``

      

   
   :depends numpy: ``>=1.22,<2.0``
   :depends omero-py: ``>=5.13.0,<5.20.0``
   :depends python: ``>=3.8``
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

      mamba install ezomero

   and update with::

      mamba update ezomero

  To create a new environment, run::

      mamba create --name myenvname ezomero

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ezomero:<tag>

   (see `ezomero/tags`_ for valid values for ``<tag>``)


.. |downloads_ezomero| image:: https://img.shields.io/conda/dn/bioconda/ezomero.svg?style=flat
   :target: https://anaconda.org/bioconda/ezomero
   :alt:   (downloads)
.. |docker_ezomero| image:: https://quay.io/repository/biocontainers/ezomero/status
   :target: https://quay.io/repository/biocontainers/ezomero
.. _`ezomero/tags`: https://quay.io/repository/biocontainers/ezomero?tab=tags


.. raw:: html

    <script>
        var package = "ezomero";
        var versions = ["3.2.1","3.1.1","3.1.0","3.0.1","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ezomero/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ezomero/README.html