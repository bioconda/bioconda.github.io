:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prodigal'
.. highlight: bash

prodigal
========

.. conda:recipe:: prodigal
   :replaces_section_title:
   :noindex:

   Prodigal \(Prokaryotic Dynamic Programming Genefinding Algorithm\) is a microbial \(bacterial and archaeal\) gene finding program.

   :homepage: https://github.com/hyattpd/Prodigal
   :documentation: https://github.com/hyattpd/Prodigal/wiki
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`prodigal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prodigal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prodigal/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2105-11-119`, biotools: :biotools:`prodigal`, usegalaxy-eu: :usegalaxy-eu:`prodigal`

   


.. conda:package:: prodigal

   |downloads_prodigal| |docker_prodigal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.3-11</code>,  <code>2.6.3-10</code>,  <code>2.6.3-9</code>,  <code>2.6.3-8</code>,  <code>2.6.3-7</code>,  <code>2.6.3-6</code>,  <code>2.6.3-5</code>,  <code>2.6.3-4</code>,  <code>2.6.3-3</code>,  </span></summary>
      

      ``2.6.3-11``,  ``2.6.3-10``,  ``2.6.3-9``,  ``2.6.3-8``,  ``2.6.3-7``,  ``2.6.3-6``,  ``2.6.3-5``,  ``2.6.3-4``,  ``2.6.3-3``,  ``2.6.3-2``,  ``2.6.3-1``,  ``2.6.3-0``,  ``2.6.2-3``,  ``2.6.2-2``,  ``2.6.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install prodigal

   and update with::

      mamba update prodigal

  To create a new environment, run::

      mamba create --name myenvname prodigal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/prodigal:<tag>

   (see `prodigal/tags`_ for valid values for ``<tag>``)


.. |downloads_prodigal| image:: https://img.shields.io/conda/dn/bioconda/prodigal.svg?style=flat
   :target: https://anaconda.org/bioconda/prodigal
   :alt:   (downloads)
.. |docker_prodigal| image:: https://quay.io/repository/biocontainers/prodigal/status
   :target: https://quay.io/repository/biocontainers/prodigal
.. _`prodigal/tags`: https://quay.io/repository/biocontainers/prodigal?tab=tags


.. raw:: html

    <script>
        var package = "prodigal";
        var versions = ["2.6.3","2.6.3","2.6.3","2.6.3","2.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prodigal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prodigal/README.html