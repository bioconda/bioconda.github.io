:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cufflinks'
.. highlight: bash

cufflinks
=========

.. conda:recipe:: cufflinks
   :replaces_section_title:
   :noindex:

   Transcriptome assembly and differential expression analysis for RNA\-Seq.

   :homepage: http://cole-trapnell-lab.github.io/cufflinks/
   :license: Boost Software License
   :recipe: /`cufflinks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cufflinks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cufflinks/meta.yaml>`_
   :links: biotools: :biotools:`cufflinks`

   


.. conda:package:: cufflinks

   |downloads_cufflinks| |docker_cufflinks|

   :versions:
      
      

      ``2.2.1-2``,  ``2.2.1-1``,  ``2.2.1-0``

      

   
   :depends python: ``>=2.7,<2.8.0a0``
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

      mamba install cufflinks

   and update with::

      mamba update cufflinks

  To create a new environment, run::

      mamba create --name myenvname cufflinks

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cufflinks:<tag>

   (see `cufflinks/tags`_ for valid values for ``<tag>``)


.. |downloads_cufflinks| image:: https://img.shields.io/conda/dn/bioconda/cufflinks.svg?style=flat
   :target: https://anaconda.org/bioconda/cufflinks
   :alt:   (downloads)
.. |docker_cufflinks| image:: https://quay.io/repository/biocontainers/cufflinks/status
   :target: https://quay.io/repository/biocontainers/cufflinks
.. _`cufflinks/tags`: https://quay.io/repository/biocontainers/cufflinks?tab=tags


.. raw:: html

    <script>
        var package = "cufflinks";
        var versions = ["2.2.1","2.2.1","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cufflinks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cufflinks/README.html