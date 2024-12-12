:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'raxml'
.. highlight: bash

raxml
=====

.. conda:recipe:: raxml
   :replaces_section_title:
   :noindex:

   Phylogenetics \- Randomized Axelerated Maximum Likelihood.

   :homepage: http://sco.h-its.org/exelixis/web/software/raxml/index.html
   :license: GPL
   :recipe: /`raxml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raxml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raxml/meta.yaml>`_
   :links: biotools: :biotools:`raxml`, doi: :doi:`10.1093/bioinformatics/btu033`, usegalaxy-eu: :usegalaxy-eu:`raxml`

   


.. conda:package:: raxml

   |downloads_raxml| |docker_raxml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>8.2.13-3</code>,  <code>8.2.13-2</code>,  <code>8.2.13-1</code>,  <code>8.2.13-0</code>,  <code>8.2.12-6</code>,  <code>8.2.12-5</code>,  <code>8.2.12-4</code>,  <code>8.2.12-3</code>,  <code>8.2.12-2</code>,  </span></summary>
      

      ``8.2.13-3``,  ``8.2.13-2``,  ``8.2.13-1``,  ``8.2.13-0``,  ``8.2.12-6``,  ``8.2.12-5``,  ``8.2.12-4``,  ``8.2.12-3``,  ``8.2.12-2``,  ``8.2.12-1``,  ``8.2.12-0``,  ``8.2.10-1``,  ``8.2.10-0``,  ``8.2.9-8``,  ``8.2.9-7``,  ``8.2.9-6``,  ``8.2.9-5``,  ``8.2.9-4``,  ``8.2.9-3``,  ``8.2.9-2``,  ``8.2.9-1``,  ``8.2.9-0``,  ``8.2.4-8``,  ``8.2.4-7``,  ``8.2.4-6``,  ``8.2.4-5``,  ``8.2.4-4``,  ``8.2.4-3``,  ``8.2.4-2``,  ``8.2.4-1``,  ``8.2.4-0``,  ``7.3.0-1``,  ``7.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
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

      mamba install raxml

   and update with::

      mamba update raxml

  To create a new environment, run::

      mamba create --name myenvname raxml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/raxml:<tag>

   (see `raxml/tags`_ for valid values for ``<tag>``)


.. |downloads_raxml| image:: https://img.shields.io/conda/dn/bioconda/raxml.svg?style=flat
   :target: https://anaconda.org/bioconda/raxml
   :alt:   (downloads)
.. |docker_raxml| image:: https://quay.io/repository/biocontainers/raxml/status
   :target: https://quay.io/repository/biocontainers/raxml
.. _`raxml/tags`: https://quay.io/repository/biocontainers/raxml?tab=tags


.. raw:: html

    <script>
        var package = "raxml";
        var versions = ["8.2.13","8.2.13","8.2.13","8.2.13","8.2.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/raxml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/raxml/README.html