:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phabox'
.. highlight: bash

phabox
======

.. conda:recipe:: phabox
   :replaces_section_title:
   :noindex:

   Virus identification and analysis tool set

   :homepage: https://github.com/KennthShang/PhaBOX
   :documentation: https://github.com/KennthShang/PhaBOX/wiki
   
   :license: OTHER / GPL-3.0
   :recipe: /`phabox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phabox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phabox/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioadv/vbad101`, biotools: :biotools:`phabox`

   


.. conda:package:: phabox

   |downloads_phabox| |docker_phabox|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.13-1</code>,  <code>2.1.13-0</code>,  <code>2.1.12-0</code>,  <code>2.1.11-3</code>,  <code>2.1.11-2</code>,  <code>2.1.11-1</code>,  <code>2.1.11-0</code>,  <code>2.1.10-0</code>,  <code>2.1.9-0</code>,  </span></summary>
      

      ``2.1.13-1``,  ``2.1.13-0``,  ``2.1.12-0``,  ``2.1.11-3``,  ``2.1.11-2``,  ``2.1.11-1``,  ``2.1.11-0``,  ``2.1.10-0``,  ``2.1.9-0``,  ``2.1.8-0``,  ``2.1.7-0``,  ``2.1.6-0``,  ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.0-0``,  ``2.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on accelerate: ``>=1.0.1``
   :depends on aragorn: ``>=1.2.41``
   :depends on biopython: ``>=1.84``
   :depends on blast: ``>=2.16.0``
   :depends on datasets: ``>=3``
   :depends on diamond: ``0.9.14.*``
   :depends on fasttree: ``>=2.1.11``
   :depends on joblib: ``1.5.1.*``
   :depends on kcounter: ``>=0.1.1``
   :depends on mafft: ``>=7.525``
   :depends on mcl: ``>=22.282``
   :depends on networkx: ``>=3.4``
   :depends on numpy: ``>=1.26``
   :depends on pandas: ``>=2``
   :depends on prodigal-gv: ``>=2.11.0``
   :depends on pyarrow: ``16.*``
   :depends on python: ``>=3.8``
   :depends on pytorch: ``>=2.4``
   :depends on scikit-learn: ``1.3.2.*``
   :depends on scipy: ``>=1.14``
   :depends on seaborn-base: ``>=0.13.2``
   :depends on transformers: ``4.43.*``

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

    pixi global install phabox

to add into an existing workspace instead, run::

    pixi add phabox

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phabox

Alternatively, to install into a new environment, run::

    conda create -n envname phabox

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phabox:<tag>

(see `phabox/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phabox| image:: https://img.shields.io/conda/dn/bioconda/phabox.svg?style=flat
   :target: https://anaconda.org/bioconda/phabox
   :alt:   (downloads)
.. |docker_phabox| image:: https://quay.io/repository/biocontainers/phabox/status
   :target: https://quay.io/repository/biocontainers/phabox
.. _`phabox/tags`: https://quay.io/repository/biocontainers/phabox?tab=tags


.. raw:: html

    <script>
        var package = "phabox";
        var versions = ["2.1.13","2.1.13","2.1.12","2.1.11","2.1.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phabox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phabox/README.html