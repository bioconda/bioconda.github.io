:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fmlrc2'
.. highlight: bash

fmlrc2
======

.. conda:recipe:: fmlrc2
   :replaces_section_title:
   :noindex:

   A rust implementation of fmlrc with faster run times.

   :homepage: https://github.com/HudsonAlpha/fmlrc2
   :documentation: https://github.com/HudsonAlpha/fmlrc2/blob/v0.1.8/README.md
   
   :license: MIT / MIT OR Apache-2.0
   :recipe: /`fmlrc2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fmlrc2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fmlrc2/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-018-2051-3`

   


.. conda:package:: fmlrc2

   |downloads_fmlrc2| |docker_fmlrc2|

   :versions:
      
      

      ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-2``,  ``0.1.5-1``,  ``0.1.5-0``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc: ``>=13``
   :depends libopenblas: ``>=0.3.30,<1.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openssl: ``>=3.5.1,<4.0a0``
   :depends starcode: 
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

      mamba install fmlrc2

   and update with::

      mamba update fmlrc2

  To create a new environment, run::

      mamba create --name myenvname fmlrc2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fmlrc2:<tag>

   (see `fmlrc2/tags`_ for valid values for ``<tag>``)


.. |downloads_fmlrc2| image:: https://img.shields.io/conda/dn/bioconda/fmlrc2.svg?style=flat
   :target: https://anaconda.org/bioconda/fmlrc2
   :alt:   (downloads)
.. |docker_fmlrc2| image:: https://quay.io/repository/biocontainers/fmlrc2/status
   :target: https://quay.io/repository/biocontainers/fmlrc2
.. _`fmlrc2/tags`: https://quay.io/repository/biocontainers/fmlrc2?tab=tags


.. raw:: html

    <script>
        var package = "fmlrc2";
        var versions = ["0.1.8","0.1.7","0.1.6","0.1.5","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fmlrc2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fmlrc2/README.html