:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perbase'
.. highlight: bash

perbase
=======

.. conda:recipe:: perbase
   :replaces_section_title:
   :noindex:

   Per\-base metrics on BAM\/CRAM files.

   :homepage: https://github.com/sstadick/perbase
   :license: MIT / MIT
   :recipe: /`perbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perbase/meta.yaml>`_

   


.. conda:package:: perbase

   |downloads_perbase| |docker_perbase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.1-0</code>,  <code>0.10.0-0</code>,  <code>0.9.0-2</code>,  <code>0.9.0-1</code>,  <code>0.9.0-0</code>,  <code>0.8.5-3</code>,  <code>0.8.5-2</code>,  <code>0.8.5-1</code>,  <code>0.8.5-0</code>,  </span></summary>
      

      ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.5-3``,  ``0.8.5-2``,  ``0.8.5-1``,  ``0.8.5-0``,  ``0.8.3-1``,  ``0.8.3-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.6.3-1``,  ``0.6.3-0``,  ``0.4.2-0``,  ``0.4.0-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.2.3-0``,  ``0.2.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends curl: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openssl: ``>=3.4.0,<4.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :depends zlib: 
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

      mamba install perbase

   and update with::

      mamba update perbase

  To create a new environment, run::

      mamba create --name myenvname perbase

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perbase:<tag>

   (see `perbase/tags`_ for valid values for ``<tag>``)


.. |downloads_perbase| image:: https://img.shields.io/conda/dn/bioconda/perbase.svg?style=flat
   :target: https://anaconda.org/bioconda/perbase
   :alt:   (downloads)
.. |docker_perbase| image:: https://quay.io/repository/biocontainers/perbase/status
   :target: https://quay.io/repository/biocontainers/perbase
.. _`perbase/tags`: https://quay.io/repository/biocontainers/perbase?tab=tags


.. raw:: html

    <script>
        var package = "perbase";
        var versions = ["0.10.1","0.10.0","0.9.0","0.9.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perbase/README.html