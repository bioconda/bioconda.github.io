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
      

   
   :depends on bedtools: 
   :depends on pandas: 
   :depends on pybedtools: 
   :depends on python: 
   :depends on r-base: 
   :depends on r-gprofiler: 
   :depends on r-rcurl: 
   :depends on wget: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install behst

to add into an existing workspace instead, run::

    pixi add behst

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install behst

Alternatively, to install into a new environment, run::

    conda create -n envname behst

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/behst:<tag>

(see `behst/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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