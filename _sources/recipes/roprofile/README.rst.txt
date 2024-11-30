:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'roprofile'
.. highlight: bash

roprofile
=========

.. conda:recipe:: roprofile
   :replaces_section_title:
   :noindex:

   Generation of pan\-genome profile files using Roary output.

   :homepage: https://github.com/cimendes/roProfile
   :license: GPLv3
   :recipe: /`roprofile <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/roprofile>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/roprofile/meta.yaml>`_

   


.. conda:package:: roprofile

   |downloads_roprofile| |docker_roprofile|

   :versions:
      
      

      ``1.4.5-0``

      

   
   :depends biopython: ``>=1.66``
   :depends matplotlib: ``>=1.5.2``
   :depends mpld3: ``>=0.2``
   :depends pandas: ``>=0.15.0``
   :depends python: ``2.7*``
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

      mamba install roprofile

   and update with::

      mamba update roprofile

  To create a new environment, run::

      mamba create --name myenvname roprofile

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/roprofile:<tag>

   (see `roprofile/tags`_ for valid values for ``<tag>``)


.. |downloads_roprofile| image:: https://img.shields.io/conda/dn/bioconda/roprofile.svg?style=flat
   :target: https://anaconda.org/bioconda/roprofile
   :alt:   (downloads)
.. |docker_roprofile| image:: https://quay.io/repository/biocontainers/roprofile/status
   :target: https://quay.io/repository/biocontainers/roprofile
.. _`roprofile/tags`: https://quay.io/repository/biocontainers/roprofile?tab=tags


.. raw:: html

    <script>
        var package = "roprofile";
        var versions = ["1.4.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/roprofile/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/roprofile/README.html