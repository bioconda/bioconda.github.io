:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'medusa'
.. highlight: bash

medusa
======

.. conda:recipe:: medusa
   :replaces_section_title:
   :noindex:

   A draft genome scaffolder that uses multiple reference genomes in a graph\-based approach.

   :homepage: https://github.com/combogenomics/medusa
   :license: GPL >=3
   :recipe: /`medusa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medusa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medusa/meta.yaml>`_

   


.. conda:package:: medusa

   |downloads_medusa| |docker_medusa|

   :versions:
      
      

      ``1.6-2``,  ``1.6-1``,  ``1.6-0``

      

   
   :depends biopython: 
   :depends networkx: 
   :depends numpy: 
   :depends openjdk: ``>=8``
   :depends python: 
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

      mamba install medusa

   and update with::

      mamba update medusa

  To create a new environment, run::

      mamba create --name myenvname medusa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/medusa:<tag>

   (see `medusa/tags`_ for valid values for ``<tag>``)


.. |downloads_medusa| image:: https://img.shields.io/conda/dn/bioconda/medusa.svg?style=flat
   :target: https://anaconda.org/bioconda/medusa
   :alt:   (downloads)
.. |docker_medusa| image:: https://quay.io/repository/biocontainers/medusa/status
   :target: https://quay.io/repository/biocontainers/medusa
.. _`medusa/tags`: https://quay.io/repository/biocontainers/medusa?tab=tags


.. raw:: html

    <script>
        var package = "medusa";
        var versions = ["1.6","1.6","1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/medusa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/medusa/README.html