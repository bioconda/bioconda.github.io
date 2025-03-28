:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pisad'
.. highlight: bash

pisad
=====

.. conda:recipe:: pisad
   :replaces_section_title:
   :noindex:

   pisad \- Phsaed Intraspecies Sample Anomalies Detection tool

   :homepage: https://github.com/ZhantianXu/PISAD
   :license: MIT / MIT
   :recipe: /`pisad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pisad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pisad/meta.yaml>`_

   


.. conda:package:: pisad

   |downloads_pisad| |docker_pisad|

   :versions:
      
      

      ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends boost-cpp: 
   :depends dsk: 
   :depends gperftools: 
   :depends hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends perl: 
   :depends pyfaidx: 
   :depends python: 
   :depends samtools: 
   :depends scikit-learn: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pisad

   and update with::

      mamba update pisad

  To create a new environment, run::

      mamba create --name myenvname pisad

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pisad:<tag>

   (see `pisad/tags`_ for valid values for ``<tag>``)


.. |downloads_pisad| image:: https://img.shields.io/conda/dn/bioconda/pisad.svg?style=flat
   :target: https://anaconda.org/bioconda/pisad
   :alt:   (downloads)
.. |docker_pisad| image:: https://quay.io/repository/biocontainers/pisad/status
   :target: https://quay.io/repository/biocontainers/pisad
.. _`pisad/tags`: https://quay.io/repository/biocontainers/pisad?tab=tags


.. raw:: html

    <script>
        var package = "pisad";
        var versions = ["1.1.2","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pisad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pisad/README.html