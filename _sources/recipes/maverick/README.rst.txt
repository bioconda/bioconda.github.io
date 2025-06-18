:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maverick'
.. highlight: bash

maverick
========

.. conda:recipe:: maverick
   :replaces_section_title:
   :noindex:

   Bayesian clustering for genetic data.

   :homepage: https://github.com/bobverity/MavericK
   :documentation: https://github.com/bobverity/MavericK/blob/master/README.md
   
   :license: MIT / MIT
   :recipe: /`maverick <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maverick>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maverick/meta.yaml>`_

   MavericK is a C\+\+ program for model\-based clustering of population\-genetic data using Bayesian inference.



.. conda:package:: maverick

   |downloads_maverick| |docker_maverick|

   :versions:
      
      

      ``1.0.5-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install maverick

   and update with::

      mamba update maverick

  To create a new environment, run::

      mamba create --name myenvname maverick

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/maverick:<tag>

   (see `maverick/tags`_ for valid values for ``<tag>``)


.. |downloads_maverick| image:: https://img.shields.io/conda/dn/bioconda/maverick.svg?style=flat
   :target: https://anaconda.org/bioconda/maverick
   :alt:   (downloads)
.. |docker_maverick| image:: https://quay.io/repository/biocontainers/maverick/status
   :target: https://quay.io/repository/biocontainers/maverick
.. _`maverick/tags`: https://quay.io/repository/biocontainers/maverick?tab=tags


.. raw:: html

    <script>
        var package = "maverick";
        var versions = ["1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maverick/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maverick/README.html