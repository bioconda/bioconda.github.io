:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pggb'
.. highlight: bash

pggb
====

.. conda:recipe:: pggb
   :replaces_section_title:
   :noindex:

   PanGenome Graph Building pipeline renders

   :homepage: https://github.com/pangenome/pggb
   :license: MIT
   :recipe: /`pggb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pggb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pggb/meta.yaml>`_

   


.. conda:package:: pggb

   |downloads_pggb| |docker_pggb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.4-0</code>,  <code>0.7.3-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.0-1</code>,  <code>0.6.0-0</code>,  <code>0.5.4-0</code>,  <code>0.5.3-2</code>,  </span></summary>
      

      ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.4-0``,  ``0.5.3-2``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bc: 
   :depends on bcftools: 
   :depends on gfaffix: ``0.2.1``
   :depends on gsl: ``2.7.0.*``
   :depends on multiqc: ``1.22``
   :depends on odgi: ``0.9.2``
   :depends on pigz: 
   :depends on python-igraph: ``0.11.5``
   :depends on seqwish: ``0.7.11``
   :depends on smoothxg: ``0.8.2``
   :depends on tabix: 
   :depends on time: 
   :depends on vcfbub: ``0.1.1``
   :depends on vcflib: ``1.0.10``
   :depends on vg: ``1.63.1``
   :depends on wfmash: ``0.14.0``

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

    pixi global install pggb

to add into an existing workspace instead, run::

    pixi add pggb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pggb

Alternatively, to install into a new environment, run::

    conda create -n envname pggb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pggb:<tag>

(see `pggb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pggb| image:: https://img.shields.io/conda/dn/bioconda/pggb.svg?style=flat
   :target: https://anaconda.org/bioconda/pggb
   :alt:   (downloads)
.. |docker_pggb| image:: https://quay.io/repository/biocontainers/pggb/status
   :target: https://quay.io/repository/biocontainers/pggb
.. _`pggb/tags`: https://quay.io/repository/biocontainers/pggb?tab=tags


.. raw:: html

    <script>
        var package = "pggb";
        var versions = ["0.7.4","0.7.3","0.7.2","0.7.1","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pggb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pggb/README.html