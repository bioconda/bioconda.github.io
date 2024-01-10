:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakefmt'
.. highlight: bash

snakefmt
========

.. conda:recipe:: snakefmt
   :replaces_section_title:
   :noindex:

   The uncompromising Snakemake code formatter

   :homepage: https://github.com/snakemake/snakefmt
   :license: MIT / MIT
   :recipe: /`snakefmt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakefmt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakefmt/meta.yaml>`_

   


.. conda:package:: snakefmt

   |downloads_snakefmt| |docker_snakefmt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.0-1</code>,  <code>0.9.0-0</code>,  <code>0.8.5-0</code>,  <code>0.8.4-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.0-0</code>,  </span></summary>
      

      ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.5-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.5-0``,  ``0.1.3-0``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends black: ``>=23.12.1,<24.0``
   :depends click: ``>=8.0.0,<9.0.0``
   :depends python: ``>=3.8``
   :depends toml: ``>=0.10.2,<0.11.0``
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

      mamba install snakefmt

   and update with::

      mamba update snakefmt

  To create a new environment, run::

      mamba create --name myenvname snakefmt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakefmt:<tag>

   (see `snakefmt/tags`_ for valid values for ``<tag>``)


.. |downloads_snakefmt| image:: https://img.shields.io/conda/dn/bioconda/snakefmt.svg?style=flat
   :target: https://anaconda.org/bioconda/snakefmt
   :alt:   (downloads)
.. |docker_snakefmt| image:: https://quay.io/repository/biocontainers/snakefmt/status
   :target: https://quay.io/repository/biocontainers/snakefmt
.. _`snakefmt/tags`: https://quay.io/repository/biocontainers/snakefmt?tab=tags


.. raw:: html

    <script>
        var package = "snakefmt";
        var versions = ["0.9.0","0.9.0","0.8.5","0.8.4","0.8.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakefmt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakefmt/README.html