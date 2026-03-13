:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panaroo'
.. highlight: bash

panaroo
=======

.. conda:recipe:: panaroo
   :replaces_section_title:
   :noindex:

   panaroo \- an updated pipeline for pangenome investigation

   :homepage: https://gtonkinhill.github.io/panaroo
   :documentation: https://gtonkinhill.github.io/panaroo/#/gettingstarted/quickstart
   
   :developer docs: https://github.com/gtonkinhill/panaroo
   :license: MIT / MIT
   :recipe: /`panaroo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panaroo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panaroo/meta.yaml>`_

   


.. conda:package:: panaroo

   |downloads_panaroo| |docker_panaroo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.0-0</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.3.4-0</code>,  <code>1.3.3-0</code>,  </span></summary>
      

      ``1.6.0-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.0-0``,  ``1.2.10-0``,  ``1.2.9-0``,  ``1.2.8-0``,  ``1.2.7-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biocode: 
   :depends on biopython: 
   :depends on cd-hit: 
   :depends on dendropy: 
   :depends on gffutils: 
   :depends on intbitset: 
   :depends on joblib: 
   :depends on mafft: 
   :depends on mash: 
   :depends on matplotlib-base: 
   :depends on networkx: 
   :depends on numba: 
   :depends on numpy: 
   :depends on plotly: 
   :depends on prank: 
   :depends on prokka: 
   :depends on python: ``>=3.6``
   :depends on python-edlib: 
   :depends on scikit-learn: 
   :depends on scipy: 
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

    pixi global install panaroo

to add into an existing workspace instead, run::

    pixi add panaroo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install panaroo

Alternatively, to install into a new environment, run::

    conda create -n envname panaroo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/panaroo:<tag>

(see `panaroo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_panaroo| image:: https://img.shields.io/conda/dn/bioconda/panaroo.svg?style=flat
   :target: https://anaconda.org/bioconda/panaroo
   :alt:   (downloads)
.. |docker_panaroo| image:: https://quay.io/repository/biocontainers/panaroo/status
   :target: https://quay.io/repository/biocontainers/panaroo
.. _`panaroo/tags`: https://quay.io/repository/biocontainers/panaroo?tab=tags


.. raw:: html

    <script>
        var package = "panaroo";
        var versions = ["1.6.0","1.5.2","1.5.1","1.5.0","1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panaroo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panaroo/README.html