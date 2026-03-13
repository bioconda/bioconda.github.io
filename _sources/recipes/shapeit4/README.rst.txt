:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shapeit4'
.. highlight: bash

shapeit4
========

.. conda:recipe:: shapeit4
   :replaces_section_title:
   :noindex:

   fast and accurate method for estimation of haplotypes \(phasing\)

   :homepage: https://odelaneau.github.io/shapeit4/
   :license: MIT
   :recipe: /`shapeit4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapeit4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapeit4/meta.yaml>`_
   :links: doi: :doi:`10.1101/493403`

   


.. conda:package:: shapeit4

   |downloads_shapeit4| |docker_shapeit4|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.2.2-5</code>,  <code>4.2.2-4</code>,  <code>4.2.2-3</code>,  <code>4.2.2-2</code>,  <code>4.2.2-1</code>,  <code>4.2.2-0</code>,  <code>4.2.1-0</code>,  <code>4.2.0-1</code>,  <code>4.2.0-0</code>,  </span></summary>
      

      ``4.2.2-5``,  ``4.2.2-4``,  ``4.2.2-3``,  ``4.2.2-2``,  ``4.2.2-1``,  ``4.2.2-0``,  ``4.2.1-0``,  ``4.2.0-1``,  ``4.2.0-0``,  ``4.1.3-1``,  ``4.1.3-0``,  ``4.1-0``,  ``4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on htslib: ``1.11.*``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install shapeit4

to add into an existing workspace instead, run::

    pixi add shapeit4

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install shapeit4

Alternatively, to install into a new environment, run::

    conda create -n envname shapeit4

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/shapeit4:<tag>

(see `shapeit4/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_shapeit4| image:: https://img.shields.io/conda/dn/bioconda/shapeit4.svg?style=flat
   :target: https://anaconda.org/bioconda/shapeit4
   :alt:   (downloads)
.. |docker_shapeit4| image:: https://quay.io/repository/biocontainers/shapeit4/status
   :target: https://quay.io/repository/biocontainers/shapeit4
.. _`shapeit4/tags`: https://quay.io/repository/biocontainers/shapeit4?tab=tags


.. raw:: html

    <script>
        var package = "shapeit4";
        var versions = ["4.2.2","4.2.2","4.2.2","4.2.2","4.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shapeit4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shapeit4/README.html