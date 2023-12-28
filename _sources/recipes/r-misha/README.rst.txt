:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-misha'
.. highlight: bash

r-misha
=======

.. conda:recipe:: r-misha
   :replaces_section_title:
   :noindex:

   Toolkit for analysis of genomic data

   :homepage: https://tanaylab.github.io/misha/index.html
   :license: GPL-2
   :recipe: /`r-misha <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-misha>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-misha/meta.yaml>`_

   


.. conda:package:: r-misha

   |downloads_r-misha| |docker_r-misha|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1.0-7</code>,  <code>4.1.0-6</code>,  <code>4.1.0-5</code>,  <code>4.1.0-4</code>,  <code>4.1.0-3</code>,  <code>4.1.0-2</code>,  <code>4.1.0-1</code>,  <code>4.1.0-0</code>,  <code>4.0.11-0</code>,  </span></summary>
      

      ``4.1.0-7``,  ``4.1.0-6``,  ``4.1.0-5``,  ``4.1.0-4``,  ``4.1.0-3``,  ``4.1.0-2``,  ``4.1.0-1``,  ``4.1.0-0``,  ``4.0.11-0``,  ``4.0.10-1``,  ``4.0.10-0``,  ``4.0.6-1``,  ``4.0.6-0``,  ``4.0.5-0``,  ``4.0.4-1``,  ``3.7.1-0``,  ``3.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install r-misha

   and update with::

      mamba update r-misha

  To create a new environment, run::

      mamba create --name myenvname r-misha

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-misha:<tag>

   (see `r-misha/tags`_ for valid values for ``<tag>``)


.. |downloads_r-misha| image:: https://img.shields.io/conda/dn/bioconda/r-misha.svg?style=flat
   :target: https://anaconda.org/bioconda/r-misha
   :alt:   (downloads)
.. |docker_r-misha| image:: https://quay.io/repository/biocontainers/r-misha/status
   :target: https://quay.io/repository/biocontainers/r-misha
.. _`r-misha/tags`: https://quay.io/repository/biocontainers/r-misha?tab=tags


.. raw:: html

    <script>
        var package = "r-misha";
        var versions = ["4.1.0","4.1.0","4.1.0","4.1.0","4.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-misha/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-misha/README.html