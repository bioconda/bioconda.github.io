:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqcluster'
.. highlight: bash

seqcluster
==========

.. conda:recipe:: seqcluster
   :replaces_section_title:
   :noindex:

   small RNA analysis from NGS data

   :homepage: https://github.com/lpantano/seqclsuter
   :license: MIT
   :recipe: /`seqcluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqcluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqcluster/meta.yaml>`_
   :links: biotools: :biotools:`seqcluster`

   


.. conda:package:: seqcluster

   |downloads_seqcluster| |docker_seqcluster|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.9-0</code>,  <code>1.2.8-0</code>,  <code>1.2.7-1</code>,  <code>1.2.7-0</code>,  <code>1.2.5-0</code>,  <code>1.2.4-0</code>,  <code>1.2.4a15-1</code>,  <code>1.2.4a15-0</code>,  <code>1.2.4a14-2</code>,  </span></summary>
      

      ``1.2.9-0``,  ``1.2.8-0``,  ``1.2.7-1``,  ``1.2.7-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.4a15-1``,  ``1.2.4a15-0``,  ``1.2.4a14-2``,  ``1.2.4a14-1``,  ``1.2.4a14-0``,  ``1.2.4a12-1``,  ``1.2.4a12-0``,  ``1.2.4a6-0``,  ``1.2.4a5-0``,  ``1.2.4a-6``,  ``1.2.4a-5``,  ``1.2.4a-4``,  ``1.2.4a-2``,  ``1.2.4a-1``,  ``1.2.4a-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.14-0``,  ``1.1.13-3``,  ``1.1.13-2``,  ``1.1.13-1``,  ``1.1.13-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends mirtop: 
   :depends pandas: 
   :depends progressbar2: 
   :depends pybedtools: 
   :depends pysam: 
   :depends python: 
   :depends pyyaml: 
   :depends scipy: 
   :depends six: 
   :depends viennarna: 
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

      mamba install seqcluster

   and update with::

      mamba update seqcluster

  To create a new environment, run::

      mamba create --name myenvname seqcluster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqcluster:<tag>

   (see `seqcluster/tags`_ for valid values for ``<tag>``)


.. |downloads_seqcluster| image:: https://img.shields.io/conda/dn/bioconda/seqcluster.svg?style=flat
   :target: https://anaconda.org/bioconda/seqcluster
   :alt:   (downloads)
.. |docker_seqcluster| image:: https://quay.io/repository/biocontainers/seqcluster/status
   :target: https://quay.io/repository/biocontainers/seqcluster
.. _`seqcluster/tags`: https://quay.io/repository/biocontainers/seqcluster?tab=tags


.. raw:: html

    <script>
        var package = "seqcluster";
        var versions = ["1.2.9","1.2.8","1.2.7","1.2.7","1.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqcluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqcluster/README.html