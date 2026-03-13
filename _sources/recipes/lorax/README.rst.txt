:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lorax'
.. highlight: bash

lorax
=====

.. conda:recipe:: lorax
   :replaces_section_title:
   :noindex:

   A long\-read analysis toolbox for cancer genomics

   :homepage: https://github.com/tobiasrausch/lorax
   :license: BSD / BSD-3-Clause
   :recipe: /`lorax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorax/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.xgen.2023.100281`

   


.. conda:package:: lorax

   |downloads_lorax| |docker_lorax|

   :versions:
      
      

      ``0.5.1-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-2``,  ``0.3.7-1``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-0``

      

   
   :depends on boost-cpp: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on htslib: ``>=1.22,<1.24.0a0``
   :depends on libdeflate: ``>=1.22,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install lorax

to add into an existing workspace instead, run::

    pixi add lorax

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lorax

Alternatively, to install into a new environment, run::

    conda create -n envname lorax

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lorax:<tag>

(see `lorax/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lorax| image:: https://img.shields.io/conda/dn/bioconda/lorax.svg?style=flat
   :target: https://anaconda.org/bioconda/lorax
   :alt:   (downloads)
.. |docker_lorax| image:: https://quay.io/repository/biocontainers/lorax/status
   :target: https://quay.io/repository/biocontainers/lorax
.. _`lorax/tags`: https://quay.io/repository/biocontainers/lorax?tab=tags


.. raw:: html

    <script>
        var package = "lorax";
        var versions = ["0.5.1","0.3.9","0.3.8","0.3.7","0.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lorax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lorax/README.html