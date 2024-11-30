:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcbio-nextgen'
.. highlight: bash

bcbio-nextgen
=============

.. conda:recipe:: bcbio-nextgen
   :replaces_section_title:
   :noindex:

   Validated\, scalable\, community developed variant calling\, RNA\-seq and small RNA analysis

   :homepage: https://github.com/bcbio/bcbio-nextgen
   :license: MIT
   :recipe: /`bcbio-nextgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-nextgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-nextgen/meta.yaml>`_
   :links: biotools: :biotools:`bcbio-nextgen`

   


.. conda:package:: bcbio-nextgen

   |downloads_bcbio-nextgen| |docker_bcbio-nextgen|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.9-3</code>,  <code>1.2.9-2</code>,  <code>1.2.9-1</code>,  <code>1.2.9-0</code>,  <code>1.2.8-0</code>,  <code>1.2.7-0</code>,  <code>1.2.6-0</code>,  <code>1.2.5-0</code>,  <code>1.2.4-0</code>,  </span></summary>
      

      ``1.2.9-3``,  ``1.2.9-2``,  ``1.2.9-1``,  ``1.2.9-0``,  ``1.2.8-0``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.6a-1``,  ``1.1.6a-0``,  ``1.1.5-0``,  ``1.1.5a-1``,  ``1.1.5a-0``,  ``1.1.4-0``,  ``1.1.4a-3``,  ``1.1.4a-2``,  ``1.1.4a-1``,  ``1.1.4a-0``,  ``1.1.3-0``,  ``1.1.3a-4``,  ``1.1.3a-3``,  ``1.1.3a-2``,  ``1.1.3a-1``,  ``1.1.3a-0``,  ``1.1.2-0``,  ``1.1.2a-3``,  ``1.1.2a-2``,  ``1.1.2a-1``,  ``1.1.2a-0``,  ``1.1.1-0``,  ``1.1.1a-12``,  ``1.1.1a-11``,  ``1.1.1a-10``,  ``1.1.1a-9``,  ``1.1.1a-8``,  ``1.1.1a-7``,  ``1.1.1a-6``,  ``1.1.1a-5``,  ``1.1.1a-4``,  ``1.1.1a-3``,  ``1.1.1a-2``,  ``1.1.1a-1``,  ``1.1.1a-0``,  ``1.1.0-0``,  ``1.1.0a-11``,  ``1.1.0a-8``,  ``1.1.0a-7``,  ``1.1.0a-6``,  ``1.1.0a-5``,  ``1.1.0a-4``,  ``1.1.0a-3``,  ``1.1.0a-2``,  ``1.1.0a-1``,  ``1.1.0a-0``,  ``1.0.9-0``,  ``1.0.9a-9``,  ``1.0.9a-8``,  ``1.0.9a-7``,  ``1.0.9a-6``,  ``1.0.9a-5``,  ``1.0.9a-4``,  ``1.0.9a-3``,  ``1.0.9a-2``,  ``1.0.9a-1``,  ``1.0.9a-0``,  ``1.0.8-0``,  ``1.0.8a-5``,  ``1.0.8a-4``,  ``1.0.8a-3``,  ``1.0.8a-2``,  ``1.0.8a-1``,  ``1.0.8a-0``,  ``1.0.7-1``,  ``1.0.7-0``,  ``1.0.7a0-7``,  ``1.0.7a0-6``,  ``1.0.7a0-5``,  ``1.0.7a0-4``,  ``1.0.7a0-3``,  ``1.0.7a0-2``,  ``1.0.7a0-1``,  ``1.0.7a0-0``,  ``1.0.6-0``,  ``1.0.6a0-6``,  ``1.0.6a0-5``,  ``1.0.6a0-4``,  ``1.0.6a0-3``,  ``1.0.6a0-2``,  ``1.0.6a0-1``,  ``1.0.6a0-0``,  ``1.0.5-0``,  ``1.0.5a-6``,  ``1.0.5a-5``,  ``1.0.5a-4``,  ``1.0.5a-3``,  ``1.0.5a-2``,  ``1.0.5a-1``,  ``1.0.5a-0``,  ``1.0.4-0``,  ``1.0.4a0-3``,  ``1.0.4a0-2``,  ``1.0.4a0-1``,  ``1.0.4a0-0``,  ``1.0.3-0``,  ``1.0.3a-10``,  ``1.0.3a-9``,  ``1.0.3a-8``,  ``1.0.3a-7``,  ``1.0.3a-6``,  ``1.0.3a-5``,  ``1.0.3a-4``,  ``1.0.3a-3``,  ``1.0.3a-2``,  ``1.0.3a-1``,  ``1.0.3a-0``,  ``1.0.2-0``,  ``1.0.2a-1``,  ``1.0.2a-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.1a0-4``,  ``1.0.1a0-3``,  ``1.0.1a0-2``,  ``1.0.1a0-1``,  ``1.0.1a0-0``,  ``1.0.0-0``,  ``1.0.0a0-8``,  ``1.0.0a0-7``,  ``1.0.0a0-6``,  ``1.0.0a0-5``,  ``1.0.0a0-4``,  ``1.0.0a0-3``,  ``1.0.0a0-1``,  ``1.0.0a0-0``,  ``0.9.9-0``,  ``0.9.9a0-4``,  ``0.9.9a0-3``,  ``0.9.9a0-2``,  ``0.9.9a0-1``,  ``0.9.9a0-0``,  ``0.9.8-0``,  ``0.9.8a0-7``,  ``0.9.8a0-6``,  ``0.9.8a0-5``,  ``0.9.8a0-4``,  ``0.9.8a0-3``,  ``0.9.8a0-2``,  ``0.9.8a0-1``,  ``0.9.8a0-0``,  ``0.9.7-0``,  ``0.9.7a-5``,  ``0.9.7a-4``,  ``0.9.7a-3``,  ``0.9.7a-2``,  ``0.9.7a-1``,  ``0.9.7a-0``,  ``0.9.6-0``,  ``0.9.6a-3``,  ``0.9.6a-2``,  ``0.9.6a-1``,  ``0.9.6a-0``,  ``0.9.5-1``

      
      .. raw:: html

         </details>
      

   
   :depends arrow: 
   :depends beautifulsoup4: 
   :depends bioblend: 
   :depends biopython: 
   :depends boto: 
   :depends cyvcf2: 
   :depends dnapi: 
   :depends fadapa: 
   :depends geneimpacts: 
   :depends gffutils: 
   :depends h5py: 
   :depends htslib: 
   :depends ipyparallel: ``6.3.0.*``
   :depends ipython-cluster-helper: ``0.6.4 py_0``
   :depends joblib: ``>=0.12``
   :depends logbook: 
   :depends matplotlib-base: 
   :depends mock: 
   :depends msgpack-python: 
   :depends openssl: ``<3.0.0``
   :depends pandas: 
   :depends pip: 
   :depends psutil: 
   :depends py: 
   :depends pybedtools: 
   :depends pycrypto: 
   :depends pysam: ``>=0.13.0``
   :depends pytest: 
   :depends pytest-cov: ``>=2.6.1``
   :depends pytest-mock: 
   :depends python: 
   :depends python-dateutil: ``>=2.5.0``
   :depends pyvcf: 
   :depends pyyaml: 
   :depends requests: 
   :depends scipy: ``>=1.3.0``
   :depends seaborn: 
   :depends seqcluster: 
   :depends statsmodels: 
   :depends tabulate: 
   :depends toolz: 
   :depends yamllint: 
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

      mamba install bcbio-nextgen

   and update with::

      mamba update bcbio-nextgen

  To create a new environment, run::

      mamba create --name myenvname bcbio-nextgen

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bcbio-nextgen:<tag>

   (see `bcbio-nextgen/tags`_ for valid values for ``<tag>``)


.. |downloads_bcbio-nextgen| image:: https://img.shields.io/conda/dn/bioconda/bcbio-nextgen.svg?style=flat
   :target: https://anaconda.org/bioconda/bcbio-nextgen
   :alt:   (downloads)
.. |docker_bcbio-nextgen| image:: https://quay.io/repository/biocontainers/bcbio-nextgen/status
   :target: https://quay.io/repository/biocontainers/bcbio-nextgen
.. _`bcbio-nextgen/tags`: https://quay.io/repository/biocontainers/bcbio-nextgen?tab=tags


.. raw:: html

    <script>
        var package = "bcbio-nextgen";
        var versions = ["1.2.9","1.2.9","1.2.9","1.2.9","1.2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbio-nextgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbio-nextgen/README.html