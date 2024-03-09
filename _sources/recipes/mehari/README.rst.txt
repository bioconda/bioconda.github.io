:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mehari'
.. highlight: bash

mehari
======

.. conda:recipe:: mehari
   :replaces_section_title:
   :noindex:

   VEP\-like tool for sequence ontology and HGVS annotation of VCF files written in Rust.

   :homepage: https://github.com/varfish-org/mehari
   :license: MIT
   :recipe: /`mehari <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mehari>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mehari/meta.yaml>`_

   


.. conda:package:: mehari

   |downloads_mehari| |docker_mehari|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.25.4-0</code>,  <code>0.25.3-0</code>,  <code>0.25.2-0</code>,  <code>0.25.0-0</code>,  <code>0.24.2-0</code>,  <code>0.24.1-0</code>,  <code>0.23.2-0</code>,  <code>0.23.1-0</code>,  <code>0.23.0-0</code>,  </span></summary>
      

      ``0.25.4-0``,  ``0.25.3-0``,  ``0.25.2-0``,  ``0.25.0-0``,  ``0.24.2-0``,  ``0.24.1-0``,  ``0.23.2-0``,  ``0.23.1-0``,  ``0.23.0-0``,  ``0.22.0-0``,  ``0.21.2-0``,  ``0.21.1-1``,  ``0.21.1-0``,  ``0.21.0-0``,  ``0.20.0-0``,  ``0.18.1-0``,  ``0.18.0-0``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.2-0``,  ``0.15.1-0``,  ``0.15.0-0``,  ``0.14.3-0``,  ``0.14.2-0``,  ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.7-0``,  ``0.5.6-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libsqlite: ``>=3.45.1,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends openssl: ``>=3.2.1,<4.0a0``
   :depends sqlite: 
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

      mamba install mehari

   and update with::

      mamba update mehari

  To create a new environment, run::

      mamba create --name myenvname mehari

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mehari:<tag>

   (see `mehari/tags`_ for valid values for ``<tag>``)


.. |downloads_mehari| image:: https://img.shields.io/conda/dn/bioconda/mehari.svg?style=flat
   :target: https://anaconda.org/bioconda/mehari
   :alt:   (downloads)
.. |docker_mehari| image:: https://quay.io/repository/biocontainers/mehari/status
   :target: https://quay.io/repository/biocontainers/mehari
.. _`mehari/tags`: https://quay.io/repository/biocontainers/mehari?tab=tags


.. raw:: html

    <script>
        var package = "mehari";
        var versions = ["0.25.4","0.25.3","0.25.2","0.25.0","0.24.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mehari/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mehari/README.html