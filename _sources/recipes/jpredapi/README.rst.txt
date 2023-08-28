:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jpredapi'
.. highlight: bash

jpredapi
========

.. conda:recipe:: jpredapi
   :replaces_section_title:
   :noindex:

   Python library for submitting jobs to JPRED \- A Protein Secondary Structure Prediction Server

   :homepage: https://github.com/MoseleyBioinformaticsLab/jpredapi
   :license: MIT / MIT
   :recipe: /`jpredapi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jpredapi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jpredapi/meta.yaml>`_

   


.. conda:package:: jpredapi

   |downloads_jpredapi| |docker_jpredapi|

   :versions:
      
      

      ``1.5.6-0``

      

   
   :depends docopt: ``>=0.6.2``
   :depends python: 
   :depends requests: ``>=2.13.0``
   :depends retrying: ``>=1.3.3``
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

      mamba install jpredapi

   and update with::

      mamba update jpredapi

  To create a new environment, run::

      mamba create --name myenvname jpredapi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jpredapi:<tag>

   (see `jpredapi/tags`_ for valid values for ``<tag>``)


.. |downloads_jpredapi| image:: https://img.shields.io/conda/dn/bioconda/jpredapi.svg?style=flat
   :target: https://anaconda.org/bioconda/jpredapi
   :alt:   (downloads)
.. |docker_jpredapi| image:: https://quay.io/repository/biocontainers/jpredapi/status
   :target: https://quay.io/repository/biocontainers/jpredapi
.. _`jpredapi/tags`: https://quay.io/repository/biocontainers/jpredapi?tab=tags


.. raw:: html

    <script>
        var package = "jpredapi";
        var versions = ["1.5.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jpredapi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jpredapi/README.html