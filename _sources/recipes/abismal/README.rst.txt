:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abismal'
.. highlight: bash

abismal
=======

.. conda:recipe:: abismal
   :replaces_section_title:
   :noindex:

   abismal is a fast and memory\-efficient mapper for short bisulfite sequencing reads


   :homepage: https://github.com/smithlabcode/abismal
   :documentation: https://github.com/smithlabcode/abismal/blob/master/docs/MANUAL.md
   
   :license: GPL-3.0-only
   :recipe: /`abismal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abismal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abismal/meta.yaml>`_

   


.. conda:package:: abismal

   |downloads_abismal| |docker_abismal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.2-0</code>,  <code>3.2.0-0</code>,  <code>3.1.1-2</code>,  <code>3.1.1-1</code>,  <code>3.1.1-0</code>,  <code>3.0.0-1</code>,  <code>3.0.0-0</code>,  <code>2.0.0-0</code>,  <code>1.0.0-1</code>,  </span></summary>
      

      ``3.2.2-0``,  ``3.2.0-0``,  ``3.1.1-2``,  ``3.1.1-1``,  ``3.1.1-0``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.0.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends htslib: ``>=1.18,<1.20.0a0``
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

      mamba install abismal

   and update with::

      mamba update abismal

  To create a new environment, run::

      mamba create --name myenvname abismal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/abismal:<tag>

   (see `abismal/tags`_ for valid values for ``<tag>``)


.. |downloads_abismal| image:: https://img.shields.io/conda/dn/bioconda/abismal.svg?style=flat
   :target: https://anaconda.org/bioconda/abismal
   :alt:   (downloads)
.. |docker_abismal| image:: https://quay.io/repository/biocontainers/abismal/status
   :target: https://quay.io/repository/biocontainers/abismal
.. _`abismal/tags`: https://quay.io/repository/biocontainers/abismal?tab=tags


.. raw:: html

    <script>
        var package = "abismal";
        var versions = ["3.2.2","3.2.0","3.1.1","3.1.1","3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abismal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abismal/README.html