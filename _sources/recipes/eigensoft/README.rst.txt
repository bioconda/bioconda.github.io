:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eigensoft'
.. highlight: bash

eigensoft
=========

.. conda:recipe:: eigensoft
   :replaces_section_title:
   :noindex:

   The EIGENSOFT package implements methods for analzing population structure and performing stratification correction

   :homepage: https://github.com/DReichLab/EIG
   :license: Custom OSS
   :recipe: /`eigensoft <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eigensoft>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eigensoft/meta.yaml>`_
   :links: biotools: :biotools:`Eigensoft`, doi: :doi:`10.1371/journal.pgen.0020190`

   


.. conda:package:: eigensoft

   |downloads_eigensoft| |docker_eigensoft|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>8.0.0-5</code>,  <code>8.0.0-4</code>,  <code>8.0.0-3</code>,  <code>8.0.0-2</code>,  <code>8.0.0-1</code>,  <code>8.0.0-0</code>,  <code>7.2.1-5</code>,  <code>7.2.1-4</code>,  <code>7.2.1-3</code>,  </span></summary>
      

      ``8.0.0-5``,  ``8.0.0-4``,  ``8.0.0-3``,  ``8.0.0-2``,  ``8.0.0-1``,  ``8.0.0-0``,  ``7.2.1-5``,  ``7.2.1-4``,  ``7.2.1-3``,  ``7.2.1-2``,  ``7.2.1-1``,  ``7.2.1-0``,  ``6.0.1-3``,  ``6.0.1-1``,  ``6.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc: ``>=12``
   :depends openblas: 
   :depends perl: 
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

      mamba install eigensoft

   and update with::

      mamba update eigensoft

  To create a new environment, run::

      mamba create --name myenvname eigensoft

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/eigensoft:<tag>

   (see `eigensoft/tags`_ for valid values for ``<tag>``)


.. |downloads_eigensoft| image:: https://img.shields.io/conda/dn/bioconda/eigensoft.svg?style=flat
   :target: https://anaconda.org/bioconda/eigensoft
   :alt:   (downloads)
.. |docker_eigensoft| image:: https://quay.io/repository/biocontainers/eigensoft/status
   :target: https://quay.io/repository/biocontainers/eigensoft
.. _`eigensoft/tags`: https://quay.io/repository/biocontainers/eigensoft?tab=tags


.. raw:: html

    <script>
        var package = "eigensoft";
        var versions = ["8.0.0","8.0.0","8.0.0","8.0.0","8.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eigensoft/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eigensoft/README.html