:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'openms-meta'
.. highlight: bash

openms-meta
===========

.. conda:recipe:: openms-meta
   :replaces_section_title:
   :noindex:

   OpenMS is an open\-source software C\+\+ library for LC\-MS data management and analyses

   :homepage: https://github.com/OpenMS/OpenMS
   :license: BSD
   :recipe: /`openms-meta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openms-meta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openms-meta/meta.yaml>`_
   :links: biotools: :biotools:`openms`, usegalaxy-eu: :usegalaxy-eu:`openms_fileconverter`, doi: :doi:`10.1038/nmeth.3959`

   


.. conda:package:: libopenms

   |downloads_libopenms| |docker_libopenms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.0-2</code>,  <code>3.1.0-1</code>,  <code>3.0.0-1</code>,  <code>3.0.0-0</code>,  <code>2.9.1-4</code>,  <code>2.9.1-1</code>,  <code>2.9.1-0</code>,  <code>2.9.0-0</code>,  <code>2.8.0-4</code>,  </span></summary>
      

      ``3.1.0-2``,  ``3.1.0-1``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.9.1-4``,  ``2.9.1-1``,  ``2.9.1-0``,  ``2.9.0-0``,  ``2.8.0-4``,  ``2.8.0-3``,  ``2.8.0-2``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.7.0-1``,  ``2.6.0-0``,  ``2.5.0-6``,  ``2.5.0-5``,  ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-3``

      
      .. raw:: html

         </details>
      

   
   :depends __glibc: ``>=2.17,<3.0.a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends hdf5: ``>=1.14.2,<1.14.3.0a0``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends qt-main: ``>=5.15.8,<5.16.0a0``
   :depends xerces-c: ``>=3.2.4,<3.3.0a0``
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

      mamba install libopenms

   and update with::

      mamba update libopenms

  To create a new environment, run::

      mamba create --name myenvname libopenms

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/libopenms:<tag>

   (see `libopenms/tags`_ for valid values for ``<tag>``)


.. |downloads_libopenms| image:: https://img.shields.io/conda/dn/bioconda/libopenms.svg?style=flat
   :target: https://anaconda.org/bioconda/libopenms
   :alt:   (downloads)
.. |docker_libopenms| image:: https://quay.io/repository/biocontainers/openms-meta/status
   :target: https://quay.io/repository/biocontainers/openms-meta
.. _`libopenms/tags`: https://quay.io/repository/biocontainers/libopenms?tab=tags


.. raw:: html

    <script>
        var package = "openms-meta";
        var versions = ["3.1.0","3.1.0","3.0.0","3.0.0","2.9.1"];
    </script>


.. conda:package:: openms

   |downloads_openms| |docker_openms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.0-2</code>,  <code>3.1.0-1</code>,  <code>3.0.0-1</code>,  <code>3.0.0-0</code>,  <code>2.9.1-4</code>,  <code>2.9.1-1</code>,  <code>2.9.1-0</code>,  <code>2.9.0-0</code>,  <code>2.8.0-4</code>,  </span></summary>
      

      ``3.1.0-2``,  ``3.1.0-1``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.9.1-4``,  ``2.9.1-1``,  ``2.9.1-0``,  ``2.9.0-0``,  ``2.8.0-4``,  ``2.8.0-3``,  ``2.8.0-2``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.7.0-1``,  ``2.6.0-0``,  ``2.5.0-6``,  ``2.5.0-5``,  ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.0-3``,  ``2.3.0-2``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends __glibc: ``>=2.17,<3.0.a0``
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends bzip2: ``>=1.0.8,<1.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends coinmp: ``>=1.8.4,<1.9.0a0``
   :depends eigen: ``>=3.4.0,<3.5.0a0``
   :depends hdf5: ``>=1.14.2,<1.14.3.0a0``
   :depends hdf5: ``>=1.14.2,<1.15.0a0``
   :depends libopenms: ``3.1.0 h8964181_2``
   :depends libsvm: ``>=325,<326.0a0``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends qt-main: ``>=5.15.8,<5.16.0a0``
   :depends xerces-c: ``>=3.2.4,<3.3.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install openms

   and update with::

      mamba update openms

  To create a new environment, run::

      mamba create --name myenvname openms

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/openms:<tag>

   (see `openms/tags`_ for valid values for ``<tag>``)


.. |downloads_openms| image:: https://img.shields.io/conda/dn/bioconda/openms.svg?style=flat
   :target: https://anaconda.org/bioconda/openms
   :alt:   (downloads)
.. |docker_openms| image:: https://quay.io/repository/biocontainers/openms-meta/status
   :target: https://quay.io/repository/biocontainers/openms-meta
.. _`openms/tags`: https://quay.io/repository/biocontainers/openms?tab=tags


.. raw:: html

    <script>
        var package = "openms-meta";
        var versions = ["3.1.0","3.1.0","3.0.0","3.0.0","2.9.1"];
    </script>


.. conda:package:: openms-meta

   |downloads_openms-meta| |docker_openms-meta|

   :versions:
      
      

      

      

   
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

      mamba install openms-meta

   and update with::

      mamba update openms-meta

  To create a new environment, run::

      mamba create --name myenvname openms-meta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/openms-meta:<tag>

   (see `openms-meta/tags`_ for valid values for ``<tag>``)


.. |downloads_openms-meta| image:: https://img.shields.io/conda/dn/bioconda/openms-meta.svg?style=flat
   :target: https://anaconda.org/bioconda/openms-meta
   :alt:   (downloads)
.. |docker_openms-meta| image:: https://quay.io/repository/biocontainers/openms-meta/status
   :target: https://quay.io/repository/biocontainers/openms-meta
.. _`openms-meta/tags`: https://quay.io/repository/biocontainers/openms-meta?tab=tags


.. raw:: html

    <script>
        var package = "openms-meta";
        var versions = [];
    </script>


.. conda:package:: openms-thirdparty

   |downloads_openms-thirdparty| |docker_openms-thirdparty|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.0-2</code>,  <code>3.1.0-1</code>,  <code>3.0.0-1</code>,  <code>3.0.0-0</code>,  <code>2.9.1-4</code>,  <code>2.9.1-1</code>,  <code>2.9.1-0</code>,  <code>2.9.0-0</code>,  <code>2.8.0-4</code>,  </span></summary>
      

      ``3.1.0-2``,  ``3.1.0-1``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.9.1-4``,  ``2.9.1-1``,  ``2.9.1-0``,  ``2.9.0-0``,  ``2.8.0-4``,  ``2.8.0-3``,  ``2.8.0-2``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.7.0-1``,  ``2.6.0-0``,  ``2.5.0-6``,  ``2.5.0-5``,  ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends comet-ms: ``2023010``
   :depends gnuplot: 
   :depends luciphor2: ``2020_04_03``
   :depends msgf_plus: ``2023.01.1202``
   :depends openms: ``3.1.0 h8964181_2``
   :depends percolator: ``3.5``
   :depends r-gplots: 
   :depends sage-proteomics: ``0.14.3``
   :depends sirius-ms: ``5.8.2``
   :depends thermorawfileparser: ``1.4.3``
   :depends xtandem: ``15.12.15.2``
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

      mamba install openms-thirdparty

   and update with::

      mamba update openms-thirdparty

  To create a new environment, run::

      mamba create --name myenvname openms-thirdparty

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/openms-thirdparty:<tag>

   (see `openms-thirdparty/tags`_ for valid values for ``<tag>``)


.. |downloads_openms-thirdparty| image:: https://img.shields.io/conda/dn/bioconda/openms-thirdparty.svg?style=flat
   :target: https://anaconda.org/bioconda/openms-thirdparty
   :alt:   (downloads)
.. |docker_openms-thirdparty| image:: https://quay.io/repository/biocontainers/openms-meta/status
   :target: https://quay.io/repository/biocontainers/openms-meta
.. _`openms-thirdparty/tags`: https://quay.io/repository/biocontainers/openms-thirdparty?tab=tags


.. raw:: html

    <script>
        var package = "openms-meta";
        var versions = ["3.1.0","3.1.0","3.0.0","3.0.0","2.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/openms-meta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/openms-meta/README.html