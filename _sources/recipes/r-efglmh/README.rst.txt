:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-efglmh'
.. highlight: bash

r-efglmh
========

.. conda:recipe:: r-efglmh
   :replaces_section_title:
   :noindex:

   Functions For Working With Microhaps for EFGL

   :homepage: https://github.com/delomast/EFGLmh
   :license: MIT
   :recipe: /`r-efglmh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-efglmh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-efglmh/meta.yaml>`_

   Written to work with microhaps and SNPs \(which are just short microhaps\). 
   More generally\, will function with codominant\, diploid genotypes.
   Uses \"Progeny\-style\" \(and FishGen\-style\) inputs. 
   Performs basic manipulations\, data summaries\, and exporting data in
   formats for other packages\/programs.



.. conda:package:: r-efglmh

   |downloads_r-efglmh| |docker_r-efglmh|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-dplyr: 
   :depends r-readr: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install r-efglmh

   and update with::

      mamba update r-efglmh

  To create a new environment, run::

      mamba create --name myenvname r-efglmh

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-efglmh:<tag>

   (see `r-efglmh/tags`_ for valid values for ``<tag>``)


.. |downloads_r-efglmh| image:: https://img.shields.io/conda/dn/bioconda/r-efglmh.svg?style=flat
   :target: https://anaconda.org/bioconda/r-efglmh
   :alt:   (downloads)
.. |docker_r-efglmh| image:: https://quay.io/repository/biocontainers/r-efglmh/status
   :target: https://quay.io/repository/biocontainers/r-efglmh
.. _`r-efglmh/tags`: https://quay.io/repository/biocontainers/r-efglmh?tab=tags


.. raw:: html

    <script>
        var package = "r-efglmh";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-efglmh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-efglmh/README.html