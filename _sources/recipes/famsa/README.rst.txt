:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'famsa'
.. highlight: bash

famsa
=====

.. conda:recipe:: famsa
   :replaces_section_title:
   :noindex:

   Algorithm for large\-scale multiple sequence alignments.

   :homepage: https://github.com/refresh-bio/FAMSA
   :license: GPL3 / GPL-3.0-only
   :recipe: /`famsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/famsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/famsa/meta.yaml>`_
   :links: doi: :doi:`10.1038/srep33964`, biotools: :biotools:`famsa`

   


.. conda:package:: famsa

   |downloads_famsa| |docker_famsa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.3-0</code>,  <code>2.2.2-3</code>,  <code>2.2.2-2</code>,  <code>2.2.2-1</code>,  <code>2.2.2-0</code>,  <code>2.1.2-0</code>,  <code>2.0.1-0</code>,  <code>1.6.2-2</code>,  <code>1.6.2-1</code>,  </span></summary>
      

      ``2.2.3-0``,  ``2.2.2-3``,  ``2.2.2-2``,  ``2.2.2-1``,  ``2.2.2-0``,  ``2.1.2-0``,  ``2.0.1-0``,  ``1.6.2-2``,  ``1.6.2-1``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.5.12-0``,  ``1.3.2-0``,  ``1.2.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install famsa

   and update with::

      mamba update famsa

  To create a new environment, run::

      mamba create --name myenvname famsa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/famsa:<tag>

   (see `famsa/tags`_ for valid values for ``<tag>``)


.. |downloads_famsa| image:: https://img.shields.io/conda/dn/bioconda/famsa.svg?style=flat
   :target: https://anaconda.org/bioconda/famsa
   :alt:   (downloads)
.. |docker_famsa| image:: https://quay.io/repository/biocontainers/famsa/status
   :target: https://quay.io/repository/biocontainers/famsa
.. _`famsa/tags`: https://quay.io/repository/biocontainers/famsa?tab=tags


.. raw:: html

    <script>
        var package = "famsa";
        var versions = ["2.2.3","2.2.2","2.2.2","2.2.2","2.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/famsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/famsa/README.html