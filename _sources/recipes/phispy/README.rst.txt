:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phispy'
.. highlight: bash

phispy
======

.. conda:recipe:: phispy
   :replaces_section_title:
   :noindex:

   Prophage finder using multiple metrics

   :homepage: https://github.com/linsalrob/PhiSpy
   :documentation: https://github.com/linsalrob/PhiSpy/blob/master/README.md
   
   :license: MIT / MIT
   :recipe: /`phispy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phispy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phispy/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.3475717`

   


.. conda:package:: phispy

   |downloads_phispy| |docker_phispy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.2.21-8</code>,  <code>4.2.21-7</code>,  <code>4.2.21-6</code>,  <code>4.2.21-5</code>,  <code>4.2.21-4</code>,  <code>4.2.21-3</code>,  <code>4.2.21-2</code>,  <code>4.2.21-1</code>,  <code>4.2.21-0</code>,  </span></summary>
      

      ``4.2.21-8``,  ``4.2.21-7``,  ``4.2.21-6``,  ``4.2.21-5``,  ``4.2.21-4``,  ``4.2.21-3``,  ``4.2.21-2``,  ``4.2.21-1``,  ``4.2.21-0``,  ``4.2.19-0``,  ``4.2.17-0``,  ``4.2.12-0``,  ``4.2.6-1``,  ``4.2.6-0``,  ``4.1.22-0``,  ``4.1.20-0``,  ``4.1.17-0``,  ``4.1.16-0``,  ``4.1.14-0``,  ``4.1.7-0``,  ``4.1.0-0``,  ``4.0.3-0``,  ``4.0.0-0``,  ``3.7.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcbio-gff: 
   :depends biopython: ``<=1.81``
   :depends hmmer: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends numpy: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-learn: 
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

      mamba install phispy

   and update with::

      mamba update phispy

  To create a new environment, run::

      mamba create --name myenvname phispy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phispy:<tag>

   (see `phispy/tags`_ for valid values for ``<tag>``)


.. |downloads_phispy| image:: https://img.shields.io/conda/dn/bioconda/phispy.svg?style=flat
   :target: https://anaconda.org/bioconda/phispy
   :alt:   (downloads)
.. |docker_phispy| image:: https://quay.io/repository/biocontainers/phispy/status
   :target: https://quay.io/repository/biocontainers/phispy
.. _`phispy/tags`: https://quay.io/repository/biocontainers/phispy?tab=tags


.. raw:: html

    <script>
        var package = "phispy";
        var versions = ["4.2.21","4.2.21","4.2.21","4.2.21","4.2.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phispy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phispy/README.html