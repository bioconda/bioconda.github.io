:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atol-qc-raw-shortread'
.. highlight: bash

atol-qc-raw-shortread
=====================

.. conda:recipe:: atol-qc-raw-shortread
   :replaces_section_title:
   :noindex:

   Run short read QC on Hi\-C or other Illumina reads.

   :homepage: https://github.com/TomHarrop/atol-qc-raw-shortread
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`atol-qc-raw-shortread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atol-qc-raw-shortread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atol-qc-raw-shortread/meta.yaml>`_

   


.. conda:package:: atol-qc-raw-shortread

   |downloads_atol-qc-raw-shortread| |docker_atol-qc-raw-shortread|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.0-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  <code>0.1.7-0</code>,  <code>0.1.6-0</code>,  <code>0.1.5-0</code>,  <code>0.1.4-0</code>,  <code>0.1.3-0</code>,  </span></summary>
      

      ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bbmap: ``<=38.95``
   :depends on pandas: ``>=2.3.3,<3``
   :depends on python: ``>=3.12,<3.13``
   :depends on samtools: ``>=1.23``
   :depends on snakemake: ``>=9.11.6,<10``

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

    pixi global install atol-qc-raw-shortread

to add into an existing workspace instead, run::

    pixi add atol-qc-raw-shortread

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install atol-qc-raw-shortread

Alternatively, to install into a new environment, run::

    conda create -n envname atol-qc-raw-shortread

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/atol-qc-raw-shortread:<tag>

(see `atol-qc-raw-shortread/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_atol-qc-raw-shortread| image:: https://img.shields.io/conda/dn/bioconda/atol-qc-raw-shortread.svg?style=flat
   :target: https://anaconda.org/bioconda/atol-qc-raw-shortread
   :alt:   (downloads)
.. |docker_atol-qc-raw-shortread| image:: https://quay.io/repository/biocontainers/atol-qc-raw-shortread/status
   :target: https://quay.io/repository/biocontainers/atol-qc-raw-shortread
.. _`atol-qc-raw-shortread/tags`: https://quay.io/repository/biocontainers/atol-qc-raw-shortread?tab=tags


.. raw:: html

    <script>
        var package = "atol-qc-raw-shortread";
        var versions = ["0.3.0","0.2.2","0.2.1","0.2.0","0.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atol-qc-raw-shortread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atol-qc-raw-shortread/README.html