:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylip'
.. highlight: bash

phylip
======

.. conda:recipe:: phylip
   :replaces_section_title:
   :noindex:

   Package of programs for inferring phylogenies.

   :homepage: https://phylipweb.github.io/phylip
   :license: BSD
   :recipe: /`phylip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylip/meta.yaml>`_
   :links: biotools: :biotools:`PHYLIP`

   


.. conda:package:: phylip

   |downloads_phylip| |docker_phylip|

   :versions:
      
      

      ``3.697-3``,  ``3.697-2``,  ``3.697-1``,  ``3.697-0``,  ``3.696-3``,  ``3.696-2``,  ``3.696-1``,  ``3.696-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on openjdk: ``>=6``
   :depends on python: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install phylip

to add into an existing workspace instead, run::

    pixi add phylip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phylip

Alternatively, to install into a new environment, run::

    conda create -n envname phylip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phylip:<tag>

(see `phylip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phylip| image:: https://img.shields.io/conda/dn/bioconda/phylip.svg?style=flat
   :target: https://anaconda.org/bioconda/phylip
   :alt:   (downloads)
.. |docker_phylip| image:: https://quay.io/repository/biocontainers/phylip/status
   :target: https://quay.io/repository/biocontainers/phylip
.. _`phylip/tags`: https://quay.io/repository/biocontainers/phylip?tab=tags


.. raw:: html

    <script>
        var package = "phylip";
        var versions = ["3.697","3.697","3.697","3.697","3.696"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylip/README.html