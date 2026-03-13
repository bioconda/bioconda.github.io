:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mqc'
.. highlight: bash

mqc
===

.. conda:recipe:: mqc
   :replaces_section_title:
   :noindex:

   qualtiy control tool to assess the mapping quality of a ribosome profiling experiment

   :homepage: https://github.com/Biobix/mQC
   :license: GNU General Public License v3.0
   :recipe: /`mqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mqc/meta.yaml>`_

   


.. conda:package:: mqc

   |downloads_mqc| |docker_mqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.10-1</code>,  <code>1.10-0</code>,  <code>1.9-0</code>,  <code>1.8-0</code>,  <code>1.7-0</code>,  <code>1.6-0</code>,  <code>1.5-0</code>,  <code>1.4-0</code>,  <code>1.3-0</code>,  </span></summary>
      

      ``1.10-1``,  ``1.10-0``,  ``1.9-0``,  ``1.8-0``,  ``1.7-0``,  ``1.6-0``,  ``1.5-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on matplotlib: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on perl: ``5.22.0*``
   :depends on perl-app-cpanminus: 
   :depends on perl-dbd-sqlite: 
   :depends on perl-dbi: 
   :depends on perl-parallel-forkmanager: 
   :depends on plastid: ``0.4.7 py27_0``
   :depends on pysam: ``0.11*``
   :depends on python: ``2.7*``
   :depends on r-base: ``3.4.1*``
   :depends on samtools: 
   :depends on seaborn: 

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

    pixi global install mqc

to add into an existing workspace instead, run::

    pixi add mqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mqc

Alternatively, to install into a new environment, run::

    conda create -n envname mqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mqc:<tag>

(see `mqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mqc| image:: https://img.shields.io/conda/dn/bioconda/mqc.svg?style=flat
   :target: https://anaconda.org/bioconda/mqc
   :alt:   (downloads)
.. |docker_mqc| image:: https://quay.io/repository/biocontainers/mqc/status
   :target: https://quay.io/repository/biocontainers/mqc
.. _`mqc/tags`: https://quay.io/repository/biocontainers/mqc?tab=tags


.. raw:: html

    <script>
        var package = "mqc";
        var versions = ["1.10","1.10","1.9","1.8","1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mqc/README.html