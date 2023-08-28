:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastahack'
.. highlight: bash

fastahack
=========

.. conda:recipe:: fastahack
   :replaces_section_title:
   :noindex:

   fastahack \-\-\- \*fast\* FASTA file indexing\, subsequence and sequence extraction

   :homepage: https://github.com/ekg/fastahack
   :license: MIT
   :recipe: /`fastahack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastahack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastahack/meta.yaml>`_

   


.. conda:package:: fastahack

   |downloads_fastahack| |docker_fastahack|

   :versions:
      
      

      ``2016.07.2-6``,  ``2016.07.2-5``,  ``2016.07.2-4``,  ``2016.07.2-3``,  ``2016.07.2-2``,  ``2016.07.2-1``,  ``2016.07.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install fastahack

   and update with::

      mamba update fastahack

  To create a new environment, run::

      mamba create --name myenvname fastahack

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastahack:<tag>

   (see `fastahack/tags`_ for valid values for ``<tag>``)


.. |downloads_fastahack| image:: https://img.shields.io/conda/dn/bioconda/fastahack.svg?style=flat
   :target: https://anaconda.org/bioconda/fastahack
   :alt:   (downloads)
.. |docker_fastahack| image:: https://quay.io/repository/biocontainers/fastahack/status
   :target: https://quay.io/repository/biocontainers/fastahack
.. _`fastahack/tags`: https://quay.io/repository/biocontainers/fastahack?tab=tags


.. raw:: html

    <script>
        var package = "fastahack";
        var versions = ["2016.07.2","2016.07.2","2016.07.2","2016.07.2","2016.07.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastahack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastahack/README.html