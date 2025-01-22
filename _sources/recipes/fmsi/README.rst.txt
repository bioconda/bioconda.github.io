:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fmsi'
.. highlight: bash

fmsi
====

.. conda:recipe:: fmsi
   :replaces_section_title:
   :noindex:

   FMSI \- memory efficient k\-mer set index based on masked superstrings and Burrows\-Wheeler transform.

   :homepage: https://github.com/OndrejSladky/fmsi
   :documentation: https://github.com/OndrejSladky/fmsi/blob/v0.4.0/README.md
   
   :license: MIT / MIT
   :recipe: /`fmsi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fmsi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fmsi/meta.yaml>`_
   :links: doi: :doi:`10.1101/2024.03.06.583483`, doi: :doi:`10.1101/2023.02.01.526717`

   


.. conda:package:: fmsi

   |downloads_fmsi| |docker_fmsi|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.4-1``,  ``0.2.4-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends sdsl-lite: 
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

      mamba install fmsi

   and update with::

      mamba update fmsi

  To create a new environment, run::

      mamba create --name myenvname fmsi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fmsi:<tag>

   (see `fmsi/tags`_ for valid values for ``<tag>``)


.. |downloads_fmsi| image:: https://img.shields.io/conda/dn/bioconda/fmsi.svg?style=flat
   :target: https://anaconda.org/bioconda/fmsi
   :alt:   (downloads)
.. |docker_fmsi| image:: https://quay.io/repository/biocontainers/fmsi/status
   :target: https://quay.io/repository/biocontainers/fmsi
.. _`fmsi/tags`: https://quay.io/repository/biocontainers/fmsi?tab=tags


.. raw:: html

    <script>
        var package = "fmsi";
        var versions = ["0.4.0","0.3.1","0.3.1","0.3.0","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fmsi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fmsi/README.html