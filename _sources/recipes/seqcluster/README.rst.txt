:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqcluster'
.. highlight: bash

seqcluster
==========

.. conda:recipe:: seqcluster
   :replaces_section_title:
   :noindex:

   small RNA analysis from NGS data

   :homepage: https://github.com/lpantano/seqclsuter
   :license: MIT
   :recipe: /`seqcluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqcluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqcluster/meta.yaml>`_
   :links: biotools: :biotools:`seqcluster`

   


.. conda:package:: seqcluster

   |downloads_seqcluster| |docker_seqcluster|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.9-0</code>,  <code>1.2.8-0</code>,  <code>1.2.7-1</code>,  <code>1.2.7-0</code>,  <code>1.2.5-0</code>,  <code>1.2.4-0</code>,  <code>1.2.4a15-1</code>,  <code>1.2.4a15-0</code>,  <code>1.2.4a14-2</code>,  </span></summary>
      

      ``1.2.9-0``,  ``1.2.8-0``,  ``1.2.7-1``,  ``1.2.7-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.4a15-1``,  ``1.2.4a15-0``,  ``1.2.4a14-2``,  ``1.2.4a14-1``,  ``1.2.4a14-0``,  ``1.2.4a12-1``,  ``1.2.4a12-0``,  ``1.2.4a6-0``,  ``1.2.4a5-0``,  ``1.2.4a-6``,  ``1.2.4a-5``,  ``1.2.4a-4``,  ``1.2.4a-2``,  ``1.2.4a-1``,  ``1.2.4a-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.14-0``,  ``1.1.13-3``,  ``1.1.13-2``,  ``1.1.13-1``,  ``1.1.13-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on mirtop: 
   :depends on pandas: 
   :depends on progressbar2: 
   :depends on pybedtools: 
   :depends on pysam: 
   :depends on python: 
   :depends on pyyaml: 
   :depends on scipy: 
   :depends on six: 
   :depends on viennarna: 

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

    pixi global install seqcluster

to add into an existing workspace instead, run::

    pixi add seqcluster

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seqcluster

Alternatively, to install into a new environment, run::

    conda create -n envname seqcluster

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seqcluster:<tag>

(see `seqcluster/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seqcluster| image:: https://img.shields.io/conda/dn/bioconda/seqcluster.svg?style=flat
   :target: https://anaconda.org/bioconda/seqcluster
   :alt:   (downloads)
.. |docker_seqcluster| image:: https://quay.io/repository/biocontainers/seqcluster/status
   :target: https://quay.io/repository/biocontainers/seqcluster
.. _`seqcluster/tags`: https://quay.io/repository/biocontainers/seqcluster?tab=tags


.. raw:: html

    <script>
        var package = "seqcluster";
        var versions = ["1.2.9","1.2.8","1.2.7","1.2.7","1.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqcluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqcluster/README.html