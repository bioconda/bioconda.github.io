:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hapcut2'
.. highlight: bash

hapcut2
=======

.. conda:recipe:: hapcut2
   :replaces_section_title:
   :noindex:

   Tools for haplotype assembly from sequence data

   :homepage: https://github.com/vibansal/HapCUT2/
   :license: BSD / BSD-2-Clause
   :recipe: /`hapcut2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hapcut2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hapcut2/meta.yaml>`_

   


.. conda:package:: hapcut2

   |downloads_hapcut2| |docker_hapcut2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.4-0</code>,  <code>1.3.3-5</code>,  <code>1.3.3-4</code>,  <code>1.3.3-3</code>,  <code>1.3.3-2</code>,  <code>1.3.3-1</code>,  <code>1.3.3-0</code>,  <code>1.3.2-1</code>,  <code>1.3.2-0</code>,  </span></summary>
      

      ``1.3.4-0``,  ``1.3.3-5``,  ``1.3.3-4``,  ``1.3.3-3``,  ``1.3.3-2``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.2-1``,  ``1.2-0``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.20,<1.22.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends pysam: 
   :depends python: ``>=3.5``
   :depends zlib: 
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

      mamba install hapcut2

   and update with::

      mamba update hapcut2

  To create a new environment, run::

      mamba create --name myenvname hapcut2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hapcut2:<tag>

   (see `hapcut2/tags`_ for valid values for ``<tag>``)


.. |downloads_hapcut2| image:: https://img.shields.io/conda/dn/bioconda/hapcut2.svg?style=flat
   :target: https://anaconda.org/bioconda/hapcut2
   :alt:   (downloads)
.. |docker_hapcut2| image:: https://quay.io/repository/biocontainers/hapcut2/status
   :target: https://quay.io/repository/biocontainers/hapcut2
.. _`hapcut2/tags`: https://quay.io/repository/biocontainers/hapcut2?tab=tags


.. raw:: html

    <script>
        var package = "hapcut2";
        var versions = ["1.3.4","1.3.3","1.3.3","1.3.3","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hapcut2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hapcut2/README.html