:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orthanq'
.. highlight: bash

orthanq
=======

.. conda:recipe:: orthanq
   :replaces_section_title:
   :noindex:

   Uncertainty aware HLA typing and general haplotype quantification.

   :homepage: https://github.com/orthanq/orthanq
   :documentation: https://orthanq.github.io
   
   :license: MIT / MIT
   :recipe: /`orthanq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthanq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthanq/meta.yaml>`_

   


.. conda:package:: orthanq

   |downloads_orthanq| |docker_orthanq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.17.0-0</code>,  <code>1.16.1-0</code>,  <code>1.16.0-0</code>,  <code>1.15.0-0</code>,  <code>1.14.0-0</code>,  <code>1.13.0-0</code>,  <code>1.12.1-1</code>,  <code>1.12.1-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.17.0-0``,  ``1.16.1-0``,  ``1.16.0-0``,  ``1.15.0-0``,  ``1.14.0-0``,  ``1.13.0-0``,  ``1.12.1-1``,  ``1.12.1-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.3-0``,  ``1.9.2-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.7.9-1``,  ``1.7.9-0``,  ``1.7.8-0``,  ``1.7.7-0``,  ``1.7.6-0``,  ``1.7.5-0``,  ``1.7.4-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-2``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.2-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bwa: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends coin-or-cbc: ``>=2.10.12,<2.11.0a0``
   :depends fontconfig: ``>=2.15.0,<3.0a0``
   :depends fonts-conda-ecosystem: 
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends htslib: 
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.8.1,<6.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends minimap2: 
   :depends openssl: ``>=3.5.4,<4.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: ``1.20``
   :depends varlociraptor: ``8.7.3``
   :depends vg: ``1.63.1``
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

      mamba install orthanq

   and update with::

      mamba update orthanq

  To create a new environment, run::

      mamba create --name myenvname orthanq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/orthanq:<tag>

   (see `orthanq/tags`_ for valid values for ``<tag>``)


.. |downloads_orthanq| image:: https://img.shields.io/conda/dn/bioconda/orthanq.svg?style=flat
   :target: https://anaconda.org/bioconda/orthanq
   :alt:   (downloads)
.. |docker_orthanq| image:: https://quay.io/repository/biocontainers/orthanq/status
   :target: https://quay.io/repository/biocontainers/orthanq
.. _`orthanq/tags`: https://quay.io/repository/biocontainers/orthanq?tab=tags


.. raw:: html

    <script>
        var package = "orthanq";
        var versions = ["1.17.0","1.16.1","1.16.0","1.15.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orthanq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orthanq/README.html