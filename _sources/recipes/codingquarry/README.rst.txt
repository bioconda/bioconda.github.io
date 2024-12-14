:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'codingquarry'
.. highlight: bash

codingquarry
============

.. conda:recipe:: codingquarry
   :replaces_section_title:
   :noindex:

   CodingQuarry\: highly accurate hidden Markov model gene prediction in fungal genomes using RNA\-seq transcripts.

   :homepage: https://sourceforge.net/p/codingquarry/
   :license: GPL / GPL-3
   :recipe: /`codingquarry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codingquarry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codingquarry/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12864-015-1344-4`

   


.. conda:package:: codingquarry

   |downloads_codingquarry| |docker_codingquarry|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0-10</code>,  <code>2.0-9</code>,  <code>2.0-8</code>,  <code>2.0-7</code>,  <code>2.0-6</code>,  <code>2.0-5</code>,  <code>2.0-4</code>,  <code>2.0-3</code>,  <code>2.0-2</code>,  </span></summary>
      

      ``2.0-10``,  ``2.0-9``,  ``2.0-8``,  ``2.0-7``,  ``2.0-6``,  ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install codingquarry

   and update with::

      mamba update codingquarry

  To create a new environment, run::

      mamba create --name myenvname codingquarry

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/codingquarry:<tag>

   (see `codingquarry/tags`_ for valid values for ``<tag>``)


.. |downloads_codingquarry| image:: https://img.shields.io/conda/dn/bioconda/codingquarry.svg?style=flat
   :target: https://anaconda.org/bioconda/codingquarry
   :alt:   (downloads)
.. |docker_codingquarry| image:: https://quay.io/repository/biocontainers/codingquarry/status
   :target: https://quay.io/repository/biocontainers/codingquarry
.. _`codingquarry/tags`: https://quay.io/repository/biocontainers/codingquarry?tab=tags


.. raw:: html

    <script>
        var package = "codingquarry";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/codingquarry/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/codingquarry/README.html