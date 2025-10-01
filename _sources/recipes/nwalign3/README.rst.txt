:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nwalign3'
.. highlight: bash

nwalign3
========

.. conda:recipe:: nwalign3
   :replaces_section_title:
   :noindex:

   Updated version of nwalign \(Needleman\-Wunsch global sequence alignment\) with Python 3.x compatibility.

   :homepage: https://github.com/briney/nwalign3
   :license: BSD / BSD-4-Clause-UC
   :recipe: /`nwalign3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nwalign3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nwalign3/meta.yaml>`_
   :links: biotools: :biotools:`nwalign3`

   


.. conda:package:: nwalign3

   |downloads_nwalign3| |docker_nwalign3|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.2-3``,  ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends libgcc: ``>=13``
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install nwalign3

   and update with::

      mamba update nwalign3

  To create a new environment, run::

      mamba create --name myenvname nwalign3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nwalign3:<tag>

   (see `nwalign3/tags`_ for valid values for ``<tag>``)


.. |downloads_nwalign3| image:: https://img.shields.io/conda/dn/bioconda/nwalign3.svg?style=flat
   :target: https://anaconda.org/bioconda/nwalign3
   :alt:   (downloads)
.. |docker_nwalign3| image:: https://quay.io/repository/biocontainers/nwalign3/status
   :target: https://quay.io/repository/biocontainers/nwalign3
.. _`nwalign3/tags`: https://quay.io/repository/biocontainers/nwalign3?tab=tags


.. raw:: html

    <script>
        var package = "nwalign3";
        var versions = ["0.1.6","0.1.2","0.1.2","0.1.2","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nwalign3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nwalign3/README.html