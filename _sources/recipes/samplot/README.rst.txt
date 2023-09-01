:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samplot'
.. highlight: bash

samplot
=======

.. conda:recipe:: samplot
   :replaces_section_title:
   :noindex:

   Plot structural variant signals from BAMs and CRAMs.

   :homepage: https://github.com/ryanlayer/samplot
   :license: MIT
   :recipe: /`samplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samplot/meta.yaml>`_

   


.. conda:package:: samplot

   |downloads_samplot| |docker_samplot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.0-1</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.6-0</code>,  <code>1.1.5-0</code>,  <code>1.1.3-0</code>,  <code>1.1.0-0</code>,  <code>1.0.21-0</code>,  <code>1.0.20-0</code>,  </span></summary>
      

      ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.3-0``,  ``1.1.0-0``,  ``1.0.21-0``,  ``1.0.20-0``,  ``1.0.19-0``,  ``1.0.18-0``,  ``1.0.17-0``,  ``1.0.16-0``,  ``1.0.15-1``,  ``1.0.15-0``,  ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends jinja2: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pip: 
   :depends pysam: ``>=0.15.2``
   :depends python: 
   :depends wget: 
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

      mamba install samplot

   and update with::

      mamba update samplot

  To create a new environment, run::

      mamba create --name myenvname samplot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/samplot:<tag>

   (see `samplot/tags`_ for valid values for ``<tag>``)


.. |downloads_samplot| image:: https://img.shields.io/conda/dn/bioconda/samplot.svg?style=flat
   :target: https://anaconda.org/bioconda/samplot
   :alt:   (downloads)
.. |docker_samplot| image:: https://quay.io/repository/biocontainers/samplot/status
   :target: https://quay.io/repository/biocontainers/samplot
.. _`samplot/tags`: https://quay.io/repository/biocontainers/samplot?tab=tags


.. raw:: html

    <script>
        var package = "samplot";
        var versions = ["1.3.0","1.3.0","1.2.0","1.1.6","1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samplot/README.html