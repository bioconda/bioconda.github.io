:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fgsv'
.. highlight: bash

fgsv
====

.. conda:recipe:: fgsv
   :replaces_section_title:
   :noindex:

   Tools to find evidence for structural variation.

   :homepage: https://github.com/fulcrumgenomics/fgsv
   :license: MIT
   :recipe: /`fgsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgsv/meta.yaml>`_

   


.. conda:package:: fgsv

   |downloads_fgsv| |docker_fgsv|

   :versions:
      
      

      ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends openjdk: ``>=8``
   :depends python: 
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

      mamba install fgsv

   and update with::

      mamba update fgsv

  To create a new environment, run::

      mamba create --name myenvname fgsv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fgsv:<tag>

   (see `fgsv/tags`_ for valid values for ``<tag>``)


.. |downloads_fgsv| image:: https://img.shields.io/conda/dn/bioconda/fgsv.svg?style=flat
   :target: https://anaconda.org/bioconda/fgsv
   :alt:   (downloads)
.. |docker_fgsv| image:: https://quay.io/repository/biocontainers/fgsv/status
   :target: https://quay.io/repository/biocontainers/fgsv
.. _`fgsv/tags`: https://quay.io/repository/biocontainers/fgsv?tab=tags


.. raw:: html

    <script>
        var package = "fgsv";
        var versions = ["0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fgsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fgsv/README.html