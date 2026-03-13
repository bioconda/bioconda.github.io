:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-pave'
.. highlight: bash

hmftools-pave
=============

.. conda:recipe:: hmftools-pave
   :replaces_section_title:
   :noindex:

   PAVE annotates SNV\/MNV\/INDEL calls with consequence on corresponding genes\, transcripts\, and proteins.

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/pave
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-pave <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-pave>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-pave/meta.yaml>`_

   


.. conda:package:: hmftools-pave

   |downloads_hmftools-pave| |docker_hmftools-pave|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.2-0</code>,  <code>1.8.1-0</code>,  <code>1.8-1</code>,  <code>1.8-0</code>,  <code>1.7.1-0</code>,  <code>1.7-0</code>,  <code>1.7_beta-2</code>,  <code>1.7_beta-1</code>,  <code>1.7_beta-0</code>,  </span></summary>
      

      ``1.8.2-0``,  ``1.8.1-0``,  ``1.8-1``,  ``1.8-0``,  ``1.7.1-0``,  ``1.7-0``,  ``1.7_beta-2``,  ``1.7_beta-1``,  ``1.7_beta-0``,  ``1.6-0``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=8,<=21``
   :depends on zlib: 

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

    pixi global install hmftools-pave

to add into an existing workspace instead, run::

    pixi add hmftools-pave

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hmftools-pave

Alternatively, to install into a new environment, run::

    conda create -n envname hmftools-pave

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hmftools-pave:<tag>

(see `hmftools-pave/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hmftools-pave| image:: https://img.shields.io/conda/dn/bioconda/hmftools-pave.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-pave
   :alt:   (downloads)
.. |docker_hmftools-pave| image:: https://quay.io/repository/biocontainers/hmftools-pave/status
   :target: https://quay.io/repository/biocontainers/hmftools-pave
.. _`hmftools-pave/tags`: https://quay.io/repository/biocontainers/hmftools-pave?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-pave";
        var versions = ["1.8.2","1.8.1","1.8","1.8","1.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-pave/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-pave/README.html