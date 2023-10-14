:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'microhapdb'
.. highlight: bash

microhapdb
==========

.. conda:recipe:: microhapdb
   :replaces_section_title:
   :noindex:

   Portable database of microhaplotype marker and allele frequency data.

   :homepage: https://github.com/bioforensics/MicroHapDB/
   :license: BSD / BSD License
   :recipe: /`microhapdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microhapdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microhapdb/meta.yaml>`_

   


.. conda:package:: microhapdb

   |downloads_microhapdb| |docker_microhapdb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.1-0</code>,  <code>0.10-0</code>,  <code>0.9-0</code>,  <code>0.8.2-0</code>,  <code>0.7-0</code>,  <code>0.6-0</code>,  <code>0.5-0</code>,  <code>0.4.3-0</code>,  <code>0.4.1-0</code>,  </span></summary>
      

      ``0.10.1-0``,  ``0.10-0``,  ``0.9-0``,  ``0.8.2-0``,  ``0.7-0``,  ``0.6-0``,  ``0.5-0``,  ``0.4.3-0``,  ``0.4.1-0``,  ``0.3-0``,  ``0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends pandas: ``>=1.2``
   :depends pyfaidx: ``>=0.7``
   :depends python: ``>=3.7,<3.12``
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

      mamba install microhapdb

   and update with::

      mamba update microhapdb

  To create a new environment, run::

      mamba create --name myenvname microhapdb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/microhapdb:<tag>

   (see `microhapdb/tags`_ for valid values for ``<tag>``)


.. |downloads_microhapdb| image:: https://img.shields.io/conda/dn/bioconda/microhapdb.svg?style=flat
   :target: https://anaconda.org/bioconda/microhapdb
   :alt:   (downloads)
.. |docker_microhapdb| image:: https://quay.io/repository/biocontainers/microhapdb/status
   :target: https://quay.io/repository/biocontainers/microhapdb
.. _`microhapdb/tags`: https://quay.io/repository/biocontainers/microhapdb?tab=tags


.. raw:: html

    <script>
        var package = "microhapdb";
        var versions = ["0.10.1","0.10","0.9","0.8.2","0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/microhapdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/microhapdb/README.html