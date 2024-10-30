:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbsv'
.. highlight: bash

pbsv
====

.. conda:recipe:: pbsv
   :replaces_section_title:
   :noindex:

   pbsv \- PacBio structural variant \(SV\) calling and analysis tools

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`pbsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbsv/meta.yaml>`_

   


.. conda:package:: pbsv

   |downloads_pbsv| |docker_pbsv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.10.0-0</code>,  <code>2.9.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.2-0</code>,  <code>2.6.0-0</code>,  <code>2.4.1-0</code>,  <code>2.4.0-0</code>,  <code>2.3.0-0</code>,  <code>2.2.2-2</code>,  </span></summary>
      

      ``2.10.0-0``,  ``2.9.0-0``,  ``2.8.0-0``,  ``2.6.2-0``,  ``2.6.0-0``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.2-2``,  ``2.2.2-1``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install pbsv

   and update with::

      mamba update pbsv

  To create a new environment, run::

      mamba create --name myenvname pbsv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pbsv:<tag>

   (see `pbsv/tags`_ for valid values for ``<tag>``)


.. |downloads_pbsv| image:: https://img.shields.io/conda/dn/bioconda/pbsv.svg?style=flat
   :target: https://anaconda.org/bioconda/pbsv
   :alt:   (downloads)
.. |docker_pbsv| image:: https://quay.io/repository/biocontainers/pbsv/status
   :target: https://quay.io/repository/biocontainers/pbsv
.. _`pbsv/tags`: https://quay.io/repository/biocontainers/pbsv?tab=tags


.. raw:: html

    <script>
        var package = "pbsv";
        var versions = ["2.10.0","2.9.0","2.8.0","2.6.2","2.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbsv/README.html