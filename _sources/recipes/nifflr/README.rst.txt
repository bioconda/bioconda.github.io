:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nifflr'
.. highlight: bash

nifflr
======

.. conda:recipe:: nifflr
   :replaces_section_title:
   :noindex:

   NIFFLR\: Novel IsoForm Finder using Long RNASeq reads.

   :homepage: https://github.com/alguoo314/NIFFLR
   :documentation: https://github.com/alguoo314/NIFFLR/blob/v2.0.0/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`nifflr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nifflr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nifflr/meta.yaml>`_

   


.. conda:package:: nifflr

   |downloads_nifflr| |docker_nifflr|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libboost: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on wget: 

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

    pixi global install nifflr

to add into an existing workspace instead, run::

    pixi add nifflr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nifflr

Alternatively, to install into a new environment, run::

    conda create -n envname nifflr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nifflr:<tag>

(see `nifflr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nifflr| image:: https://img.shields.io/conda/dn/bioconda/nifflr.svg?style=flat
   :target: https://anaconda.org/bioconda/nifflr
   :alt:   (downloads)
.. |docker_nifflr| image:: https://quay.io/repository/biocontainers/nifflr/status
   :target: https://quay.io/repository/biocontainers/nifflr
.. _`nifflr/tags`: https://quay.io/repository/biocontainers/nifflr?tab=tags


.. raw:: html

    <script>
        var package = "nifflr";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nifflr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nifflr/README.html