:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqlogo'
.. highlight: bash

seqlogo
=======

.. conda:recipe:: seqlogo
   :replaces_section_title:
   :noindex:

   Python port of the R Bioconductor \`seqlogo\` package

   :homepage: https://github.com/betteridiot/seqlogo
   :license: BSD / BSD-3-Clause
   :recipe: /`seqlogo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqlogo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqlogo/meta.yaml>`_

   


.. conda:package:: seqlogo

   |downloads_seqlogo| |docker_seqlogo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.29.11-0</code>,  <code>5.29.9-0</code>,  <code>5.29.8-0</code>,  <code>5.29.7-0</code>,  <code>5.29.6-0</code>,  <code>5.29.5-0</code>,  <code>5.29.4-0</code>,  <code>5.29.1-0</code>,  <code>5.2.9-1</code>,  </span></summary>
      

      ``5.29.11-0``,  ``5.29.9-0``,  ``5.29.8-0``,  ``5.29.7-0``,  ``5.29.6-0``,  ``5.29.5-0``,  ``5.29.4-0``,  ``5.29.1-0``,  ``5.2.9-1``,  ``0.2.0-0``,  ``0.1.13-0``,  ``0.1.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends on ghostscript: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3``
   :depends on weblogo: 

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

    pixi global install seqlogo

to add into an existing workspace instead, run::

    pixi add seqlogo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seqlogo

Alternatively, to install into a new environment, run::

    conda create -n envname seqlogo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seqlogo:<tag>

(see `seqlogo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seqlogo| image:: https://img.shields.io/conda/dn/bioconda/seqlogo.svg?style=flat
   :target: https://anaconda.org/bioconda/seqlogo
   :alt:   (downloads)
.. |docker_seqlogo| image:: https://quay.io/repository/biocontainers/seqlogo/status
   :target: https://quay.io/repository/biocontainers/seqlogo
.. _`seqlogo/tags`: https://quay.io/repository/biocontainers/seqlogo?tab=tags


.. raw:: html

    <script>
        var package = "seqlogo";
        var versions = ["5.29.11","5.29.9","5.29.8","5.29.7","5.29.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqlogo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqlogo/README.html