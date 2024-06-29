:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bmfilter'
.. highlight: bash

bmfilter
========

.. conda:recipe:: bmfilter
   :replaces_section_title:
   :noindex:

   bmfilter is part of BMTagger aka Best Match Tagger\, for removing human reads from metagenomics datasets

   :homepage: ftp://ftp.ncbi.nlm.nih.gov/pub/agarwala/bmtagger/
   :license: Public Domain
   :recipe: /`bmfilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bmfilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bmfilter/meta.yaml>`_

   


.. conda:package:: bmfilter

   |downloads_bmfilter| |docker_bmfilter|

   :versions:
      
      

      ``3.101-5``,  ``3.101-3``,  ``3.101-2``,  ``3.101-1``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install bmfilter

   and update with::

      mamba update bmfilter

  To create a new environment, run::

      mamba create --name myenvname bmfilter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bmfilter:<tag>

   (see `bmfilter/tags`_ for valid values for ``<tag>``)


.. |downloads_bmfilter| image:: https://img.shields.io/conda/dn/bioconda/bmfilter.svg?style=flat
   :target: https://anaconda.org/bioconda/bmfilter
   :alt:   (downloads)
.. |docker_bmfilter| image:: https://quay.io/repository/biocontainers/bmfilter/status
   :target: https://quay.io/repository/biocontainers/bmfilter
.. _`bmfilter/tags`: https://quay.io/repository/biocontainers/bmfilter?tab=tags


.. raw:: html

    <script>
        var package = "bmfilter";
        var versions = ["3.101","3.101","3.101","3.101"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bmfilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bmfilter/README.html