:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hybracter'
.. highlight: bash

hybracter
=========

.. conda:recipe:: hybracter
   :replaces_section_title:
   :noindex:

   An automated long\-read first bacterial genome assembly pipeline.

   :homepage: https://github.com/gbouras13/hybracter
   :documentation: https://hybracter.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`hybracter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hybracter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hybracter/meta.yaml>`_

   


.. conda:package:: hybracter

   |downloads_hybracter| |docker_hybracter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.0-0</code>,  <code>0.11.2-0</code>,  <code>0.11.1-0</code>,  <code>0.11.0-0</code>,  <code>0.10.1-0</code>,  <code>0.10.0-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.0-0</code>,  </span></summary>
      

      ``0.12.0-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on attrmap: ``>=0.0.5``
   :depends on biopython: ``>=1.76``
   :depends on click: ``>=8.1.3``
   :depends on minimap2: ``>=2.26``
   :depends on python: ``>=3.9``
   :depends on pyyaml: ``>=6.0``
   :depends on snakemake-minimal: ``>=7.14.0``

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

    pixi global install hybracter

to add into an existing workspace instead, run::

    pixi add hybracter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hybracter

Alternatively, to install into a new environment, run::

    conda create -n envname hybracter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hybracter:<tag>

(see `hybracter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hybracter| image:: https://img.shields.io/conda/dn/bioconda/hybracter.svg?style=flat
   :target: https://anaconda.org/bioconda/hybracter
   :alt:   (downloads)
.. |docker_hybracter| image:: https://quay.io/repository/biocontainers/hybracter/status
   :target: https://quay.io/repository/biocontainers/hybracter
.. _`hybracter/tags`: https://quay.io/repository/biocontainers/hybracter?tab=tags


.. raw:: html

    <script>
        var package = "hybracter";
        var versions = ["0.12.0","0.11.2","0.11.1","0.11.0","0.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hybracter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hybracter/README.html