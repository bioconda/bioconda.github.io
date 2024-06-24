:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcov'
.. highlight: bash

bcov
====

.. conda:recipe:: bcov
   :replaces_section_title:
   :noindex:

   BCov is a software package designed for predicting protein beta\-sheet topology from amino acid sequence.

   :homepage: http://biocomp.unibo.it/savojard/bcov/index.html
   :license: file
   :recipe: /`bcov <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcov>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcov/meta.yaml>`_
   :links: biotools: :biotools:`bcov`, doi: :doi:`10.1093/bioinformatics/btt555`

   


.. conda:package:: bcov

   |downloads_bcov| |docker_bcov|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0-9</code>,  <code>1.0-8</code>,  <code>1.0-7</code>,  <code>1.0-6</code>,  <code>1.0-5</code>,  <code>1.0-4</code>,  <code>1.0-3</code>,  <code>1.0-2</code>,  <code>1.0-1</code>,  </span></summary>
      

      ``1.0-9``,  ``1.0-8``,  ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends glpk: ``>=5.0,<6.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=12.3.0``
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

      mamba install bcov

   and update with::

      mamba update bcov

  To create a new environment, run::

      mamba create --name myenvname bcov

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bcov:<tag>

   (see `bcov/tags`_ for valid values for ``<tag>``)


.. |downloads_bcov| image:: https://img.shields.io/conda/dn/bioconda/bcov.svg?style=flat
   :target: https://anaconda.org/bioconda/bcov
   :alt:   (downloads)
.. |docker_bcov| image:: https://quay.io/repository/biocontainers/bcov/status
   :target: https://quay.io/repository/biocontainers/bcov
.. _`bcov/tags`: https://quay.io/repository/biocontainers/bcov?tab=tags


.. raw:: html

    <script>
        var package = "bcov";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcov/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcov/README.html