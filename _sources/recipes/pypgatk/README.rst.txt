:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pypgatk'
.. highlight: bash

pypgatk
=======

.. conda:recipe:: pypgatk
   :replaces_section_title:
   :noindex:

   The Pypgatk framework and library provides a set of tools to perform ProteoGenomics Analysis.

   :homepage: http://github.com/bigbio/py-pgatk
   :documentation: https://pgatk.readthedocs.io/en/latest/pypgatk.html
   
   :developer docs: https://github.com/bigbio/py-pgatk
   :license: APACHE / Apache 2
   :recipe: /`pypgatk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypgatk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypgatk/meta.yaml>`_

   


.. conda:package:: pypgatk

   |downloads_pypgatk| |docker_pypgatk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.24-0</code>,  <code>0.0.23-0</code>,  <code>0.0.22-0</code>,  <code>0.0.19-0</code>,  <code>0.0.18-0</code>,  <code>0.0.17-0</code>,  <code>0.0.16-0</code>,  <code>0.0.15-0</code>,  <code>0.0.14-0</code>,  </span></summary>
      

      ``0.0.24-0``,  ``0.0.23-0``,  ``0.0.22-0``,  ``0.0.19-0``,  ``0.0.18-0``,  ``0.0.17-0``,  ``0.0.16-0``,  ``0.0.15-0``,  ``0.0.14-0``,  ``0.0.13-0``,  ``0.0.12-0``,  ``0.0.11-0``,  ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on click: 
   :depends on gffutils: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pathos: 
   :depends on pyahocorasick: 
   :depends on pybedtools: 
   :depends on pyopenms: ``2.7.0``
   :depends on pysam: ``>=0.16``
   :depends on pyteomics: ``>=4.2``
   :depends on python: ``>=3``
   :depends on pyvcf: 
   :depends on pyyaml: 
   :depends on ratelimit: 
   :depends on requests: 
   :depends on simplejson: 
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

    pixi global install pypgatk

to add into an existing workspace instead, run::

    pixi add pypgatk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pypgatk

Alternatively, to install into a new environment, run::

    conda create -n envname pypgatk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pypgatk:<tag>

(see `pypgatk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pypgatk| image:: https://img.shields.io/conda/dn/bioconda/pypgatk.svg?style=flat
   :target: https://anaconda.org/bioconda/pypgatk
   :alt:   (downloads)
.. |docker_pypgatk| image:: https://quay.io/repository/biocontainers/pypgatk/status
   :target: https://quay.io/repository/biocontainers/pypgatk
.. _`pypgatk/tags`: https://quay.io/repository/biocontainers/pypgatk?tab=tags


.. raw:: html

    <script>
        var package = "pypgatk";
        var versions = ["0.0.24","0.0.23","0.0.22","0.0.19","0.0.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pypgatk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pypgatk/README.html