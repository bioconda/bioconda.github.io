:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'behst'
.. highlight: bash

behst
=====

.. conda:recipe:: behst
   :replaces_section_title:
   :noindex:

   BEHST reads an input dataset of chromosome regions\, and intersects them with the chromatin interactions available in the Hi\-C dataset. Of these chromosome regions\, BEHST selects those that are presentthe regulatory regions of genes of APPRIS\, a dataset of principal isoform annotations. We defined these cis\-regulatory regions upon the position of their nearest transcription start site of the APPRIS genes\' principal transcripts \(obtained through GENCODE\)\, plus an upstream and downstream extension. Afterwards\, BEHST takes the genes of the resulting partner loci found in gene regulatory regions\, and performs a gene set enrichment analysis on them through g\:Profiler. BEHST\, finally\, outputs the list of the most significant Gene Ontology terms detected by g\:Profiler. Citation\: Davide Chicco\, Haixin Sarah Bi\, Juri Reimand\, and Michael M. Hoffman\, \'BEHST\: Genomic set enrichment analysis enhanced through integration of chromatin long\-range interactions\'\, 2018. In preparation. Website\: http\:\/\/behst.hoffmanlab.org\/ 

   :homepage: https://bitbucket.org/hoffmanlab/behst/overview
   :license: GPLv2
   :recipe: /`behst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/behst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/behst/meta.yaml>`_

   


.. conda:package:: behst

   |downloads_behst| |docker_behst|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.8-0</code>,  <code>3.7-1</code>,  <code>3.7-0</code>,  <code>3.6-0</code>,  <code>3.5-0</code>,  <code>3.0-0</code>,  <code>2.9-0</code>,  <code>2.8-0</code>,  <code>2.7-0</code>,  </span></summary>
      

      ``3.8-0``,  ``3.7-1``,  ``3.7-0``,  ``3.6-0``,  ``3.5-0``,  ``3.0-0``,  ``2.9-0``,  ``2.8-0``,  ``2.7-0``,  ``2.6-0``,  ``2.5-0``,  ``1.9-0``,  ``1.8-0``,  ``1.7-0``,  ``1.6-0``,  ``1.4-0``,  ``0.9-0``,  ``0.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends pandas: 
   :depends pybedtools: 
   :depends python: 
   :depends r-base: 
   :depends r-gprofiler: 
   :depends r-rcurl: 
   :depends wget: 
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

      mamba install behst

   and update with::

      mamba update behst

  To create a new environment, run::

      mamba create --name myenvname behst

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/behst:<tag>

   (see `behst/tags`_ for valid values for ``<tag>``)


.. |downloads_behst| image:: https://img.shields.io/conda/dn/bioconda/behst.svg?style=flat
   :target: https://anaconda.org/bioconda/behst
   :alt:   (downloads)
.. |docker_behst| image:: https://quay.io/repository/biocontainers/behst/status
   :target: https://quay.io/repository/biocontainers/behst
.. _`behst/tags`: https://quay.io/repository/biocontainers/behst?tab=tags


.. raw:: html

    <script>
        var package = "behst";
        var versions = ["3.8","3.7","3.7","3.6","3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/behst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/behst/README.html