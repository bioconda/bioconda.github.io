:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orthanq'
.. highlight: bash

orthanq
=======

.. conda:recipe:: orthanq
   :replaces_section_title:
   :noindex:

   Uncertainty aware HLA typing and general haplotype quantification

   :homepage: https://github.com/orthanq/orthanq
   :license: MIT / MIT
   :recipe: /`orthanq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthanq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthanq/meta.yaml>`_

   


.. conda:package:: orthanq

   |downloads_orthanq| |docker_orthanq|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install orthanq

   and update with::

      mamba update orthanq

  To create a new environment, run::

      mamba create --name myenvname orthanq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/orthanq:<tag>

   (see `orthanq/tags`_ for valid values for ``<tag>``)


.. |downloads_orthanq| image:: https://img.shields.io/conda/dn/bioconda/orthanq.svg?style=flat
   :target: https://anaconda.org/bioconda/orthanq
   :alt:   (downloads)
.. |docker_orthanq| image:: https://quay.io/repository/biocontainers/orthanq/status
   :target: https://quay.io/repository/biocontainers/orthanq
.. _`orthanq/tags`: https://quay.io/repository/biocontainers/orthanq?tab=tags


.. raw:: html

    <script>
        var package = "orthanq";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orthanq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orthanq/README.html