:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyani'
.. highlight: bash

pyani
=====

.. conda:recipe:: pyani
   :replaces_section_title:
   :noindex:

   pyani provides a package and script for calculation of genome\-scale average nucleotide identity.

   :homepage: https://github.com/widdowquinn/pyani
   :documentation: https://widdowquinn.github.io/pyani
   
   :license: MIT / MIT
   :recipe: /`pyani <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyani>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyani/meta.yaml>`_
   :links: doi: :doi:`10.1039/C5AY02550H`, biotools: :biotools:`pyani`

   


.. conda:package:: pyani

   |downloads_pyani| |docker_pyani|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.13.1-0</code>,  <code>0.2.13-0</code>,  <code>0.2.12-0</code>,  <code>0.2.11-0</code>,  <code>0.2.10-0</code>,  <code>0.2.9-0</code>,  <code>0.2.7-1</code>,  <code>0.2.7-0</code>,  <code>0.2.3-0</code>,  </span></summary>
      

      ``0.2.13.1-0``,  ``0.2.13-0``,  ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.10-0``,  ``0.2.9-0``,  ``0.2.7-1``,  ``0.2.7-0``,  ``0.2.3-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on blast: 
   :depends on blast-legacy: 
   :depends on intervaltree: 
   :depends on matplotlib-base: 
   :depends on mummer: 
   :depends on namedlist: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.7``
   :depends on scipy: 
   :depends on seaborn-base: 
   :depends on sqlalchemy: 
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

    pixi global install pyani

to add into an existing workspace instead, run::

    pixi add pyani

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyani

Alternatively, to install into a new environment, run::

    conda create -n envname pyani

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyani:<tag>

(see `pyani/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyani| image:: https://img.shields.io/conda/dn/bioconda/pyani.svg?style=flat
   :target: https://anaconda.org/bioconda/pyani
   :alt:   (downloads)
.. |docker_pyani| image:: https://quay.io/repository/biocontainers/pyani/status
   :target: https://quay.io/repository/biocontainers/pyani
.. _`pyani/tags`: https://quay.io/repository/biocontainers/pyani?tab=tags


.. raw:: html

    <script>
        var package = "pyani";
        var versions = ["0.2.13.1","0.2.13","0.2.12","0.2.11","0.2.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyani/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyani/README.html