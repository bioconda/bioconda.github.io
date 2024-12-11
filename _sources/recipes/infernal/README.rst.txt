:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'infernal'
.. highlight: bash

infernal
========

.. conda:recipe:: infernal
   :replaces_section_title:
   :noindex:

   Infernal is for searching DNA sequence databases for RNA structure and sequence similarities.

   :homepage: http://eddylab.org/infernal
   :documentation: http://eddylab.org/infernal/Userguide.pdf
   
   :developer docs: https://github.com/EddyRivasLab/infernal
   :license: BSD / BSD-3-Clause
   :recipe: /`infernal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/infernal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/infernal/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btt509`, biotools: :biotools:`infernal`

   Infernal \(INFERence of RNA ALignment\) is for searching DNA sequence databases for RNA structure and sequence similarities.


.. conda:package:: infernal

   |downloads_infernal| |docker_infernal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.5-4</code>,  <code>1.1.5-3</code>,  <code>1.1.5-2</code>,  <code>1.1.5-1</code>,  <code>1.1.5-0</code>,  <code>1.1.4-4</code>,  <code>1.1.4-3</code>,  <code>1.1.4-2</code>,  <code>1.1.4-1</code>,  </span></summary>
      

      ``1.1.5-4``,  ``1.1.5-3``,  ``1.1.5-2``,  ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.4-4``,  ``1.1.4-3``,  ``1.1.4-2``,  ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends llvm-openmp: ``>=18.1.8``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install infernal

   and update with::

      mamba update infernal

  To create a new environment, run::

      mamba create --name myenvname infernal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/infernal:<tag>

   (see `infernal/tags`_ for valid values for ``<tag>``)


.. |downloads_infernal| image:: https://img.shields.io/conda/dn/bioconda/infernal.svg?style=flat
   :target: https://anaconda.org/bioconda/infernal
   :alt:   (downloads)
.. |docker_infernal| image:: https://quay.io/repository/biocontainers/infernal/status
   :target: https://quay.io/repository/biocontainers/infernal
.. _`infernal/tags`: https://quay.io/repository/biocontainers/infernal?tab=tags


.. raw:: html

    <script>
        var package = "infernal";
        var versions = ["1.1.5","1.1.5","1.1.5","1.1.5","1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/infernal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/infernal/README.html