:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flight-genome'
.. highlight: bash

flight-genome
=============

.. conda:recipe:: flight-genome
   :replaces_section_title:
   :noindex:

   flight \- python component of Rosella and Lorikeet

   :homepage: https://github.com/rhysnewell/flight
   :license: BSD / BSD-3
   :recipe: /`flight-genome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flight-genome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flight-genome/meta.yaml>`_

   


.. conda:package:: flight-genome

   |downloads_flight-genome| |docker_flight-genome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.2-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.3-1</code>,  <code>1.4.3-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends python: ``>=3.8``
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

      mamba install flight-genome

   and update with::

      mamba update flight-genome

  To create a new environment, run::

      mamba create --name myenvname flight-genome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flight-genome:<tag>

   (see `flight-genome/tags`_ for valid values for ``<tag>``)


.. |downloads_flight-genome| image:: https://img.shields.io/conda/dn/bioconda/flight-genome.svg?style=flat
   :target: https://anaconda.org/bioconda/flight-genome
   :alt:   (downloads)
.. |docker_flight-genome| image:: https://quay.io/repository/biocontainers/flight-genome/status
   :target: https://quay.io/repository/biocontainers/flight-genome
.. _`flight-genome/tags`: https://quay.io/repository/biocontainers/flight-genome?tab=tags


.. raw:: html

    <script>
        var package = "flight-genome";
        var versions = ["1.6.2","1.6.1","1.6.0","1.5.0","1.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flight-genome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flight-genome/README.html