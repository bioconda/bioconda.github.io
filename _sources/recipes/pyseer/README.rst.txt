:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyseer'
.. highlight: bash

pyseer
======

.. conda:recipe:: pyseer
   :replaces_section_title:
   :noindex:

   Sequence Element Enrichment Analysis \(SEER\)\, python implementation

   :homepage: https://github.com/mgalardini/pyseer
   :license: APACHE / Apache-2.0
   :recipe: /`pyseer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyseer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyseer/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty539`, doi: :doi:`10.1101/852426v1`

   


.. conda:package:: pyseer

   |downloads_pyseer| |docker_pyseer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.12-0</code>,  <code>1.3.11-0</code>,  <code>1.3.10-0</code>,  <code>1.3.9-0</code>,  <code>1.3.8-0</code>,  <code>1.3.7-0</code>,  <code>1.3.6-1</code>,  <code>1.3.6-0</code>,  <code>1.3.5-0</code>,  </span></summary>
      

      ``1.3.12-0``,  ``1.3.11-0``,  ``1.3.10-0``,  ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-1``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.2-0``,  ``0.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedops: 
   :depends bedtools: 
   :depends bwa: 
   :depends dendropy: 
   :depends glmnet_py: 
   :depends mash: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pysam: ``>=0.15.3``
   :depends python: 
   :depends python-dateutil: ``>=2.5.0``
   :depends scikit-learn: 
   :depends scipy: 
   :depends statsmodels: ``>=0.10``
   :depends tqdm: 
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

      mamba install pyseer

   and update with::

      mamba update pyseer

  To create a new environment, run::

      mamba create --name myenvname pyseer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyseer:<tag>

   (see `pyseer/tags`_ for valid values for ``<tag>``)


.. |downloads_pyseer| image:: https://img.shields.io/conda/dn/bioconda/pyseer.svg?style=flat
   :target: https://anaconda.org/bioconda/pyseer
   :alt:   (downloads)
.. |docker_pyseer| image:: https://quay.io/repository/biocontainers/pyseer/status
   :target: https://quay.io/repository/biocontainers/pyseer
.. _`pyseer/tags`: https://quay.io/repository/biocontainers/pyseer?tab=tags


.. raw:: html

    <script>
        var package = "pyseer";
        var versions = ["1.3.12","1.3.11","1.3.10","1.3.9","1.3.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyseer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyseer/README.html