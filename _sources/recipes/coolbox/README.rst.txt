:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coolbox'
.. highlight: bash

coolbox
=======

.. conda:recipe:: coolbox
   :replaces_section_title:
   :noindex:

   Jupyter notebook based genomic data visulization toolkit.

   :homepage: https://github.com/GangCaoLab/CoolBox
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`coolbox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coolbox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coolbox/meta.yaml>`_

   


.. conda:package:: coolbox

   |downloads_coolbox| |docker_coolbox|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.0-0</code>,  <code>0.3.9-0</code>,  <code>0.3.8-0</code>,  <code>0.3.7-1</code>,  <code>0.3.7-0</code>,  <code>0.3.6-0</code>,  <code>0.3.5-0</code>,  <code>0.3.4-0</code>,  <code>0.3.3-0</code>,  </span></summary>
      

      ``0.4.0-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-1``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cooler: ``>=0.8.10``
   :depends on dna_features_viewer: 
   :depends on fire: 
   :depends on h5py: 
   :depends on htslib: 
   :depends on intervaltree: 
   :depends on ipywidgets: ``>=7.5.1``
   :depends on jupyter: ``>=1.0.0``
   :depends on matplotlib-base: ``>=3.1.1``
   :depends on nbformat: 
   :depends on numpy: 
   :depends on numpydoc: 
   :depends on pairix: 
   :depends on pandas: ``>=1.0.0``
   :depends on pybbi: 
   :depends on python: ``>=3.7``
   :depends on samtools: ``>=1.10``
   :depends on scipy: ``>=1.0.0``
   :depends on statsmodels: 
   :depends on svgutils: 
   :depends on voila: 

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

    pixi global install coolbox

to add into an existing workspace instead, run::

    pixi add coolbox

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install coolbox

Alternatively, to install into a new environment, run::

    conda create -n envname coolbox

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/coolbox:<tag>

(see `coolbox/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_coolbox| image:: https://img.shields.io/conda/dn/bioconda/coolbox.svg?style=flat
   :target: https://anaconda.org/bioconda/coolbox
   :alt:   (downloads)
.. |docker_coolbox| image:: https://quay.io/repository/biocontainers/coolbox/status
   :target: https://quay.io/repository/biocontainers/coolbox
.. _`coolbox/tags`: https://quay.io/repository/biocontainers/coolbox?tab=tags


.. raw:: html

    <script>
        var package = "coolbox";
        var versions = ["0.4.0","0.3.9","0.3.8","0.3.7","0.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coolbox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coolbox/README.html