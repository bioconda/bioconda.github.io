:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varlociraptor'
.. highlight: bash

varlociraptor
=============

.. conda:recipe:: varlociraptor
   :replaces_section_title:
   :noindex:

   Flexible\, uncertainty\-aware variant calling with parameter free filtration via FDR control.

   :homepage: https://github.com/varlociraptor/varlociraptor
   :documentation: https://varlociraptor.github.io
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`varlociraptor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varlociraptor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varlociraptor/meta.yaml>`_
   :links: biotools: :biotools:`varlociraptor`, doi: :doi:`10.1186/s13059-020-01993-6`

   


.. conda:package:: varlociraptor

   |downloads_varlociraptor| |docker_varlociraptor|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>8.9.2-0</code>,  <code>8.9.1-0</code>,  <code>8.9.0-0</code>,  <code>8.8.2-0</code>,  <code>8.8.1-0</code>,  <code>8.8.0-0</code>,  <code>8.7.4-0</code>,  <code>8.7.3-2</code>,  <code>8.7.3-1</code>,  </span></summary>
      

      ``8.9.2-0``,  ``8.9.1-0``,  ``8.9.0-0``,  ``8.8.2-0``,  ``8.8.1-0``,  ``8.8.0-0``,  ``8.7.4-0``,  ``8.7.3-2``,  ``8.7.3-1``,  ``8.7.3-0``,  ``8.7.2-0``,  ``8.7.1-0``,  ``8.7.0-0``,  ``8.6.1-0``,  ``8.6.0-0``,  ``8.5.1-0``,  ``8.4.14-0``,  ``8.4.13-0``,  ``8.4.11-0``,  ``8.4.10-0``,  ``8.4.9-0``,  ``8.4.8-0``,  ``8.4.7-0``,  ``8.4.6-1``,  ``8.4.6-0``,  ``8.4.5-0``,  ``8.4.4-0``,  ``8.4.3-0``,  ``8.4.2-0``,  ``8.4.1-0``,  ``8.4.0-0``,  ``8.3.0-1``,  ``8.3.0-0``,  ``8.2.0-0``,  ``8.1.1-2``,  ``8.1.1-0``,  ``8.1.0-2``,  ``8.1.0-1``,  ``8.1.0-0``,  ``8.0.0-0``,  ``7.0.0-0``,  ``6.0.0-0``,  ``5.10.0-0``,  ``5.9.1-0``,  ``5.9.0-0``,  ``5.8.0-0``,  ``5.7.0-0``,  ``5.6.2-0``,  ``5.6.1-0``,  ``5.6.0-0``,  ``5.5.0-0``,  ``5.4.1-0``,  ``5.4.0-0``,  ``5.3.3-0``,  ``5.3.1-1``,  ``5.3.1-0``,  ``5.3.0-2``,  ``5.3.0-1``,  ``5.3.0-0``,  ``5.2.0-0``,  ``5.1.0-0``,  ``5.0.3-0``,  ``5.0.2-0``,  ``5.0.1-0``,  ``5.0.0-0``,  ``4.12.0-0``,  ``4.11.4-0``,  ``4.11.3-1``,  ``4.11.3-0``,  ``4.11.2-1``,  ``4.11.2-0``,  ``4.11.1-1``,  ``4.11.1-0``,  ``4.11.0-0``,  ``4.10.1-0``,  ``4.9.0-0``,  ``4.8.1-0``,  ``4.8.0-0``,  ``4.7.0-0``,  ``4.6.0-0``,  ``4.5.0-0``,  ``4.4.3-0``,  ``4.4.2-1``,  ``4.4.2-0``,  ``4.4.1-0``,  ``4.4.0-0``,  ``4.3.0-0``,  ``4.1.3-0``,  ``4.1.2-0``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.1-0``,  ``3.5.0-0``,  ``3.4.0-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.6.5-1``,  ``2.6.5-0``,  ``2.6.4-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.4-0``,  ``2.5.3-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.1-2``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.8.0-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends blis: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.8.1,<6.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openssl: ``>=3.6.0,<4.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install varlociraptor

   and update with::

      mamba update varlociraptor

  To create a new environment, run::

      mamba create --name myenvname varlociraptor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/varlociraptor:<tag>

   (see `varlociraptor/tags`_ for valid values for ``<tag>``)


.. |downloads_varlociraptor| image:: https://img.shields.io/conda/dn/bioconda/varlociraptor.svg?style=flat
   :target: https://anaconda.org/bioconda/varlociraptor
   :alt:   (downloads)
.. |docker_varlociraptor| image:: https://quay.io/repository/biocontainers/varlociraptor/status
   :target: https://quay.io/repository/biocontainers/varlociraptor
.. _`varlociraptor/tags`: https://quay.io/repository/biocontainers/varlociraptor?tab=tags


.. raw:: html

    <script>
        var package = "varlociraptor";
        var versions = ["8.9.2","8.9.1","8.9.0","8.8.2","8.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varlociraptor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varlociraptor/README.html