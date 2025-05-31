:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ezfastq'
.. highlight: bash

ezfastq
=======

.. conda:recipe:: ezfastq
   :replaces_section_title:
   :noindex:

   Organize FASTQs by sample for analysis

   :homepage: https://github.com/bioforensics/ezfastq/
   :license: BSD / BSD License
   :recipe: /`ezfastq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ezfastq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ezfastq/meta.yaml>`_

   


.. conda:package:: ezfastq

   |downloads_ezfastq| |docker_ezfastq|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1-0``

      

   
   :depends python: ``>=3.10,<3.14``
   :depends rich: 
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

      mamba install ezfastq

   and update with::

      mamba update ezfastq

  To create a new environment, run::

      mamba create --name myenvname ezfastq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ezfastq:<tag>

   (see `ezfastq/tags`_ for valid values for ``<tag>``)


.. |downloads_ezfastq| image:: https://img.shields.io/conda/dn/bioconda/ezfastq.svg?style=flat
   :target: https://anaconda.org/bioconda/ezfastq
   :alt:   (downloads)
.. |docker_ezfastq| image:: https://quay.io/repository/biocontainers/ezfastq/status
   :target: https://quay.io/repository/biocontainers/ezfastq
.. _`ezfastq/tags`: https://quay.io/repository/biocontainers/ezfastq?tab=tags


.. raw:: html

    <script>
        var package = "ezfastq";
        var versions = ["0.1.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ezfastq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ezfastq/README.html