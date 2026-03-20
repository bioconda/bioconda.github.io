:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'echtvar'
.. highlight: bash

echtvar
=======

.. conda:recipe:: echtvar
   :replaces_section_title:
   :noindex:

   Using all the bits for echt rapid variant annotation and filtering.

   :homepage: https://github.com/brentp/echtvar
   :documentation: https://github.com/brentp/echtvar/blob/v0.2.2/README.md
   
   :license: MIT / MIT
   :recipe: /`echtvar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/echtvar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/echtvar/meta.yaml>`_

   


.. conda:package:: echtvar

   |downloads_echtvar| |docker_echtvar|

   :versions:
      
      

      ``0.2.2-0``

      

   
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on openssl: ``>=3.5.5,<4.0a0``

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

    pixi global install echtvar

to add into an existing workspace instead, run::

    pixi add echtvar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install echtvar

Alternatively, to install into a new environment, run::

    conda create -n envname echtvar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/echtvar:<tag>

(see `echtvar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_echtvar| image:: https://img.shields.io/conda/dn/bioconda/echtvar.svg?style=flat
   :target: https://anaconda.org/bioconda/echtvar
   :alt:   (downloads)
.. |docker_echtvar| image:: https://quay.io/repository/biocontainers/echtvar/status
   :target: https://quay.io/repository/biocontainers/echtvar
.. _`echtvar/tags`: https://quay.io/repository/biocontainers/echtvar?tab=tags


.. raw:: html

    <script>
        var package = "echtvar";
        var versions = ["0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/echtvar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/echtvar/README.html