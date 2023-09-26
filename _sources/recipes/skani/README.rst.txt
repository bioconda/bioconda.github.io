:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'skani'
.. highlight: bash

skani
=====

.. conda:recipe:: skani
   :replaces_section_title:
   :noindex:

   skani is a fast and robust tool for calculating ANI between metagenome assembled genomes and contigs.

   :homepage: https://github.com/bluenote-1577/skani
   :license: MIT
   :recipe: /`skani <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skani>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skani/meta.yaml>`_

   


.. conda:package:: skani

   |downloads_skani| |docker_skani|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.0-0</code>,  <code>0.1.5-0</code>,  <code>0.1.4-0</code>,  <code>0.1.3-2</code>,  <code>0.1.3-0</code>,  <code>0.1.2-2</code>,  <code>0.1.2-1</code>,  <code>0.1.2-0</code>,  <code>0.1.1-0</code>,  </span></summary>
      

      ``0.2.0-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-2``,  ``0.1.3-0``,  ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install skani

   and update with::

      mamba update skani

  To create a new environment, run::

      mamba create --name myenvname skani

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/skani:<tag>

   (see `skani/tags`_ for valid values for ``<tag>``)


.. |downloads_skani| image:: https://img.shields.io/conda/dn/bioconda/skani.svg?style=flat
   :target: https://anaconda.org/bioconda/skani
   :alt:   (downloads)
.. |docker_skani| image:: https://quay.io/repository/biocontainers/skani/status
   :target: https://quay.io/repository/biocontainers/skani
.. _`skani/tags`: https://quay.io/repository/biocontainers/skani?tab=tags


.. raw:: html

    <script>
        var package = "skani";
        var versions = ["0.2.0","0.1.5","0.1.4","0.1.3","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/skani/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/skani/README.html