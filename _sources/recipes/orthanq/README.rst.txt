:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orthanq'
.. highlight: bash

orthanq
=======

.. conda:recipe:: orthanq
   :replaces_section_title:
   :noindex:

   Uncertainty aware HLA typing and general haplotype quantification

   :homepage: https://github.com/orthanq/orthanq
   :license: MIT / MIT
   :recipe: /`orthanq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthanq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthanq/meta.yaml>`_

   


.. conda:package:: orthanq

   |downloads_orthanq| |docker_orthanq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.2-0</code>,  <code>1.7.1-0</code>,  <code>1.7.0-2</code>,  <code>1.7.0-1</code>,  <code>1.7.0-0</code>,  <code>1.6.0-0</code>,  <code>1.5.0-1</code>,  <code>1.5.0-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-2``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.2-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bwa: ``>=0.7.18,<0.8.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends clangdev: 
   :depends coincbc: 
   :depends fontconfig: ``>=2.14.2,<3.0a0``
   :depends fonts-conda-ecosystem: 
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends hdf5: ``1.10.5.*``
   :depends hdf5: ``>=1.10.5,<1.10.6.0a0``
   :depends htslib: ``>=1.20,<1.21.0a0``
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends minimap2: ``>=2.28,<3.0a0``
   :depends openssl: ``>=3.3.1,<4.0a0``
   :depends samtools: ``>=1.19.2,<2.0a0``
   :depends varlociraptor: ``>=8.4.7,<9.0a0``
   :depends vg: ``>=1.56.0,<2.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :depends zlib: 
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
        var versions = ["1.7.2","1.7.1","1.7.0","1.7.0","1.7.0"];
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