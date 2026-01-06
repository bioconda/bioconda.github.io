:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dartunifrac'
.. highlight: bash

dartunifrac
===========

.. conda:recipe:: dartunifrac
   :replaces_section_title:
   :noindex:

   DartUniFrac is an ultra\-fast UniFrac algorithm that scales to millions of samples. It was designed based on optimal balanced parenthesis and Weighted MinHash sketching.

   :homepage: https://github.com/jianshu93/DartUniFrac
   :documentation: https://github.com/jianshu93/DartUniFrac/blob/v0.2.9/README.md
   
   :license: MIT / MIT
   :recipe: /`dartunifrac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dartunifrac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dartunifrac/meta.yaml>`_

   


.. conda:package:: dartunifrac

   |downloads_dartunifrac| |docker_dartunifrac|

   :versions:
      
      

      ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends openssl: ``>=3.6.0,<4.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install dartunifrac

   and update with::

      mamba update dartunifrac

  To create a new environment, run::

      mamba create --name myenvname dartunifrac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dartunifrac:<tag>

   (see `dartunifrac/tags`_ for valid values for ``<tag>``)


.. |downloads_dartunifrac| image:: https://img.shields.io/conda/dn/bioconda/dartunifrac.svg?style=flat
   :target: https://anaconda.org/bioconda/dartunifrac
   :alt:   (downloads)
.. |docker_dartunifrac| image:: https://quay.io/repository/biocontainers/dartunifrac/status
   :target: https://quay.io/repository/biocontainers/dartunifrac
.. _`dartunifrac/tags`: https://quay.io/repository/biocontainers/dartunifrac?tab=tags


.. raw:: html

    <script>
        var package = "dartunifrac";
        var versions = ["0.2.9","0.2.8","0.2.7","0.2.6","0.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dartunifrac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dartunifrac/README.html