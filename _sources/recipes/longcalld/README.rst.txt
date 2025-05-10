:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longcalld'
.. highlight: bash

longcalld
=========

.. conda:recipe:: longcalld
   :replaces_section_title:
   :noindex:

   longcallD\: local\-haplotagging\-based small and structural variant calling

   :homepage: https://github.com/yangao07/longcallD
   :license: MIT / MIT
   :recipe: /`longcalld <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longcalld>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longcalld/meta.yaml>`_

   


.. conda:package:: longcalld

   |downloads_longcalld| |docker_longcalld|

   :versions:
      
      

      ``0.0.4-1``,  ``0.0.4-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcurl: ``>=8.13.0,<9.0a0``
   :depends libdeflate: ``>=1.22,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.8.1,<6.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openssl: ``>=3.5.0,<4.0a0``
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

      mamba install longcalld

   and update with::

      mamba update longcalld

  To create a new environment, run::

      mamba create --name myenvname longcalld

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/longcalld:<tag>

   (see `longcalld/tags`_ for valid values for ``<tag>``)


.. |downloads_longcalld| image:: https://img.shields.io/conda/dn/bioconda/longcalld.svg?style=flat
   :target: https://anaconda.org/bioconda/longcalld
   :alt:   (downloads)
.. |docker_longcalld| image:: https://quay.io/repository/biocontainers/longcalld/status
   :target: https://quay.io/repository/biocontainers/longcalld
.. _`longcalld/tags`: https://quay.io/repository/biocontainers/longcalld?tab=tags


.. raw:: html

    <script>
        var package = "longcalld";
        var versions = ["0.0.4","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longcalld/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longcalld/README.html