:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'asciigenome'
.. highlight: bash

asciigenome
===========

.. conda:recipe:: asciigenome
   :replaces_section_title:
   :noindex:

   Command\-line genome browser running from terminal window and solely based on ASCII characters

   :homepage: https://github.com/dariober/ASCIIGenome
   :documentation: https://asciigenome.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`asciigenome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/asciigenome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/asciigenome/meta.yaml>`_

   


.. conda:package:: asciigenome

   |downloads_asciigenome| |docker_asciigenome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.19.0-0</code>,  <code>1.18.0-0</code>,  <code>1.17.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.15.0-0</code>,  <code>1.14.0-2</code>,  </span></summary>
      

      ``1.20.0-1``,  ``1.20.0-0``,  ``1.19.0-0``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.15.0-0``,  ``1.14.0-2``,  ``1.14.0-0``,  ``1.13.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.6.4-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=17``
   :depends zlib: 
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

      mamba install asciigenome

   and update with::

      mamba update asciigenome

  To create a new environment, run::

      mamba create --name myenvname asciigenome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/asciigenome:<tag>

   (see `asciigenome/tags`_ for valid values for ``<tag>``)


.. |downloads_asciigenome| image:: https://img.shields.io/conda/dn/bioconda/asciigenome.svg?style=flat
   :target: https://anaconda.org/bioconda/asciigenome
   :alt:   (downloads)
.. |docker_asciigenome| image:: https://quay.io/repository/biocontainers/asciigenome/status
   :target: https://quay.io/repository/biocontainers/asciigenome
.. _`asciigenome/tags`: https://quay.io/repository/biocontainers/asciigenome?tab=tags


.. raw:: html

    <script>
        var package = "asciigenome";
        var versions = ["1.20.0","1.20.0","1.19.0","1.18.0","1.17.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/asciigenome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/asciigenome/README.html