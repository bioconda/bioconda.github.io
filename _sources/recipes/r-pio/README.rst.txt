:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pio'
.. highlight: bash

r-pio
=====

.. conda:recipe:: r-pio
   :replaces_section_title:
   :noindex:

   Pretty I\/O output to the console

   :homepage: https://github.com/caravagn/pio
   :documentation: https://caravagn.github.io/pio/
   
   :license: MIT / MIT
   :recipe: /`r-pio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pio/meta.yaml>`_

   pio is a package to print nice coloured outputs to the console. If you work with 
   R scripts that generate several loads or outputs\, or if you just like to organize in a tidy 
   way on\-screen outputs of your computations\, then \`pio\`\'s pretty I\/O system is the package 
   that you are looking for.



.. conda:package:: r-pio

   |downloads_r-pio| |docker_r-pio|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-crayon: 
   :depends r-knitr: 
   :depends r-markdown: 
   :depends r-roxygen2: 
   :depends r-tibble: 
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

      mamba install r-pio

   and update with::

      mamba update r-pio

  To create a new environment, run::

      mamba create --name myenvname r-pio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-pio:<tag>

   (see `r-pio/tags`_ for valid values for ``<tag>``)


.. |downloads_r-pio| image:: https://img.shields.io/conda/dn/bioconda/r-pio.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pio
   :alt:   (downloads)
.. |docker_r-pio| image:: https://quay.io/repository/biocontainers/r-pio/status
   :target: https://quay.io/repository/biocontainers/r-pio
.. _`r-pio/tags`: https://quay.io/repository/biocontainers/r-pio?tab=tags


.. raw:: html

    <script>
        var package = "r-pio";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pio/README.html