:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ffq'
.. highlight: bash

ffq
===

.. conda:recipe:: ffq
   :replaces_section_title:
   :noindex:

   A command line tool that makes it easier to find sequencing data from the SRA \/ GEO \/ ENA.

   :homepage: https://github.com/pachterlab/ffq
   :license: MIT / MIT
   :recipe: /`ffq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ffq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ffq/meta.yaml>`_

   


.. conda:package:: ffq

   |downloads_ffq| |docker_ffq|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.1-0``,  ``0.1.2-0``,  ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends beautifulsoup4: ``>=4.8.2``
   :depends frozendict: 
   :depends lxml: ``>=4.5.0``
   :depends python: ``>=3.6``
   :depends requests: ``>=2.23.0``
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

      mamba install ffq

   and update with::

      mamba update ffq

  To create a new environment, run::

      mamba create --name myenvname ffq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ffq:<tag>

   (see `ffq/tags`_ for valid values for ``<tag>``)


.. |downloads_ffq| image:: https://img.shields.io/conda/dn/bioconda/ffq.svg?style=flat
   :target: https://anaconda.org/bioconda/ffq
   :alt:   (downloads)
.. |docker_ffq| image:: https://quay.io/repository/biocontainers/ffq/status
   :target: https://quay.io/repository/biocontainers/ffq
.. _`ffq/tags`: https://quay.io/repository/biocontainers/ffq?tab=tags


.. raw:: html

    <script>
        var package = "ffq";
        var versions = ["0.3.0","0.2.1","0.1.2","0.0.4","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ffq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ffq/README.html