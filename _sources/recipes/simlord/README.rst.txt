:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simlord'
.. highlight: bash

simlord
=======

.. conda:recipe:: simlord
   :replaces_section_title:
   :noindex:

   SimLoRD is a read simulator for long reads from third generation sequencing. Currently\, it supports the Pacific Biosciences SMRT error model.

   :homepage: https://bitbucket.org/genomeinformatics/simlord/
   :license: MIT License
   :recipe: /`simlord <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simlord>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simlord/meta.yaml>`_

   


.. conda:package:: simlord

   |downloads_simlord| |docker_simlord|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.4-3</code>,  <code>1.0.4-2</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-3</code>,  <code>1.0.3-2</code>,  <code>1.0.2-2</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  </span></summary>
      

      ``1.0.4-3``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.2-2``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.7.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends dinopy: 
   :depends libgcc-ng: ``>=12``
   :depends numpy: 
   :depends pysam: ``>=0.8.4``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
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

      mamba install simlord

   and update with::

      mamba update simlord

  To create a new environment, run::

      mamba create --name myenvname simlord

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/simlord:<tag>

   (see `simlord/tags`_ for valid values for ``<tag>``)


.. |downloads_simlord| image:: https://img.shields.io/conda/dn/bioconda/simlord.svg?style=flat
   :target: https://anaconda.org/bioconda/simlord
   :alt:   (downloads)
.. |docker_simlord| image:: https://quay.io/repository/biocontainers/simlord/status
   :target: https://quay.io/repository/biocontainers/simlord
.. _`simlord/tags`: https://quay.io/repository/biocontainers/simlord?tab=tags


.. raw:: html

    <script>
        var package = "simlord";
        var versions = ["1.0.4","1.0.4","1.0.4","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simlord/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simlord/README.html