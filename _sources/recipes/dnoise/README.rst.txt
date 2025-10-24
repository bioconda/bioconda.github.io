:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnoise'
.. highlight: bash

dnoise
======

.. conda:recipe:: dnoise
   :replaces_section_title:
   :noindex:

   Denoise sequence data sets from Illumina using distance corrected according to the entropy of each codon position

   :homepage: https://github.com/adriantich/DnoisE
   :license: GPL / GPL-3.0-only
   :recipe: /`dnoise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnoise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnoise/meta.yaml>`_

   


.. conda:package:: dnoise

   |downloads_dnoise| |docker_dnoise|

   :versions:
      
      

      ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``

      

   
   :depends numpy: ``>=1.21``
   :depends pandas: ``2.0.*``
   :depends python: ``>=3.8``
   :depends python-levenshtein: ``0.21.*``
   :depends tqdm: 
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

      mamba install dnoise

   and update with::

      mamba update dnoise

  To create a new environment, run::

      mamba create --name myenvname dnoise

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dnoise:<tag>

   (see `dnoise/tags`_ for valid values for ``<tag>``)


.. |downloads_dnoise| image:: https://img.shields.io/conda/dn/bioconda/dnoise.svg?style=flat
   :target: https://anaconda.org/bioconda/dnoise
   :alt:   (downloads)
.. |docker_dnoise| image:: https://quay.io/repository/biocontainers/dnoise/status
   :target: https://quay.io/repository/biocontainers/dnoise
.. _`dnoise/tags`: https://quay.io/repository/biocontainers/dnoise?tab=tags


.. raw:: html

    <script>
        var package = "dnoise";
        var versions = ["1.4.2","1.4.1","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnoise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnoise/README.html