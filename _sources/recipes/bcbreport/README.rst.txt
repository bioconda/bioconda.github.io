:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcbreport'
.. highlight: bash

bcbreport
=========

.. conda:recipe:: bcbreport
   :replaces_section_title:
   :noindex:

   Rmd templates for bcbio\-nextgen analysis

   :homepage: https://github.com/lpantano/bcbio.coverage
   :license: MIT License
   :recipe: /`bcbreport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbreport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbreport/meta.yaml>`_

   


.. conda:package:: bcbreport

   |downloads_bcbreport| |docker_bcbreport|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.29-2</code>,  <code>0.99.29-1</code>,  <code>0.99.29-0</code>,  <code>0.99.28-0</code>,  <code>0.99.27-0</code>,  <code>0.99.26-0</code>,  <code>0.99.25-0</code>,  <code>0.99.24-0</code>,  <code>0.99.23-1</code>,  </span></summary>
      

      ``0.99.29-2``,  ``0.99.29-1``,  ``0.99.29-0``,  ``0.99.28-0``,  ``0.99.27-0``,  ``0.99.26-0``,  ``0.99.25-0``,  ``0.99.24-0``,  ``0.99.23-1``,  ``0.99.22-1``,  ``0.99.21-1``,  ``0.99.20-1``,  ``0.99.20-0``

      
      .. raw:: html

         </details>
      

   
   :depends on python: 

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

    pixi global install bcbreport

to add into an existing workspace instead, run::

    pixi add bcbreport

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bcbreport

Alternatively, to install into a new environment, run::

    conda create -n envname bcbreport

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bcbreport:<tag>

(see `bcbreport/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bcbreport| image:: https://img.shields.io/conda/dn/bioconda/bcbreport.svg?style=flat
   :target: https://anaconda.org/bioconda/bcbreport
   :alt:   (downloads)
.. |docker_bcbreport| image:: https://quay.io/repository/biocontainers/bcbreport/status
   :target: https://quay.io/repository/biocontainers/bcbreport
.. _`bcbreport/tags`: https://quay.io/repository/biocontainers/bcbreport?tab=tags


.. raw:: html

    <script>
        var package = "bcbreport";
        var versions = ["0.99.29","0.99.29","0.99.29","0.99.28","0.99.27"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbreport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbreport/README.html