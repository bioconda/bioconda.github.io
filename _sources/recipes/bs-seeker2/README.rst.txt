:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bs-seeker2'
.. highlight: bash

bs-seeker2
==========

.. conda:recipe:: bs-seeker2
   :replaces_section_title:
   :noindex:

   BS Seeker 2 is a seamless and versatile pipeline for accurately and fast mapping the bisulfite\-treated short reads.

   :homepage: http://pellegrini.mcdb.ucla.edu/BS_Seeker2/
   :license: MIT
   :recipe: /`bs-seeker2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bs-seeker2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bs-seeker2/meta.yaml>`_

   


.. conda:package:: bs-seeker2

   |downloads_bs-seeker2| |docker_bs-seeker2|

   :versions:
      
      

      ``2.1.7-1``,  ``2.1.7-0``,  ``2.1.0-1``,  ``2.1.0-0``

      

   
   :depends bowtie2: 
   :depends pysam: 
   :depends python: ``<3``
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

      mamba install bs-seeker2

   and update with::

      mamba update bs-seeker2

  To create a new environment, run::

      mamba create --name myenvname bs-seeker2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bs-seeker2:<tag>

   (see `bs-seeker2/tags`_ for valid values for ``<tag>``)


.. |downloads_bs-seeker2| image:: https://img.shields.io/conda/dn/bioconda/bs-seeker2.svg?style=flat
   :target: https://anaconda.org/bioconda/bs-seeker2
   :alt:   (downloads)
.. |docker_bs-seeker2| image:: https://quay.io/repository/biocontainers/bs-seeker2/status
   :target: https://quay.io/repository/biocontainers/bs-seeker2
.. _`bs-seeker2/tags`: https://quay.io/repository/biocontainers/bs-seeker2?tab=tags


.. raw:: html

    <script>
        var package = "bs-seeker2";
        var versions = ["2.1.7","2.1.7","2.1.0","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bs-seeker2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bs-seeker2/README.html