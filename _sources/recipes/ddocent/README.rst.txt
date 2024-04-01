:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ddocent'
.. highlight: bash

ddocent
=======

.. conda:recipe:: ddocent
   :replaces_section_title:
   :noindex:

   dDocent is an interactive bash wrapper to QC\, assemble\, map\, and call SNPs from all types of RAD data

   :homepage: https://ddocent.com
   :documentation: https://www.ddocent.com/UserGuide/
   
   :developer docs: https://github.com/jpuritz/dDocent
   :license: MIT / MIT
   :recipe: /`ddocent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddocent>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddocent/meta.yaml>`_

   


.. conda:package:: ddocent

   |downloads_ddocent| |docker_ddocent|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.9.7-0</code>,  <code>2.9.4-1</code>,  <code>2.9.4-0</code>,  <code>2.8.13-3</code>,  <code>2.8.13-2</code>,  <code>2.8.13-1</code>,  <code>2.8.13-0</code>,  <code>2.8.12-0</code>,  <code>2.7.8-4</code>,  </span></summary>
      

      ``2.9.7-0``,  ``2.9.4-1``,  ``2.9.4-0``,  ``2.8.13-3``,  ``2.8.13-2``,  ``2.8.13-1``,  ``2.8.13-0``,  ``2.8.12-0``,  ``2.7.8-4``,  ``2.7.8-3``,  ``2.7.8-2``,  ``2.7.8-1``,  ``2.7.8-0``,  ``2.7.7-0``,  ``2.7.6-0``,  ``2.6.0-2``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.5.6-0``,  ``2.5.5-0``,  ``2.5.2-1``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.3.8-0``,  ``2.2.25-2``,  ``2.2.25-1``,  ``2.2.25-0``,  ``2.2.20-0``,  ``2.2.19-0``,  ``2.2.16-0``,  ``2.2.15-0``,  ``2.2.13-0``,  ``2.2.8-0``,  ``2.2.7-0``,  ``2.2.4-0``,  ``2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedops: 
   :depends bedtools: ``>=2.26.0``
   :depends bwa: ``>=0.7.13``
   :depends cd-hit: 
   :depends coreutils: ``>=8.22``
   :depends curl: 
   :depends fastp: ``>=0.20.0``
   :depends freebayes: ``>=1``
   :depends gnuplot: 
   :depends grep: 
   :depends mawk: 
   :depends parallel: 
   :depends pear: 
   :depends rainbow: 
   :depends samtools: ``>=1.6``
   :depends sed: 
   :depends seqtk: ``>=1.3``
   :depends unzip: 
   :depends vcflib: ``>=0.1.11``
   :depends vcftools: ``>=0.1.15``
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

      mamba install ddocent

   and update with::

      mamba update ddocent

  To create a new environment, run::

      mamba create --name myenvname ddocent

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ddocent:<tag>

   (see `ddocent/tags`_ for valid values for ``<tag>``)


.. |downloads_ddocent| image:: https://img.shields.io/conda/dn/bioconda/ddocent.svg?style=flat
   :target: https://anaconda.org/bioconda/ddocent
   :alt:   (downloads)
.. |docker_ddocent| image:: https://quay.io/repository/biocontainers/ddocent/status
   :target: https://quay.io/repository/biocontainers/ddocent
.. _`ddocent/tags`: https://quay.io/repository/biocontainers/ddocent?tab=tags


.. raw:: html

    <script>
        var package = "ddocent";
        var versions = ["2.9.7","2.9.4","2.9.4","2.8.13","2.8.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ddocent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ddocent/README.html