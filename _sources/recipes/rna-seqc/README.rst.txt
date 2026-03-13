:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rna-seqc'
.. highlight: bash

rna-seqc
========

.. conda:recipe:: rna-seqc
   :replaces_section_title:
   :noindex:

   Fast\, efficient RNA\-Seq metrics for quality control and process optimization.

   :homepage: https://github.com/broadinstitute/rnaseqc
   :documentation: https://github.com/getzlab/rnaseqc/blob/v2.4.2/README.md
   
   :license: `BSD / BSD-3-Clause <https://raw.githubusercontent.com/broadinstitute/rnaseqc/master/LICENSE>`_
   :recipe: /`rna-seqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rna-seqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rna-seqc/meta.yaml>`_
   :links: biotools: :biotools:`rna-seqc`, doi: :doi:`10.1093/bioinformatics/btab135`

   


.. conda:package:: rna-seqc

   |downloads_rna-seqc| |docker_rna-seqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.2-1</code>,  <code>2.4.2-0</code>,  <code>2.3.5-6</code>,  <code>2.3.5-5</code>,  <code>2.3.5-4</code>,  <code>2.3.5-3</code>,  <code>2.3.5-2</code>,  <code>2.3.5-1</code>,  <code>2.3.5-0</code>,  </span></summary>
      

      ``2.4.2-1``,  ``2.4.2-0``,  ``2.3.5-6``,  ``2.3.5-5``,  ``2.3.5-4``,  ``2.3.5-3``,  ``2.3.5-2``,  ``2.3.5-1``,  ``2.3.5-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``1.1.8-2``,  ``1.1.8-1``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on curl: 
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.6.3,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install rna-seqc

to add into an existing workspace instead, run::

    pixi add rna-seqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rna-seqc

Alternatively, to install into a new environment, run::

    conda create -n envname rna-seqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rna-seqc:<tag>

(see `rna-seqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rna-seqc| image:: https://img.shields.io/conda/dn/bioconda/rna-seqc.svg?style=flat
   :target: https://anaconda.org/bioconda/rna-seqc
   :alt:   (downloads)
.. |docker_rna-seqc| image:: https://quay.io/repository/biocontainers/rna-seqc/status
   :target: https://quay.io/repository/biocontainers/rna-seqc
.. _`rna-seqc/tags`: https://quay.io/repository/biocontainers/rna-seqc?tab=tags


.. raw:: html

    <script>
        var package = "rna-seqc";
        var versions = ["2.4.2","2.4.2","2.3.5","2.3.5","2.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rna-seqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rna-seqc/README.html