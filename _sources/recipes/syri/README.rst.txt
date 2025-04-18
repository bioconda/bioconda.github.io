:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'syri'
.. highlight: bash

syri
====

.. conda:recipe:: syri
   :replaces_section_title:
   :noindex:

   Synteny and rearrangement identifier between whole\-genome assemblies.

   :homepage: https://github.com/schneebergerlab/syri
   :documentation: https://schneebergerlab.github.io/syri
   
   :license: MIT / MIT
   :recipe: /`syri <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/syri>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/syri/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-019-1911-0`, biotools: :biotools:`SyRI`

   


.. conda:package:: syri

   |downloads_syri| |docker_syri|

   :versions:
      
      

      ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.3-2``,  ``1.6.3-1``,  ``1.6.3-0``,  ``1.6-1``,  ``1.6-0``,  ``1.5.4-0``,  ``1.5.3-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends longestrunsubsequence: 
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends pandas: 
   :depends psutil: 
   :depends pulp: 
   :depends pysam: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-igraph: 
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
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

      mamba install syri

   and update with::

      mamba update syri

  To create a new environment, run::

      mamba create --name myenvname syri

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/syri:<tag>

   (see `syri/tags`_ for valid values for ``<tag>``)


.. |downloads_syri| image:: https://img.shields.io/conda/dn/bioconda/syri.svg?style=flat
   :target: https://anaconda.org/bioconda/syri
   :alt:   (downloads)
.. |docker_syri| image:: https://quay.io/repository/biocontainers/syri/status
   :target: https://quay.io/repository/biocontainers/syri
.. _`syri/tags`: https://quay.io/repository/biocontainers/syri?tab=tags


.. raw:: html

    <script>
        var package = "syri";
        var versions = ["1.7.1","1.7.0","1.6.3","1.6.3","1.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/syri/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/syri/README.html