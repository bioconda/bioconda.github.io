:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pychopper'
.. highlight: bash

pychopper
=========

.. conda:recipe:: pychopper
   :replaces_section_title:
   :noindex:

   A tool to identify\, orient and rescue full length cDNA reads from nanopore data.

   :homepage: https://github.com/epi2me-labs/pychopper
   :license: Mozilla Public License 2.0
   :recipe: /`pychopper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pychopper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pychopper/meta.yaml>`_

   


.. conda:package:: pychopper

   |downloads_pychopper| |docker_pychopper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.7.10-0</code>,  <code>2.7.9-0</code>,  <code>2.5.0-0</code>,  <code>2.4.0-0</code>,  <code>2.3.1-1</code>,  <code>2.3.1-0</code>,  <code>2.3.0-0</code>,  <code>2.2.2-1</code>,  <code>2.2.2-0</code>,  </span></summary>
      

      ``2.7.10-0``,  ``2.7.9-0``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.2-1``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.3-1``,  ``2.0.3-0``,  ``0.6.1-0``,  ``0.5.0-0``,  ``0.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on hmmer: ``>=3.2``
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on parasail-python: 
   :depends on pysam: 
   :depends on python: ``>=3``
   :depends on python-edlib: 
   :depends on seaborn: 
   :depends on six: 
   :depends on tqdm: 

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

    pixi global install pychopper

to add into an existing workspace instead, run::

    pixi add pychopper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pychopper

Alternatively, to install into a new environment, run::

    conda create -n envname pychopper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pychopper:<tag>

(see `pychopper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pychopper| image:: https://img.shields.io/conda/dn/bioconda/pychopper.svg?style=flat
   :target: https://anaconda.org/bioconda/pychopper
   :alt:   (downloads)
.. |docker_pychopper| image:: https://quay.io/repository/biocontainers/pychopper/status
   :target: https://quay.io/repository/biocontainers/pychopper
.. _`pychopper/tags`: https://quay.io/repository/biocontainers/pychopper?tab=tags


.. raw:: html

    <script>
        var package = "pychopper";
        var versions = ["2.7.10","2.7.9","2.5.0","2.4.0","2.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pychopper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pychopper/README.html