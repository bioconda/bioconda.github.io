:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atol-bpa-datamapper'
.. highlight: bash

atol-bpa-datamapper
===================

.. conda:recipe:: atol-bpa-datamapper
   :replaces_section_title:
   :noindex:

   Map data from the BPA data portal for AToL\'s Genome Engine.

   :homepage: https://github.com/TomHarrop/atol-bpa-datamapper
   :license: GPL-3.0-or-later
   :recipe: /`atol-bpa-datamapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atol-bpa-datamapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atol-bpa-datamapper/meta.yaml>`_

   


.. conda:package:: atol-bpa-datamapper

   |downloads_atol-bpa-datamapper| |docker_atol-bpa-datamapper|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends ckanapi: ``>=4.8``
   :depends jsonlines: ``>=4.0.0``
   :depends python: ``>=3.12,<3.13``
   :depends scikit-bio: ``>=0.6.3``
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

      mamba install atol-bpa-datamapper

   and update with::

      mamba update atol-bpa-datamapper

  To create a new environment, run::

      mamba create --name myenvname atol-bpa-datamapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/atol-bpa-datamapper:<tag>

   (see `atol-bpa-datamapper/tags`_ for valid values for ``<tag>``)


.. |downloads_atol-bpa-datamapper| image:: https://img.shields.io/conda/dn/bioconda/atol-bpa-datamapper.svg?style=flat
   :target: https://anaconda.org/bioconda/atol-bpa-datamapper
   :alt:   (downloads)
.. |docker_atol-bpa-datamapper| image:: https://quay.io/repository/biocontainers/atol-bpa-datamapper/status
   :target: https://quay.io/repository/biocontainers/atol-bpa-datamapper
.. _`atol-bpa-datamapper/tags`: https://quay.io/repository/biocontainers/atol-bpa-datamapper?tab=tags


.. raw:: html

    <script>
        var package = "atol-bpa-datamapper";
        var versions = ["0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atol-bpa-datamapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atol-bpa-datamapper/README.html