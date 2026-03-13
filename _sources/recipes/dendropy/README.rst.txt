:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dendropy'
.. highlight: bash

dendropy
========

.. conda:recipe:: dendropy
   :replaces_section_title:
   :noindex:

   A Python library for phylogenetics and phylogenetic computing\: reading\, writing\, simulation\, processing and manipulation of phylogenetic trees \(phylogenies\) and characters.

   :homepage: https://github.com/jeetsukumaran/DendroPy
   :documentation: https://dendropy.org
   
   :license: BSD / BSD-3-Clause
   :recipe: /`dendropy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dendropy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dendropy/meta.yaml>`_
   :links: biotools: :biotools:`dendropy`, doi: :doi:`10.1093/bioinformatics/btq228`

   


.. conda:package:: dendropy

   |downloads_dendropy| |docker_dendropy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.0.8-1</code>,  <code>5.0.8-0</code>,  <code>5.0.7-0</code>,  <code>5.0.6-0</code>,  <code>5.0.5-0</code>,  <code>5.0.4-0</code>,  <code>5.0.3-0</code>,  <code>5.0.2-0</code>,  <code>5.0.1-0</code>,  </span></summary>
      

      ``5.0.8-1``,  ``5.0.8-0``,  ``5.0.7-0``,  ``5.0.6-0``,  ``5.0.5-0``,  ``5.0.4-0``,  ``5.0.3-0``,  ``5.0.2-0``,  ``5.0.1-0``,  ``5.0.0-0``,  ``4.6.1-0``,  ``4.6.0-0``,  ``4.5.2-0``,  ``4.5.1-0``,  ``4.4.0-2``,  ``4.4.0-1``,  ``4.4.0-0``,  ``4.2.0-2``,  ``4.2.0-0``,  ``4.1.0-0``,  ``4.0.3-0``,  ``3.12.3-1``,  ``3.12.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on python: ``>=3.6``

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

    pixi global install dendropy

to add into an existing workspace instead, run::

    pixi add dendropy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dendropy

Alternatively, to install into a new environment, run::

    conda create -n envname dendropy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dendropy:<tag>

(see `dendropy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dendropy| image:: https://img.shields.io/conda/dn/bioconda/dendropy.svg?style=flat
   :target: https://anaconda.org/bioconda/dendropy
   :alt:   (downloads)
.. |docker_dendropy| image:: https://quay.io/repository/biocontainers/dendropy/status
   :target: https://quay.io/repository/biocontainers/dendropy
.. _`dendropy/tags`: https://quay.io/repository/biocontainers/dendropy?tab=tags


.. raw:: html

    <script>
        var package = "dendropy";
        var versions = ["5.0.8","5.0.8","5.0.7","5.0.6","5.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dendropy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dendropy/README.html