:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'midas'
.. highlight: bash

midas
=====

.. conda:recipe:: midas
   :replaces_section_title:
   :noindex:

   An integrated pipeline for estimating strain\-level genomic variation from metagenomic data

   :homepage: https://github.com/snayfach/MIDAS
   :license: GPL / GPL-3.0
   :recipe: /`midas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/midas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/midas/meta.yaml>`_

   


.. conda:package:: midas

   |downloads_midas| |docker_midas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.2-7</code>,  <code>1.3.2-6</code>,  <code>1.3.2-5</code>,  <code>1.3.2-4</code>,  <code>1.3.2-3</code>,  <code>1.3.2-2</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  </span></summary>
      

      ``1.3.2-7``,  ``1.3.2-6``,  ``1.3.2-5``,  ``1.3.2-4``,  ``1.3.2-3``,  ``1.3.2-2``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.2-1``,  ``1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.6.2``
   :depends on bowtie2: ``2.3.2.*``
   :depends on hs-blastn: 
   :depends on numpy: ``>=1.7.0``
   :depends on pandas: ``>=0.17.1``
   :depends on pysam: ``>=0.8.1``
   :depends on python: ``>=2.7``
   :depends on samtools: ``1.4.0.*``

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

    pixi global install midas

to add into an existing workspace instead, run::

    pixi add midas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install midas

Alternatively, to install into a new environment, run::

    conda create -n envname midas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/midas:<tag>

(see `midas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_midas| image:: https://img.shields.io/conda/dn/bioconda/midas.svg?style=flat
   :target: https://anaconda.org/bioconda/midas
   :alt:   (downloads)
.. |docker_midas| image:: https://quay.io/repository/biocontainers/midas/status
   :target: https://quay.io/repository/biocontainers/midas
.. _`midas/tags`: https://quay.io/repository/biocontainers/midas?tab=tags


.. raw:: html

    <script>
        var package = "midas";
        var versions = ["1.3.2","1.3.2","1.3.2","1.3.2","1.3.2"];
    </script>





Notes
-----
MIDAS requires reference database that needs to be additionally downloaded and set\, https\:\/\/github.com\/snayfach\/MIDAS\/blob\/master\/docs\/ref\_db.md.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/midas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/midas/README.html