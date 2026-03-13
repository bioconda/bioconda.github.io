:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'el_gato'
.. highlight: bash

el_gato
=======

.. conda:recipe:: el_gato
   :replaces_section_title:
   :noindex:

   Perform Legionella pneumophila Sequence Based Typing \(SBT\) from short reads or assemblies.

   :homepage: https://github.com/CDCgov/el_gato
   :documentation: https://github.com/CDCgov/el_gato/blob/1.22.0/README.md
   
   :license: MIT / MIT
   :recipe: /`el_gato <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/el_gato>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/el_gato/meta.yaml>`_

   


.. conda:package:: el_gato

   |downloads_el_gato| |docker_el_gato|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.21.2-0</code>,  <code>1.21.0-0</code>,  <code>1.20.2-0</code>,  <code>1.20.1-0</code>,  <code>1.19.0-0</code>,  <code>1.18.2-0</code>,  <code>1.18.1-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.21.2-0``,  ``1.21.0-0``,  ``1.20.2-0``,  ``1.20.1-0``,  ``1.19.0-0``,  ``1.18.2-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.15.2-0``,  ``1.15.0-0``,  ``1.14.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blast: ``>=2.13``
   :depends on colorama: 
   :depends on fpdf2: 
   :depends on ispcr: ``>=33.0``
   :depends on minimap2: ``>=2.24``
   :depends on packaging: 
   :depends on python: ``>=3.8,<3.12``
   :depends on samtools: ``>=1.15.1``

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

    pixi global install el_gato

to add into an existing workspace instead, run::

    pixi add el_gato

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install el_gato

Alternatively, to install into a new environment, run::

    conda create -n envname el_gato

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/el_gato:<tag>

(see `el_gato/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_el_gato| image:: https://img.shields.io/conda/dn/bioconda/el_gato.svg?style=flat
   :target: https://anaconda.org/bioconda/el_gato
   :alt:   (downloads)
.. |docker_el_gato| image:: https://quay.io/repository/biocontainers/el_gato/status
   :target: https://quay.io/repository/biocontainers/el_gato
.. _`el_gato/tags`: https://quay.io/repository/biocontainers/el_gato?tab=tags


.. raw:: html

    <script>
        var package = "el_gato";
        var versions = ["1.22.0","1.21.2","1.21.0","1.20.2","1.20.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/el_gato/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/el_gato/README.html