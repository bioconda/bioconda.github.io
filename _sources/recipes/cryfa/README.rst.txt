:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cryfa'
.. highlight: bash

cryfa
=====

.. conda:recipe:: cryfa
   :replaces_section_title:
   :noindex:

   A secure encryption tool for genomic data

   :homepage: https://github.com/smortezah/cryfa
   :license: GPL / GPL3
   :recipe: /`cryfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cryfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cryfa/meta.yaml>`_

   


.. conda:package:: cryfa

   |downloads_cryfa| |docker_cryfa|

   :versions:
      
      

      ``20.04-3``,  ``20.04-2``,  ``20.04-1``,  ``20.04-0``,  ``18.06-2``,  ``18.06-1``,  ``18.06-0``

      

   
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

    pixi global install cryfa

to add into an existing workspace instead, run::

    pixi add cryfa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cryfa

Alternatively, to install into a new environment, run::

    conda create -n envname cryfa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cryfa:<tag>

(see `cryfa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cryfa| image:: https://img.shields.io/conda/dn/bioconda/cryfa.svg?style=flat
   :target: https://anaconda.org/bioconda/cryfa
   :alt:   (downloads)
.. |docker_cryfa| image:: https://quay.io/repository/biocontainers/cryfa/status
   :target: https://quay.io/repository/biocontainers/cryfa
.. _`cryfa/tags`: https://quay.io/repository/biocontainers/cryfa?tab=tags


.. raw:: html

    <script>
        var package = "cryfa";
        var versions = ["20.04","20.04","20.04","20.04","18.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cryfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cryfa/README.html