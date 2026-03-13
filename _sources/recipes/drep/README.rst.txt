:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'drep'
.. highlight: bash

drep
====

.. conda:recipe:: drep
   :replaces_section_title:
   :noindex:

   De\-replication of microbial genomes assembled from multiple samples.

   :homepage: https://github.com/MrOlm/drep
   :documentation: https://drep.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`drep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drep/meta.yaml>`_
   :links: biotools: :biotools:`drep`, usegalaxy-eu: :usegalaxy-eu:`drep_compare`, usegalaxy-eu: :usegalaxy-eu:`drep_dereplicate`, doi: :doi:`10.1038/ismej.2017.126`

   


.. conda:package:: drep

   |downloads_drep| |docker_drep|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.6.2-0</code>,  <code>3.6.1-0</code>,  <code>3.5.0-0</code>,  <code>3.4.5-0</code>,  <code>3.4.4-0</code>,  <code>3.4.3-0</code>,  <code>3.4.2-0</code>,  <code>3.4.1-0</code>,  <code>3.4.0-0</code>,  </span></summary>
      

      ``3.6.2-0``,  ``3.6.1-0``,  ``3.5.0-0``,  ``3.4.5-0``,  ``3.4.4-0``,  ``3.4.3-0``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.2-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.1-0``,  ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.4-0``,  ``2.5.3-0``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.2-1``,  ``2.3.2-0``,  ``2.2.3-1``,  ``2.2.3-0``,  ``2.0.5-2``,  ``2.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on checkm-genome: 
   :depends on fastani: 
   :depends on mash: 
   :depends on matplotlib-base: 
   :depends on mummer4: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on prodigal: 
   :depends on pytest: 
   :depends on python: ``>=3``
   :depends on scikit-learn: 
   :depends on seaborn-base: 
   :depends on skani: 
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

    pixi global install drep

to add into an existing workspace instead, run::

    pixi add drep

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install drep

Alternatively, to install into a new environment, run::

    conda create -n envname drep

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/drep:<tag>

(see `drep/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_drep| image:: https://img.shields.io/conda/dn/bioconda/drep.svg?style=flat
   :target: https://anaconda.org/bioconda/drep
   :alt:   (downloads)
.. |docker_drep| image:: https://quay.io/repository/biocontainers/drep/status
   :target: https://quay.io/repository/biocontainers/drep
.. _`drep/tags`: https://quay.io/repository/biocontainers/drep?tab=tags


.. raw:: html

    <script>
        var package = "drep";
        var versions = ["3.6.2","3.6.1","3.5.0","3.4.5","3.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/drep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/drep/README.html