:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lima'
.. highlight: bash

lima
====

.. conda:recipe:: lima
   :replaces_section_title:
   :noindex:

   lima \- The PacBio Barcode Demultiplexer

   :homepage: https://lima.how
   :license: BSD-3-Clause-Clear
   :recipe: /`lima <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lima>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lima/meta.yaml>`_

   


.. conda:package:: lima

   |downloads_lima| |docker_lima|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.12.0-1</code>,  <code>2.12.0-0</code>,  <code>2.9.0-1</code>,  <code>2.9.0-0</code>,  <code>2.7.1-0</code>,  <code>2.6.0-0</code>,  <code>2.5.0-0</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  </span></summary>
      

      ``2.12.0-1``,  ``2.12.0-0``,  ``2.9.0-1``,  ``2.9.0-0``,  ``2.7.1-0``,  ``2.6.0-0``,  ``2.5.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.11.0-0``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.7.1-1``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.2-0``,  ``1.6.1-0``

      
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

      mamba install lima

   and update with::

      mamba update lima

  To create a new environment, run::

      mamba create --name myenvname lima

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lima:<tag>

   (see `lima/tags`_ for valid values for ``<tag>``)


.. |downloads_lima| image:: https://img.shields.io/conda/dn/bioconda/lima.svg?style=flat
   :target: https://anaconda.org/bioconda/lima
   :alt:   (downloads)
.. |docker_lima| image:: https://quay.io/repository/biocontainers/lima/status
   :target: https://quay.io/repository/biocontainers/lima
.. _`lima/tags`: https://quay.io/repository/biocontainers/lima?tab=tags


.. raw:: html

    <script>
        var package = "lima";
        var versions = ["2.12.0","2.12.0","2.9.0","2.9.0","2.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lima/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lima/README.html