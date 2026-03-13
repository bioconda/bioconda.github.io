:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genesplicer'
.. highlight: bash

genesplicer
===========

.. conda:recipe:: genesplicer
   :replaces_section_title:
   :noindex:

   GeneSplicer \: A computational method for splice site prediction.

   :homepage: https://ccb.jhu.edu/software/genesplicer
   :license: OSI
   :recipe: /`genesplicer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genesplicer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genesplicer/meta.yaml>`_
   :links: biotools: :biotools:`genesplicer`

   


.. conda:package:: genesplicer

   |downloads_genesplicer| |docker_genesplicer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0-1</code>,  <code>1.0-0</code>,  <code>0_2003.04.03-8</code>,  <code>0_2003.04.03-7</code>,  <code>0_2003.04.03-6</code>,  <code>0_2003.04.03-5</code>,  <code>0_2003.04.03-4</code>,  <code>0_2003.04.03-3</code>,  <code>0_2003.04.03-2</code>,  </span></summary>
      

      ``1.0-1``,  ``1.0-0``,  ``0_2003.04.03-8``,  ``0_2003.04.03-7``,  ``0_2003.04.03-6``,  ``0_2003.04.03-5``,  ``0_2003.04.03-4``,  ``0_2003.04.03-3``,  ``0_2003.04.03-2``,  ``0_2003.04.03-1``,  ``0_2003.04.03-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: 

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

    pixi global install genesplicer

to add into an existing workspace instead, run::

    pixi add genesplicer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genesplicer

Alternatively, to install into a new environment, run::

    conda create -n envname genesplicer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genesplicer:<tag>

(see `genesplicer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genesplicer| image:: https://img.shields.io/conda/dn/bioconda/genesplicer.svg?style=flat
   :target: https://anaconda.org/bioconda/genesplicer
   :alt:   (downloads)
.. |docker_genesplicer| image:: https://quay.io/repository/biocontainers/genesplicer/status
   :target: https://quay.io/repository/biocontainers/genesplicer
.. _`genesplicer/tags`: https://quay.io/repository/biocontainers/genesplicer?tab=tags


.. raw:: html

    <script>
        var package = "genesplicer";
        var versions = ["1.0","1.0","0_2003.04.03","0_2003.04.03","0_2003.04.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genesplicer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genesplicer/README.html