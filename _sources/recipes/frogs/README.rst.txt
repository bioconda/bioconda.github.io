:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'frogs'
.. highlight: bash

frogs
=====

.. conda:recipe:: frogs
   :replaces_section_title:
   :noindex:

   FROGS is a workflow designed to metabarcoding sequence analysis

   :homepage: https://github.com/geraldinepascal/FROGS
   :license: GNU GPL v3
   :recipe: /`frogs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/frogs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/frogs/meta.yaml>`_

   FROGS produces an ASVs count matrix from high depth sequencing amplicon data. This is the official release 4.1.0 of FROGS. To fully install FROGS dependencies\, please refer to the frogs\-conda\-requirements.txt and frogsfunc\-conda\-requirements.txt available at https\:\/\/github.com\/geraldinepascal\/FROGS


.. conda:package:: frogs

   |downloads_frogs| |docker_frogs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1.0-2</code>,  <code>4.1.0-1</code>,  <code>4.1.0-0</code>,  <code>4.0.1-0</code>,  <code>4.0.0-0</code>,  <code>3.2.3-0</code>,  <code>3.2.2-0</code>,  <code>3.2.1-0</code>,  <code>3.2.0-0</code>,  </span></summary>
      

      ``4.1.0-2``,  ``4.1.0-1``,  ``4.1.0-0``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.2.3-0``,  ``3.2.2-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.0-1``,  ``3.1.0-0``,  ``2.0.1-1``,  ``2.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends pandas: ``>=1.1.5``
   :depends perl: 
   :depends perl-io-zlib: 
   :depends perl-perlio-gzip: 
   :depends python: ``<=3.7.0``
   :depends rdptools: ``2.0.3.*``
   :depends scipy: ``>=1.1.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install frogs

   and update with::

      mamba update frogs

  To create a new environment, run::

      mamba create --name myenvname frogs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/frogs:<tag>

   (see `frogs/tags`_ for valid values for ``<tag>``)


.. |downloads_frogs| image:: https://img.shields.io/conda/dn/bioconda/frogs.svg?style=flat
   :target: https://anaconda.org/bioconda/frogs
   :alt:   (downloads)
.. |docker_frogs| image:: https://quay.io/repository/biocontainers/frogs/status
   :target: https://quay.io/repository/biocontainers/frogs
.. _`frogs/tags`: https://quay.io/repository/biocontainers/frogs?tab=tags


.. raw:: html

    <script>
        var package = "frogs";
        var versions = ["4.1.0","4.1.0","4.1.0","4.0.1","4.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/frogs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/frogs/README.html