:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fgwas'
.. highlight: bash

fgwas
=====

.. conda:recipe:: fgwas
   :replaces_section_title:
   :noindex:

   fgwas is a command line tool for integrating functional genomic information into a genome\-wide association study \(GWAS\).

   :homepage: https://github.com/joepickrell/fgwas
   :license: GPL2
   :recipe: /`fgwas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgwas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgwas/meta.yaml>`_

   


.. conda:package:: fgwas

   |downloads_fgwas| |docker_fgwas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.6-9</code>,  <code>0.3.6-8</code>,  <code>0.3.6-7</code>,  <code>0.3.6-6</code>,  <code>0.3.6-5</code>,  <code>0.3.6-4</code>,  <code>0.3.6-3</code>,  <code>0.3.6-2</code>,  <code>0.3.6-1</code>,  </span></summary>
      

      ``0.3.6-9``,  ``0.3.6-8``,  ``0.3.6-7``,  ``0.3.6-6``,  ``0.3.6-5``,  ``0.3.6-4``,  ``0.3.6-3``,  ``0.3.6-2``,  ``0.3.6-1``,  ``0.3.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install fgwas

   and update with::

      mamba update fgwas

  To create a new environment, run::

      mamba create --name myenvname fgwas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fgwas:<tag>

   (see `fgwas/tags`_ for valid values for ``<tag>``)


.. |downloads_fgwas| image:: https://img.shields.io/conda/dn/bioconda/fgwas.svg?style=flat
   :target: https://anaconda.org/bioconda/fgwas
   :alt:   (downloads)
.. |docker_fgwas| image:: https://quay.io/repository/biocontainers/fgwas/status
   :target: https://quay.io/repository/biocontainers/fgwas
.. _`fgwas/tags`: https://quay.io/repository/biocontainers/fgwas?tab=tags


.. raw:: html

    <script>
        var package = "fgwas";
        var versions = ["0.3.6","0.3.6","0.3.6","0.3.6","0.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fgwas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fgwas/README.html