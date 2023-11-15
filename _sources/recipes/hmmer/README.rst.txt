:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmmer'
.. highlight: bash

hmmer
=====

.. conda:recipe:: hmmer
   :replaces_section_title:
   :noindex:

   Biosequence analysis using profile hidden Markov models

   :homepage: http://hmmer.org/
   :license: BSD
   :recipe: /`hmmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmmer/meta.yaml>`_

   


.. conda:package:: hmmer

   |downloads_hmmer| |docker_hmmer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4-0</code>,  <code>3.3.2-4</code>,  <code>3.3.2-3</code>,  <code>3.3.2-2</code>,  <code>3.3.2-1</code>,  <code>3.3.2-0</code>,  <code>3.3.1-0</code>,  <code>3.3-1</code>,  <code>3.3-0</code>,  </span></summary>
      

      ``3.4-0``,  ``3.3.2-4``,  ``3.3.2-3``,  ``3.3.2-2``,  ``3.3.2-1``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.3-1``,  ``3.3-0``,  ``3.2.1-2``,  ``3.2.1-1``,  ``3.2.1-0``,  ``3.2-3``,  ``3.2-2``,  ``3.2-0``,  ``3.1b2-3``,  ``3.1b2-2``,  ``3.1b2-1``,  ``3.1b2-0``,  ``3.0-4``,  ``3.0-3``,  ``3.0-2``,  ``3.0-1``,  ``3.0-0``,  ``2.3.2-8``,  ``2.3.2-7``,  ``2.3.2-6``,  ``2.3.2-5``,  ``2.3.2-4``,  ``2.3.2-3``,  ``2.3.2-2``,  ``2.3.2-1``,  ``2.3.2-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install hmmer

   and update with::

      mamba update hmmer

  To create a new environment, run::

      mamba create --name myenvname hmmer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmmer:<tag>

   (see `hmmer/tags`_ for valid values for ``<tag>``)


.. |downloads_hmmer| image:: https://img.shields.io/conda/dn/bioconda/hmmer.svg?style=flat
   :target: https://anaconda.org/bioconda/hmmer
   :alt:   (downloads)
.. |docker_hmmer| image:: https://quay.io/repository/biocontainers/hmmer/status
   :target: https://quay.io/repository/biocontainers/hmmer
.. _`hmmer/tags`: https://quay.io/repository/biocontainers/hmmer?tab=tags


.. raw:: html

    <script>
        var package = "hmmer";
        var versions = ["3.4","3.3.2","3.3.2","3.3.2","3.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmmer/README.html