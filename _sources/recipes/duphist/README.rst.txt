:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'duphist'
.. highlight: bash

duphist
=======

.. conda:recipe:: duphist
   :replaces_section_title:
   :noindex:

   DupHIST\: Duplication History Inference with Substitution\-integrated Topology

   :homepage: https://github.com/minjeongjj/DupHIST
   :license: MIT
   :recipe: /`duphist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duphist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duphist/meta.yaml>`_

   


.. conda:package:: duphist

   |downloads_duphist| |docker_duphist|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.1-0</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.9-0</code>,  <code>1.0.8-0</code>,  <code>1.0.7-0</code>,  <code>1.0.6-0</code>,  <code>1.0.5-0</code>,  <code>1.0.4-1</code>,  </span></summary>
      

      ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on fasttree: 
   :depends on iqtree: 
   :depends on kakscalculator2: 
   :depends on mafft: 
   :depends on perl: 
   :depends on perl-config-tiny: 
   :depends on perl-data-dumper: 
   :depends on perl-statistics-r: 
   :depends on prank: 
   :depends on r-agricolae: 
   :depends on r-ape: 
   :depends on r-base: 
   :depends on r-cluster: 
   :depends on r-desctools: 
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-nbclust: 
   :depends on r-tictoc: 

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

    pixi global install duphist

to add into an existing workspace instead, run::

    pixi add duphist

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install duphist

Alternatively, to install into a new environment, run::

    conda create -n envname duphist

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/duphist:<tag>

(see `duphist/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_duphist| image:: https://img.shields.io/conda/dn/bioconda/duphist.svg?style=flat
   :target: https://anaconda.org/bioconda/duphist
   :alt:   (downloads)
.. |docker_duphist| image:: https://quay.io/repository/biocontainers/duphist/status
   :target: https://quay.io/repository/biocontainers/duphist
.. _`duphist/tags`: https://quay.io/repository/biocontainers/duphist?tab=tags


.. raw:: html

    <script>
        var package = "duphist";
        var versions = ["1.1.1","1.1.0","1.1.0","1.0.9","1.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/duphist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/duphist/README.html