:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metagraph'
.. highlight: bash

metagraph
=========

.. conda:recipe:: metagraph
   :replaces_section_title:
   :noindex:

   Ultra Scalable Framework for DNA Search\, Alignment\, Assembly

   :homepage: https://github.com/ratschlab/metagraph
   :documentation: https://metagraph.ethz.ch
   
   :license: MIT / MIT
   :recipe: /`metagraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagraph/meta.yaml>`_

   The MetaGraph framework allows for indexing and analysis of very large biological sequence collections\, producing compressed indexes that can represent several petabases of input data. The indexes can be efficiently queried with any query sequence of interest.



.. conda:package:: metagraph

   |downloads_metagraph| |docker_metagraph|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.6-3</code>,  <code>0.3.6-2</code>,  <code>0.3.6-1</code>,  <code>0.3.6-0</code>,  <code>0.3.5-0</code>,  <code>0.3.4-1</code>,  <code>0.3.4-0</code>,  <code>0.3.3-1</code>,  <code>0.3.3-0</code>,  </span></summary>
      

      ``0.3.6-3``,  ``0.3.6-2``,  ``0.3.6-1``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.2.0-0``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends jemalloc: 
   :depends libgcc-ng: ``>=12``
   :depends libgomp: 
   :depends libjemalloc: ``>=5.3.0``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install metagraph

   and update with::

      mamba update metagraph

  To create a new environment, run::

      mamba create --name myenvname metagraph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metagraph:<tag>

   (see `metagraph/tags`_ for valid values for ``<tag>``)


.. |downloads_metagraph| image:: https://img.shields.io/conda/dn/bioconda/metagraph.svg?style=flat
   :target: https://anaconda.org/bioconda/metagraph
   :alt:   (downloads)
.. |docker_metagraph| image:: https://quay.io/repository/biocontainers/metagraph/status
   :target: https://quay.io/repository/biocontainers/metagraph
.. _`metagraph/tags`: https://quay.io/repository/biocontainers/metagraph?tab=tags


.. raw:: html

    <script>
        var package = "metagraph";
        var versions = ["0.3.6","0.3.6","0.3.6","0.3.6","0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metagraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metagraph/README.html