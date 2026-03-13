:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dfast_qc'
.. highlight: bash

dfast_qc
========

.. conda:recipe:: dfast_qc
   :replaces_section_title:
   :noindex:

   DFAST\_QC\: Taxonomy and completeness check for prokaryotic genomes

   :homepage: https://dfast.nig.ac.jp
   :developer docs: https://github.com/nigyta/dfast_qc
   :license: GPLv3
   :recipe: /`dfast_qc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dfast_qc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dfast_qc/meta.yaml>`_

   


.. conda:package:: dfast_qc

   |downloads_dfast_qc| |docker_dfast_qc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.7-0</code>,  <code>1.0.6-0</code>,  <code>1.0.5-0</code>,  <code>1.0.4-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.5.7-0</code>,  <code>0.5.6-0</code>,  </span></summary>
      

      ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.5.7-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.1-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.5-1``,  ``0.2.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on checkm-genome: ``1.2.2``
   :depends on ete3: 
   :depends on gsl: ``2.6``
   :depends on hmmer: 
   :depends on mash: 
   :depends on more-itertools: 
   :depends on peewee: 
   :depends on prodigal: 
   :depends on python: ``>=3.8``
   :depends on skani: 

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

    pixi global install dfast_qc

to add into an existing workspace instead, run::

    pixi add dfast_qc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dfast_qc

Alternatively, to install into a new environment, run::

    conda create -n envname dfast_qc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dfast_qc:<tag>

(see `dfast_qc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dfast_qc| image:: https://img.shields.io/conda/dn/bioconda/dfast_qc.svg?style=flat
   :target: https://anaconda.org/bioconda/dfast_qc
   :alt:   (downloads)
.. |docker_dfast_qc| image:: https://quay.io/repository/biocontainers/dfast_qc/status
   :target: https://quay.io/repository/biocontainers/dfast_qc
.. _`dfast_qc/tags`: https://quay.io/repository/biocontainers/dfast_qc?tab=tags


.. raw:: html

    <script>
        var package = "dfast_qc";
        var versions = ["1.0.7","1.0.6","1.0.5","1.0.4","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dfast_qc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dfast_qc/README.html