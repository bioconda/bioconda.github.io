:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dendropy'
.. highlight: bash

dendropy
========

.. conda:recipe:: dendropy
   :replaces_section_title:
   :noindex:

   A Python library for phylogenetics and phylogenetic computing\: reading\, writing\, simulation\, processing and manipulation of phylogenetic trees \(phylogenies\) and characters.

   :homepage: https://github.com/jeetsukumaran/DendroPy
   :documentation: https://dendropy.org
   
   :license: BSD / BSD-3-Clause
   :recipe: /`dendropy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dendropy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dendropy/meta.yaml>`_
   :links: biotools: :biotools:`dendropy`, doi: :doi:`10.1093/bioinformatics/btq228`

   


.. conda:package:: dendropy

   |downloads_dendropy| |docker_dendropy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.0.7-0</code>,  <code>5.0.6-0</code>,  <code>5.0.5-0</code>,  <code>5.0.4-0</code>,  <code>5.0.3-0</code>,  <code>5.0.2-0</code>,  <code>5.0.1-0</code>,  <code>5.0.0-0</code>,  <code>4.6.1-0</code>,  </span></summary>
      

      ``5.0.7-0``,  ``5.0.6-0``,  ``5.0.5-0``,  ``5.0.4-0``,  ``5.0.3-0``,  ``5.0.2-0``,  ``5.0.1-0``,  ``5.0.0-0``,  ``4.6.1-0``,  ``4.6.0-0``,  ``4.5.2-0``,  ``4.5.1-0``,  ``4.4.0-2``,  ``4.4.0-1``,  ``4.4.0-0``,  ``4.2.0-2``,  ``4.2.0-0``,  ``4.1.0-0``,  ``4.0.3-0``,  ``3.12.3-1``,  ``3.12.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: ``>=3.6``
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

      mamba install dendropy

   and update with::

      mamba update dendropy

  To create a new environment, run::

      mamba create --name myenvname dendropy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dendropy:<tag>

   (see `dendropy/tags`_ for valid values for ``<tag>``)


.. |downloads_dendropy| image:: https://img.shields.io/conda/dn/bioconda/dendropy.svg?style=flat
   :target: https://anaconda.org/bioconda/dendropy
   :alt:   (downloads)
.. |docker_dendropy| image:: https://quay.io/repository/biocontainers/dendropy/status
   :target: https://quay.io/repository/biocontainers/dendropy
.. _`dendropy/tags`: https://quay.io/repository/biocontainers/dendropy?tab=tags


.. raw:: html

    <script>
        var package = "dendropy";
        var versions = ["5.0.7","5.0.6","5.0.5","5.0.4","5.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dendropy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dendropy/README.html